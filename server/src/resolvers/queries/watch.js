//@ts-check
/**
 * @param {*} _
 * @param {*} _args
 * @param {import('../../..').IRequestContext} context
 * @param {*} _info
 */
const watchList = async (_, _args, context, _info) => {
  let email = context?.user?.email;
  if (!email) {
    throw new Error("Sorry cannot perform operation at the moment");
  }

  return await context.prisma.user({ email: email }).watched();
};

/**
 * @param {*} _
 * @param {*} _args
 * @param {import('../../..').IRequestContext} context
 * @param {*} _info
 */
const favorite = async (_, _args, context, _info) => {
  let email = context?.user?.email;
  if (!email) {
    throw new Error("Sorry cannot perform operation at the moment");
  }

  let shows = await context.prisma.user({ email: email }).watched();
  let userShows = shows.filter((user) => {
    user.favorite == true;
  });

  return userShows;
};

export default {
  watchList,
  favorite,
};
