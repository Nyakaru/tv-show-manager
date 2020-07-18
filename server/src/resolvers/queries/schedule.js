//@ts-check
/**
 * @param {*} _
 * @param {*} _args
 * @param {import('../../..').IRequestContext} context
 * @param {*} _info
 */
const schedule = async (_, _args, context, _info) => {
  let email = context?.user?.email;
  if (!email) {
    throw new Error("Sorry cannot perform operation at the moment");
  }

  return await context.prisma.user({ email: email }).schedule();
};

export default {
  schedule,
};
