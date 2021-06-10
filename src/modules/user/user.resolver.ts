import { Query, Args, Mutation, Resolver } from "@nestjs/graphql";
import { UserService } from "./user.service";
import { FindManyUsersEntity, UserEntity } from "./entities/user.entity";
import { UpdateUserInput } from "./dtos/update-user.input";
import { FilterUserArg } from "./dtos/filter-user.args";
import { OptionsArgs } from "../../core/graphql/base/dtos/options.args";
import { Auth } from "../../services/auth/decorators/auth.decorator";
import { authRoles } from "../../services/auth/constants/auth.roles";
import { CustomOptions } from "../../core/class-validator/decorators/custom-options.decorator";
import { __decorate } from "../../helpers/decorate";
import { __metadata } from "../../helpers/metadata";
import { __param } from "../../helpers/param";

let UserResolver = class UserResolver {
  private _userService: any;
  constructor(_userService: any) {
    this._userService = _userService;
  }
  async findManyUsers(query = {}, options: any, customOptions: any) {
    return this._userService.findManyPaginated(
      query,
      null,
      Object.assign(Object.assign({}, options), customOptions)
    );
  }
  async findOneUser(query: any, customOptions: any) {
    return this._userService.findOne(query, null, customOptions);
  }
  async updateUser(data: { id: any }, customOptions: any) {
    return this._userService.findOneAndUpdate(
      { id: data.id },
      data,
      customOptions
    );
  }
};
__decorate(
  [
    Auth(authRoles.user.findAll),
    Query(() => FindManyUsersEntity),
    __param(0, Args("query", { nullable: true })),
    __param(1, Args("options", { nullable: true })),
    __param(2, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FilterUserArg, OptionsArgs, Object]),
    __metadata("design:returntype", Promise),
  ],
  UserResolver.prototype,
  "findManyUsers",
  null
);
__decorate(
  [
    Auth(authRoles.user.findOne),
    Query(() => UserEntity, { nullable: true }),
    __param(0, Args("query", { nullable: true })),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FilterUserArg, Object]),
    __metadata("design:returntype", Promise),
  ],
  UserResolver.prototype,
  "findOneUser",
  null
);
__decorate(
  [
    Auth(authRoles.user.update),
    Mutation(() => UserEntity, { nullable: true }),
    __param(0, Args("data")),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdateUserInput, Object]),
    __metadata("design:returntype", Promise),
  ],
  UserResolver.prototype,
  "updateUser",
  null
);
UserResolver = __decorate(
  [Resolver(() => UserEntity), __metadata("design:paramtypes", [UserService])],
  UserResolver
);
const _UserResolver = UserResolver;
export { _UserResolver as UserResolver };
