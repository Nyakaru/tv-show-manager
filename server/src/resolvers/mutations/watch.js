//@ts-check
import { WatchFragment } from "../../utils";

/**
 * @param {any} _
 * @param {any} input
 * @param {import('../../..').IRequestContext} context
 * @param {any} _info
 */
const watched = async (_, { input }, context, _info) => {
  let email = context?.user?.email;

  if (!email) {
    throw new Error("Sorry cannot perform operation at the moment");
  }

  return await context.prisma
    .createWatched({ ...input, user: { connect: { email: email } } })
    .$fragment(WatchFragment);
};

/**
 * @param {*} _
 * @param {*} args
 * @param {import('../../..').IRequestContext} context
 * @param {*} _info
 */
const updateWatchStatus = async (_, args, context, _info) => {
  let input = args.data;
  let email = context?.user?.email;

  if (!email) {
    throw new Error("Sorry cannot perform operation at the moment");
  }

  return await context.prisma.updateWatched({
    data: input,
    where: {
      id: args.where.id,
    },
  });
};

export default {
  watched,
  updateWatchStatus,
};
