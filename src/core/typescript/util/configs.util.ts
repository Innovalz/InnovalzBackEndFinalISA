import { ServerUtil } from "./server.util";
import { DatabaseUtil } from "./db.util";
import { __importDefault } from "../../../helpers/import-default";
import default_0 from "../../config/default";
const default_1 = __importDefault(default_0);
export const configs = default_1.default;

if (!configs.env) {
  configs.env = {};
}
configs.env[process.env.NODE_ENV as any] = true;
configs.env.type = process.env.NODE_ENV || "";
configs.server.parsedUrl = ServerUtil.parseServerUrl();
configs.database.parsedUrl = DatabaseUtil.parseDbUrl();
configs.database.isLocalDb = DatabaseUtil.isLocalDb();
