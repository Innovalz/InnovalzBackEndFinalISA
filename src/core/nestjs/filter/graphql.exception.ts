import { ArgumentsHost, Catch } from "@nestjs/common";
import { GqlArgumentsHost } from "@nestjs/graphql";
import { __decorate } from "../../../helpers/decorate";
import { configs } from "../../typescript/util/configs.util";

let AllExceptionsFilter = class AllExceptionsFilter {
  async catch(exception: any, host: ArgumentsHost) {
    let _a;
    const gqlHost = GqlArgumentsHost.create(host);
    if (
      (_a = configs.env) === null || _a === void 0 ? void 0 : _a.development
    ) {
      console.log({
        exception,
        res: gqlHost.switchToHttp().getResponse().data,
      });
    }
    return exception;
  }
};
AllExceptionsFilter = __decorate([Catch()], AllExceptionsFilter);
const _AllExceptionsFilter = AllExceptionsFilter;
export { _AllExceptionsFilter as AllExceptionsFilter };
