import { ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { GqlExecutionContext } from "@nestjs/graphql";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";
import { ROLES_KEY } from "../decorators/roles.decorator";

let RolesGuard = class RolesGuard {
  reflector: any;
  constructor(reflector: any) {
    this.reflector = reflector;
  }
  canActivate(context: ExecutionContext) {
    const requiredRoles = this.reflector.getAllAndOverride(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    const ctx = GqlExecutionContext.create(context);
    return requiredRoles.some((role: any) => {
      let _a, _b, _c;
      return (_c =
        (_b =
          (_a = ctx.getContext().req) === null || _a === void 0
            ? void 0
            : _a.user) === null || _b === void 0
          ? void 0
          : _b.roles) === null || _c === void 0
        ? void 0
        : _c.includes(role);
    });
  }
};
RolesGuard = __decorate(
  [Injectable(), __metadata("design:paramtypes", [Reflector])],
  RolesGuard
);
const _RolesGuard = RolesGuard;
export { _RolesGuard as RolesGuard };
