import {
  Query,
  Args,
  Mutation,
  ResolveField,
  Parent,
  Resolver,
} from "@nestjs/graphql";
import { ServiceFeatureService } from "./service-feature.service";
import {
  FindManyServiceFeaturesEntity,
  ServiceFeatureEntity,
} from "./entities/service-feature.entity";
import { CreateServiceFeatureInput } from "./dtos/create-service-feature.input";
import { UpdateServiceFeatureInput } from "./dtos/update-service-feature.input";
import { FilterServiceFeatureArg } from "./dtos/filter-service-feature.args";
import { OptionsArgs } from "../../../core/graphql/base/dtos/options.args";
import { BaseArgs } from "../../../core/graphql/base/dtos/base.args";
import { ChildServiceEntity } from "../child-service/entities/child-service.entity";
import { ChildServiceService } from "../child-service/child-service.service";
import { UploadHandler } from "../../../core/graphql/upload-handler.class";
import { authRoles } from "../../../services/auth/constants/auth.roles";
import { Auth } from "../../../services/auth/decorators/auth.decorator";
import { CustomOptions } from "../../../core/class-validator/decorators/custom-options.decorator";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";
import { __param } from "../../../helpers/param";

let ServiceFeatureResolver = class ServiceFeatureResolver {
  private _serviceService: any;
  private _serviceFeatureService: any;
  constructor(_serviceFeatureService: any, _serviceService: any) {
    this._serviceFeatureService = _serviceFeatureService;
    this._serviceService = _serviceService;
  }
  async findManyServiceFeatures(query = {}, options: any, customOptions: any) {
    return this._serviceFeatureService.findManyPaginated(
      query,
      null,
      Object.assign(Object.assign({}, options), customOptions)
    );
  }
  async findOneServiceFeature(query: any, customOptions: any) {
    return this._serviceFeatureService.findOne(query, null, customOptions);
  }
  async createServiceFeature(data: any, customOptions: any) {
    await UploadHandler.forRequired(data, { image: "image" });
    return this._serviceFeatureService.create(data, customOptions);
  }
  async updateServiceFeature(data: { id: any }, customOptions: any) {
    await UploadHandler.forOptional(data, { image: "image" });
    return this._serviceFeatureService.findOneAndUpdate(
      { id: data.id },
      data,
      customOptions
    );
  }
  async removeServiceFeature(args: { id: any }, customOptions: any) {
    return this._serviceFeatureService.findOneAndRemove(
      { id: args.id },
      customOptions
    );
  }
  async childService(
    serviceFeature: { childService: any },
    customOptions: any
  ) {
    return this._serviceService.findOne(
      { id: serviceFeature.childService },
      null,
      customOptions
    );
  }
};
__decorate(
  [
    Auth(authRoles.serviceFeature.findAll),
    Query(() => FindManyServiceFeaturesEntity),
    __param(0, Args("query", { nullable: true })),
    __param(1, Args("options", { nullable: true })),
    __param(2, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
      FilterServiceFeatureArg,
      OptionsArgs,
      Object,
    ]),
    __metadata("design:returntype", Promise),
  ],
  ServiceFeatureResolver.prototype,
  "findManyServiceFeatures",
  null
);
__decorate(
  [
    Auth(authRoles.serviceFeature.findOne),
    Query(() => ServiceFeatureEntity, { nullable: true }),
    __param(0, Args("query", { nullable: true })),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FilterServiceFeatureArg, Object]),
    __metadata("design:returntype", Promise),
  ],
  ServiceFeatureResolver.prototype,
  "findOneServiceFeature",
  null
);
__decorate(
  [
    Auth(authRoles.serviceFeature.create),
    Mutation(() => ServiceFeatureEntity),
    __param(0, Args("data")),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateServiceFeatureInput, Object]),
    __metadata("design:returntype", Promise),
  ],
  ServiceFeatureResolver.prototype,
  "createServiceFeature",
  null
);
__decorate(
  [
    Auth(authRoles.serviceFeature.update),
    Mutation(() => ServiceFeatureEntity, { nullable: true }),
    __param(0, Args("data")),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdateServiceFeatureInput, Object]),
    __metadata("design:returntype", Promise),
  ],
  ServiceFeatureResolver.prototype,
  "updateServiceFeature",
  null
);
__decorate(
  [
    Auth(authRoles.serviceFeature.delete),
    Mutation(() => ServiceFeatureEntity, { nullable: true }),
    __param(0, Args()),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BaseArgs, Object]),
    __metadata("design:returntype", Promise),
  ],
  ServiceFeatureResolver.prototype,
  "removeServiceFeature",
  null
);
__decorate(
  [
    ResolveField(() => ChildServiceEntity, { nullable: true }),
    __param(0, Parent()),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ServiceFeatureEntity, Object]),
    __metadata("design:returntype", Promise),
  ],
  ServiceFeatureResolver.prototype,
  "childService",
  null
);
ServiceFeatureResolver = __decorate(
  [
    Resolver(() => ServiceFeatureEntity),
    __metadata("design:paramtypes", [
      ServiceFeatureService,
      ChildServiceService,
    ]),
  ],
  ServiceFeatureResolver
);
const _ServiceFeatureResolver = ServiceFeatureResolver;
export { _ServiceFeatureResolver as ServiceFeatureResolver };
