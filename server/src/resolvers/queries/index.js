//@ts-check
import ScheduleQueries from "./schedule";
import ShowQueries from "./shows";
import WatchQueries from "./watch";

export default {
  ...ScheduleQueries,
  ...ShowQueries,
  ...WatchQueries,
};
