import { ExecutionContext, Injectable } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { AuthGuard } from "@nestjs/passport";
import { __decorate } from "../../../helpers/decorate";
export const GRAPH_JWT_KEY = "jwt";

let GqlAuthGuard = class GqlAuthGuard extends AuthGuard(GRAPH_JWT_KEY) {
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }
};
GqlAuthGuard = __decorate([Injectable()], GqlAuthGuard);
const _GqlAuthGuard = GqlAuthGuard;
export { _GqlAuthGuard as GqlAuthGuard };
