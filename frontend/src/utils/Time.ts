import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import isLeapYear from "dayjs/plugin/isLeapYear";

dayjs.extend(isLeapYear);
dayjs.extend(relativeTime);

export function FormatTime(time: string): string {
  return dayjs(time).format("DD MMM YYYY");
}

export function CommentedAt(time: string): string {
  return dayjs(time).fromNow();
}
export function TimeSorted(a: string, b: string): number {
  return dayjs(b).isAfter(dayjs(a)) ? 1 : -1;
}
