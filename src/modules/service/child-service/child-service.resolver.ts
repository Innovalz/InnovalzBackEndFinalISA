import {
  Query,
  Args,
  Mutation,
  ResolveField,
  Parent,
  Resolver,
} from "@nestjs/graphql";
import { ChildServiceService } from "./child-service.service";
import {
  FindManyChildServicesEntity,
  ChildServiceEntity,
} from "./entities/child-service.entity";
import { CreateChildServiceInput } from "./dtos/create-child-service.input";
import { UpdateChildServiceInput } from "./dtos/update-child-service.input";
import { FilterChildServiceArg } from "./dtos/filter-child-service.args";
import { OptionsArgs } from "../../../core/graphql/base/dtos/options.args";
import { BaseArgs } from "../../../core/graphql/base/dtos/base.args";
import { ServiceFeatureEntity } from "../service-feature/entities/service-feature.entity";
import { ServiceFeatureService } from "../service-feature/service-feature.service";
import { UploadHandler } from "../../../core/graphql/upload-handler.class";
import { ParentServiceService } from "../parent-service/parent-service.service";
import { ParentServiceEntity } from "../parent-service/entities/parent-service.entity";
import { authRoles } from "../../../services/auth/constants/auth.roles";
import { Auth } from "../../../services/auth/decorators/auth.decorator";
import { CustomOptions } from "../../../core/class-validator/decorators/custom-options.decorator";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";
import { __param } from "../../../helpers/param";

let ChildServiceResolver = class ChildServiceResolver {
  private _parentServiceService: any;
  private _serviceFeatureService: any;
  private _childService: any;
  constructor(
    _childService: any,
    _serviceFeatureService: any,
    _parentServiceService: any
  ) {
    this._childService = _childService;
    this._serviceFeatureService = _serviceFeatureService;
    this._parentServiceService = _parentServiceService;
  }
  async findManyChildServices(query = {}, options: any, customOptions: any) {
    return await this._childService.findManyPaginated(
      query,
      null,
      Object.assign(Object.assign({}, options), customOptions)
    );
  }
  async findOneChildService(query: any, customOptions: any) {
    return this._childService.findOne(query, null, customOptions);
  }
  async createChildService(data: any, customOptions: any) {
    await UploadHandler.forRequired(data, { icon: "image", logo: "image" });
    return this._childService.create(data, customOptions);
  }
  async updateChildService(data: { id: any }, customOptions: any) {
    await UploadHandler.forOptional(data, { icon: "image", logo: "image" });
    return this._childService.findOneAndUpdate(
      { id: data.id },
      data,
      customOptions
    );
  }
  async removeChildService(args: { id: any }, customOptions: any) {
    return this._childService.findOneAndRemove({ id: args.id }, customOptions);
  }
  async features(childService: { id: any }, customOptions: any) {
    return await this._serviceFeatureService.findAll(
      {
        childService: childService.id,
      },
      null,
      customOptions
    );
  }
  async parentService(
    childService: { parentService: any },
    customOptions: any
  ) {
    return await this._parentServiceService.findOne(
      {
        id: childService.parentService,
      },
      null,
      customOptions
    );
  }
};
__decorate(
  [
    Auth(authRoles.childService.findAll),
    Query(() => FindManyChildServicesEntity),
    __param(0, Args("query", { nullable: true })),
    __param(1, Args("options", { nullable: true })),
    __param(2, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
      FilterChildServiceArg,
      OptionsArgs,
      Object,
    ]),
    __metadata("design:returntype", Promise),
  ],
  ChildServiceResolver.prototype,
  "findManyChildServices",
  null
);
__decorate(
  [
    Auth(authRoles.childService.findOne),
    Query(() => ChildServiceEntity, { nullable: true }),
    __param(0, Args("query", { nullable: true })),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FilterChildServiceArg, Object]),
    __metadata("design:returntype", Promise),
  ],
  ChildServiceResolver.prototype,
  "findOneChildService",
  null
);
__decorate(
  [
    Auth(authRoles.childService.create),
    Mutation(() => ChildServiceEntity),
    __param(0, Args("data")),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateChildServiceInput, Object]),
    __metadata("design:returntype", Promise),
  ],
  ChildServiceResolver.prototype,
  "createChildService",
  null
);
__decorate(
  [
    Auth(authRoles.childService.update),
    Mutation(() => ChildServiceEntity, { nullable: true }),
    __param(0, Args("data")),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdateChildServiceInput, Object]),
    __metadata("design:returntype", Promise),
  ],
  ChildServiceResolver.prototype,
  "updateChildService",
  null
);
__decorate(
  [
    Auth(authRoles.childService.delete),
    Mutation(() => ChildServiceEntity, { nullable: true }),
    __param(0, Args()),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BaseArgs, Object]),
    __metadata("design:returntype", Promise),
  ],
  ChildServiceResolver.prototype,
  "removeChildService",
  null
);
__decorate(
  [
    ResolveField(() => [ServiceFeatureEntity]),
    __param(0, Parent()),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ChildServiceEntity, Object]),
    __metadata("design:returntype", Promise),
  ],
  ChildServiceResolver.prototype,
  "features",
  null
);
__decorate(
  [
    ResolveField(() => ParentServiceEntity, { nullable: true }),
    __param(0, Parent()),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ChildServiceEntity, Object]),
    __metadata("design:returntype", Promise),
  ],
  ChildServiceResolver.prototype,
  "parentService",
  null
);
ChildServiceResolver = __decorate(
  [
    Resolver(() => ChildServiceEntity),
    __metadata("design:paramtypes", [
      ChildServiceService,
      ServiceFeatureService,
      ParentServiceService,
    ]),
  ],
  ChildServiceResolver
);
const _ChildServiceResolver = ChildServiceResolver;
export { _ChildServiceResolver as ChildServiceResolver };
