//@ts-check
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { APP_SECRET } from "../../utils";

/**
 * @param {any} _
 * @param {any} args
 * @param {import('../../..').IRequestContext} context
 * @param {any} _info
 */
const signup = async (_, args, context, _info) => {
  let existingUser = await context.prisma.user( { email: args.email })
  if ( existingUser ) {
    throw new Error("User with that email already exists")
  }

  const password = await bcrypt.hash(args.password, 10);
  const user = await context.prisma.createUser({ ...args, password });
  const token = jwt.sign({ email: user.email, name: user.name }, APP_SECRET);

  return {
    token,
    user,
  };
};

/**
 * @param {any} _
 * @param {any} args
 * @param {import('../../..').IRequestContext} context
 * @param {any} _info
 */
const login = async (_, args, context, _info) => {
  let email = args.email;
  const user = await context.prisma.user({ email: args.email });
  if (!user) {
    throw new Error("No such user found");
  }

  const valid = await bcrypt.compare(args.password, user.password);
  if (!valid) {
    throw new Error("Invalid password");
  }

  const token = jwt.sign({ email: user.email, name: user.name }, APP_SECRET);

  return {
    token,
    user,
  };
};

export default {
  signup,
  login,
};
