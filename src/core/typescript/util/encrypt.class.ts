import { hash, compare } from "bcrypt";
import { configs } from "./configs.util";
import { promisify } from "util";
class EncryptUtil {
  static hastPromise(password) {
    console.log(password, configs.options.bcrypt.rounds)
    return promisify(hash)(password, configs.options.bcrypt.rounds);
  }
  static comparePromise(password, encrypted) {
    return promisify(compare)(password, encrypted);
  }
}
const _EncryptUtil = EncryptUtil;
export { _EncryptUtil as EncryptUtil };
