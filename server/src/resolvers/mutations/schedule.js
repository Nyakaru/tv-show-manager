//@ts-check
import { ScheduleFragment } from "../../utils";

/**
 * @param {any} _
 * @param {any} input
 * @param {import('../../..').IRequestContext} context
 * @param {any} _info
 */
const schedule = async (_, { input }, context, _info) => {
  let email = context?.user?.email;

  if (!email) {
    throw new Error("Sorry cannot perform operation at the moment");
  }

  return await context.prisma
    .createSchedule({ ...input, user: { connect: { email: email } } })
    .$fragment(ScheduleFragment);
};

export default {
  schedule,
};
