import moment from "moment";

export function formatDate(timestamp: number) {
  return moment.unix(timestamp).locale("vi").format("DD/MM/YYYY");
}
