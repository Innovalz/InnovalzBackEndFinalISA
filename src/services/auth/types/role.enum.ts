import { registerEnumType } from "@nestjs/graphql";
export let Role: { user?: any; admin?: any };
(function (Role) {
  Role["user"] = "user";
  Role["admin"] = "admin";
})((Role = exports.Role || (exports.Role = {})));

registerEnumType(Role, {
  name: "Role",
});
