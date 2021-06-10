import { configs } from "./configs.util";
class ServerUtil {
  static parseServerUrl() {
    const {
      server: { host: hostname, protocol, port },
    } = configs;
    return Object.assign(new URL("http://blank"), {
      hostname,
      protocol,
      port,
    }).href;
  }
}
const _ServerUtil = ServerUtil;
export { _ServerUtil as ServerUtil };
