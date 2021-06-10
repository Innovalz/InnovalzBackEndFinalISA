import {
  Query,
  Args,
  Mutation,
  ResolveField,
  Parent,
  Resolver,
} from "@nestjs/graphql";
import { PricingServiceService } from "./pricing-service.service";
import {
  FindManyPricingServicesEntity,
  PricingServiceEntity,
} from "./entities/pricing-service.entity";
import { CreatePricingServiceInput } from "./dtos/create-pricing-service.input";
import { UpdatePricingServiceInput } from "./dtos/update-pricing-service.input";
import { FilterPricingServiceArg } from "./dtos/filter-pricing-service.args";
import { OptionsArgs } from "../../../core/graphql/base/dtos/options.args";
import { BaseArgs } from "../../../core/graphql/base/dtos/base.args";
import { PricingCategoryEntity } from "../pricing-category/entities/pricing-category.entity";
import { TPricingServiceSchema } from "./repo/pricing-service.schema";
import { PricingCategoryService } from "../pricing-category/pricing-category.service";
import { authRoles } from "../../../services/auth/constants/auth.roles";
import { Auth } from "../../../services/auth/decorators/auth.decorator";
import { CustomOptions } from "../../../core/class-validator/decorators/custom-options.decorator";
import { PricingTeamMemberEntity } from "../pricing-team-member/entities/pricing-team-member.entity";
import { PricingTeamMemberService } from "../pricing-team-member/pricing-team-member.service";
import { UploadHandler } from "../../../core/graphql/upload-handler.class";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";
import { __param } from "../../../helpers/param";

let PricingServiceResolver = class PricingServiceResolver {
  private _pricingCategoryService: any;
  private _pricingServiceService: any;
  private _pricingTeamMemberService: any;
  constructor(
    _pricingServiceService: any,
    _pricingCategoryService: any,
    _pricingTeamMemberService: any
  ) {
    this._pricingServiceService = _pricingServiceService;
    this._pricingCategoryService = _pricingCategoryService;
    this._pricingTeamMemberService = _pricingTeamMemberService;
  }
  async findManyPricingServices(query = {}, options: any, customOptions: any) {
    return this._pricingServiceService.findManyPaginated(
      query,
      null,
      Object.assign(Object.assign({}, options), customOptions)
    );
  }
  async findOnePricingService(query: any, customOptions: any) {
    return this._pricingServiceService.findOne(query, null, customOptions);
  }
  async createPricingService(data: any, customOptions: any) {
    await UploadHandler.forOptional(data, { image: "image" });
    return this._pricingServiceService.create(data, customOptions);
  }
  async updatePricingService(data: { id: any }, customOptions: any) {
    await UploadHandler.forOptional(data, { image: "image" });
    return await this._pricingServiceService.findOneAndUpdate(
      { id: data.id },
      data,
      customOptions
    );
  }
  async removePricingService(args: { id: any }, customOptions: any) {
    return this._pricingServiceService.findOneAndRemove(
      { id: args.id },
      customOptions
    );
  }
  async category(pricingService: { category: any }, customOptions: any) {
    return await this._pricingCategoryService.findOne(
      {
        id: pricingService.category,
      },
      null,
      customOptions
    );
  }
  async team(pricingService: { team: any }, customOptions: any) {
    return await this._pricingTeamMemberService.findAll(
      {
        id: { $in: pricingService.team },
      },
      null,
      customOptions
    );
  }
};
__decorate(
  [
    Auth(authRoles.pricingService.findAll),
    Query(() => FindManyPricingServicesEntity),
    __param(0, Args("query", { nullable: true })),
    __param(1, Args("options", { nullable: true })),
    __param(2, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
      FilterPricingServiceArg,
      OptionsArgs,
      Object,
    ]),
    __metadata("design:returntype", Promise),
  ],
  PricingServiceResolver.prototype,
  "findManyPricingServices",
  null
);
__decorate(
  [
    Auth(authRoles.pricingService.findOne),
    Query(() => PricingServiceEntity, { nullable: true }),
    __param(0, Args("query", { nullable: true })),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FilterPricingServiceArg, Object]),
    __metadata("design:returntype", Promise),
  ],
  PricingServiceResolver.prototype,
  "findOnePricingService",
  null
);
__decorate(
  [
    Auth(authRoles.pricingService.create),
    Mutation(() => PricingServiceEntity),
    __param(0, Args("data")),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreatePricingServiceInput, Object]),
    __metadata("design:returntype", Promise),
  ],
  PricingServiceResolver.prototype,
  "createPricingService",
  null
);
__decorate(
  [
    Auth(authRoles.pricingService.update),
    Mutation(() => PricingServiceEntity, { nullable: true }),
    __param(0, Args("data")),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdatePricingServiceInput, Object]),
    __metadata("design:returntype", Promise),
  ],
  PricingServiceResolver.prototype,
  "updatePricingService",
  null
);
__decorate(
  [
    Auth(authRoles.pricingService.delete),
    Mutation(() => PricingServiceEntity, { nullable: true }),
    __param(0, Args()),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BaseArgs, Object]),
    __metadata("design:returntype", Promise),
  ],
  PricingServiceResolver.prototype,
  "removePricingService",
  null
);
__decorate(
  [
    ResolveField(() => PricingCategoryEntity, { nullable: true }),
    __param(0, Parent()),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TPricingServiceSchema, Object]),
    __metadata("design:returntype", Promise),
  ],
  PricingServiceResolver.prototype,
  "category",
  null
);
__decorate(
  [
    ResolveField(() => [PricingTeamMemberEntity]),
    __param(0, Parent()),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TPricingServiceSchema, Object]),
    __metadata("design:returntype", Promise),
  ],
  PricingServiceResolver.prototype,
  "team",
  null
);
PricingServiceResolver = __decorate(
  [
    Resolver(() => PricingServiceEntity),
    __metadata("design:paramtypes", [
      PricingServiceService,
      PricingCategoryService,
      PricingTeamMemberService,
    ]),
  ],
  PricingServiceResolver
);
const _PricingServiceResolver = PricingServiceResolver;
export { _PricingServiceResolver as PricingServiceResolver };
