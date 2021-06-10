import { applyDecorators, UseGuards } from "@nestjs/common";
import { GqlAuthGuard } from "../guards/gql-auth.guard";
import { RolesGuard } from "../guards/roles.guard";
import { Roles } from "./roles.decorator";
function Auth(roles: string | any[]) {
  if (roles.length) {
    return applyDecorators(UseGuards(GqlAuthGuard, RolesGuard), Roles(roles));
  }
  return applyDecorators();
}
const _Auth = Auth;
export { _Auth as Auth };
