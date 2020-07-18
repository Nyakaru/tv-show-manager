//@ts-check
import UserMutations from "./user";
import ScheduleMutations from "./schedule";
import WatchMutations from "./watch";

export default {
  ...UserMutations,
  ...ScheduleMutations,
  ...WatchMutations,
};
