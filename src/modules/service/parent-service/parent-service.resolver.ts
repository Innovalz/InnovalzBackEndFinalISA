import {
  Query,
  Args,
  Mutation,
  ResolveField,
  Parent,
  Resolver,
} from "@nestjs/graphql";
import { ParentServiceService } from "./parent-service.service";
import {
  FindManyParentServicesEntity,
  ParentServiceEntity,
} from "./entities/parent-service.entity";
import { CreateParentServiceInput } from "./dtos/create-parent-service.input";
import { UpdateParentServiceInput } from "./dtos/update-parent-service.input";
import { FilterParentServiceArg } from "./dtos/filter-parent-service.args";
import { OptionsArgs } from "../../../core/graphql/base/dtos/options.args";
import { BaseArgs } from "../../../core/graphql/base/dtos/base.args";
import { UploadHandler } from "../../../core/graphql/upload-handler.class";
import { ChildServiceEntity } from "../child-service/entities/child-service.entity";
import { ChildServiceService } from "../child-service/child-service.service";
import { authRoles } from "../../../services/auth/constants/auth.roles";
import { Auth } from "../../../services/auth/decorators/auth.decorator";
import { CustomOptions } from "../../../core/class-validator/decorators/custom-options.decorator";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";
import { __param } from "../../../helpers/param";

let ParentServiceResolver = class ParentServiceResolver {
  private _parentServiceService: any;
  private _childServiceService: any;
  constructor(_parentServiceService: any, _childServiceService: any) {
    this._parentServiceService = _parentServiceService;
    this._childServiceService = _childServiceService;
  }
  async findManyParentServices(query = {}, options: any, customOptions: any) {
    return this._parentServiceService.findManyPaginated(
      query,
      null,
      Object.assign(Object.assign({}, options), customOptions)
    );
  }
  async findOneParentService(query: any, customOptions: any) {
    console.log(
      `TCL ~ file: parent-service.resolver.ts ~ line 56 ~ ParentServiceResolver ~ query`,
      query
    );
    return this._parentServiceService.findOne(query, null, customOptions);
  }
  async createParentService(data: any, customOptions: any) {
    await UploadHandler.forRequired(data, { icon: "image" });
    return this._parentServiceService.create(data, customOptions);
  }
  async updateParentService(data: { id: any }, customOptions: any) {
    await UploadHandler.forOptional(data, { icon: "image" });
    return this._parentServiceService.findOneAndUpdate(
      { id: data.id },
      data,
      customOptions
    );
  }
  async removeParentService(args: { id: any }, customOptions: any) {
    return this._parentServiceService.findOneAndRemove(
      { id: args.id },
      customOptions
    );
  }
  async childServices(parentService: { id: any }, customOptions: any) {
    return await this._childServiceService.findAll(
      {
        parentService: parentService.id,
      },
      null,
      customOptions
    );
  }
};
__decorate(
  [
    Auth(authRoles.parentService.findAll),
    Query(() => FindManyParentServicesEntity),
    __param(0, Args("query", { nullable: true })),
    __param(1, Args("options", { nullable: true })),
    __param(2, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
      FilterParentServiceArg,
      OptionsArgs,
      Object,
    ]),
    __metadata("design:returntype", Promise),
  ],
  ParentServiceResolver.prototype,
  "findManyParentServices",
  null
);
__decorate(
  [
    Auth(authRoles.parentService.findOne),
    Query(() => ParentServiceEntity, { nullable: true }),
    __param(0, Args("query", { nullable: true })),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FilterParentServiceArg, Object]),
    __metadata("design:returntype", Promise),
  ],
  ParentServiceResolver.prototype,
  "findOneParentService",
  null
);
__decorate(
  [
    Auth(authRoles.parentService.create),
    Mutation(() => ParentServiceEntity),
    __param(0, Args("data")),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateParentServiceInput, Object]),
    __metadata("design:returntype", Promise),
  ],
  ParentServiceResolver.prototype,
  "createParentService",
  null
);
__decorate(
  [
    Auth(authRoles.parentService.update),
    Mutation(() => ParentServiceEntity, { nullable: true }),
    __param(0, Args("data")),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdateParentServiceInput, Object]),
    __metadata("design:returntype", Promise),
  ],
  ParentServiceResolver.prototype,
  "updateParentService",
  null
);
__decorate(
  [
    Auth(authRoles.parentService.delete),
    Mutation(() => ParentServiceEntity, { nullable: true }),
    __param(0, Args()),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BaseArgs, Object]),
    __metadata("design:returntype", Promise),
  ],
  ParentServiceResolver.prototype,
  "removeParentService",
  null
);
__decorate(
  [
    ResolveField(() => [ChildServiceEntity]),
    __param(0, Parent()),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ParentServiceEntity, Object]),
    __metadata("design:returntype", Promise),
  ],
  ParentServiceResolver.prototype,
  "childServices",
  null
);
ParentServiceResolver = __decorate(
  [
    Resolver(() => ParentServiceEntity),
    __metadata("design:paramtypes", [
      ParentServiceService,
      ChildServiceService,
    ]),
  ],
  ParentServiceResolver
);
const _ParentServiceResolver = ParentServiceResolver;
export { _ParentServiceResolver as ParentServiceResolver };
