import moment from "moment";

export function formatDate(timestamp: number) {
  return moment.unix(timestamp).utcOffset(7).format("DD/MM/YYYY");
}
