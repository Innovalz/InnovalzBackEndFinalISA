import { configs } from "./configs.util";
import { hostname } from "os";
class DatabaseUtil {
  static parseDbUrl() {
    const { database } = configs;
    const _ = {
      suffix: "mongodb://",
      colon: ":",
      comma: ",",
      at: "@",
      dbName: "/" + database.dbName,
    };
    if (database.auth) {
      _.suffix +=
        database.auth.username + _.colon + database.auth.password + _.at;
    }
    if (database.uri) {
      return database.uri;
    } else if (database.host) {
      if (database.port) {
        return _.suffix + database.host + _.colon + database.port + _.dbName;
      } else if (database.ports) {
        return database.ports.reduce(
          (url: any, port: string, index: number) =>
            url +
            database.host +
            _.colon +
            port +
            (database.ports.length - 1 > index ? _.comma : _.dbName),
          _.suffix
        );
      }
    } else if (database.hosts) {
      if (database.port) {
        return database.hosts.reduce(
          (url: any, host: any, index: number) =>
            url +
            host +
            _.colon +
            database.port +
            (database.hosts.length - 1 > index ? _.comma : _.dbName),
          _.suffix
        );
      } else if (database.ports) {
        return database.hosts.reduce(
          (url: any, host: any, index: number) =>
            url +
            host +
            _.colon +
            database.ports[index] +
            (database.hosts.length - 1 > index ? _.comma : _.dbName),
          _.suffix
        );
      }
    }
    throw new Error("Invalid database connection");
  }
  static isLocalDb() {
    const { database } = configs;
    return ["localhost", hostname()].some((value) => {
      let _a;
      return (_a = database.parsedUrl) === null || _a === void 0
        ? void 0
        : _a.includes(value);
    });
  }
}
const _DatabaseUtil = DatabaseUtil;
export { _DatabaseUtil as DatabaseUtil };
