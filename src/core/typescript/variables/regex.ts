const second = "([0-5]\\d|60(\\.\\d{3})?)";
const minute = "([0-5]\\d|60)";
const hour = "([01]\\d|2[0-3])";
const day = "(0[1-9]|[12]\\d|3[01])";
const month = "(0[1-9]|1[0-2])";
const year = "((19|20)\\d{2})";
export const regex = {
  phone: /^01[0-25]\d{8}$/,
  timeHM: new RegExp(`^${hour}:${minute}$`),
  timeHMS: new RegExp(`^${hour}:${minute}:${second}$`),
  dateYM: new RegExp(`^${year}-${month}$`),
  dateYMD: new RegExp(`^${year}-${month}-${day}$`),
  dateTimeISO: new RegExp(
    `^${year}-${month}-${day}T${hour}:${minute}:${second}Z$`
  ),
  dateTimeSql: new RegExp(
    `^${year}-${month}-${day} ${hour}:${minute}:${second}$`
  ),
  password: /^.{6,}$/,
};
