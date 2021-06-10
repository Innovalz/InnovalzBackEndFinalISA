import {
  Query,
  Args,
  Mutation,
  ResolveField,
  Parent,
  Resolver,
} from "@nestjs/graphql";
import { PricingCategoryService } from "./pricing-category.service";
import {
  FindManyPricingCategoriesEntity,
  PricingCategoryEntity,
} from "./entities/pricing-category.entity";
import { CreatePricingCategoryInput } from "./dtos/create-pricing-category.input";
import { UpdatePricingCategoryInput } from "./dtos/update-pricing-category.input";
import { FilterPricingCategoryArg } from "./dtos/filter-pricing-category.args";
import { OptionsArgs } from "../../../core/graphql/base/dtos/options.args";
import { BaseArgs } from "../../../core/graphql/base/dtos/base.args";
import { PricingStepEntity } from "../pricing-step/entities/pricing-step.entity";
import { PricingStepService } from "../pricing-step/pricing-step.service";
import { PricingServiceService } from "../pricing-services/pricing-service.service";
import { PricingServiceEntity } from "../pricing-services/entities/pricing-service.entity";
import { authRoles } from "../../../services/auth/constants/auth.roles";
import { Auth } from "../../../services/auth/decorators/auth.decorator";
import { CustomOptions } from "../../../core/class-validator/decorators/custom-options.decorator";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";
import { __param } from "../../../helpers/param";

let PricingCategoryResolver = class PricingCategoryResolver {
  private _pricingStepService: any;
  private _pricingServiceService: any;
  private _pricingCategoryService: any;
  constructor(
    _pricingCategoryService: any,
    _pricingStepService: any,
    _pricingServiceService: any
  ) {
    this._pricingCategoryService = _pricingCategoryService;
    this._pricingStepService = _pricingStepService;
    this._pricingServiceService = _pricingServiceService;
  }
  async findManyPricingCategories(
    query = {},
    options: any,
    customOptions: any
  ) {
    return this._pricingCategoryService.findManyPaginated(
      query,
      null,
      Object.assign(Object.assign({}, options), customOptions)
    );
  }
  async findOnePricingCategory(query: any, customOptions: any) {
    return this._pricingCategoryService.findOne(query, null, customOptions);
  }
  async createPricingCategory(data: any, customOptions: any) {
    return this._pricingCategoryService.create(data, customOptions);
  }
  async updatePricingCategory(data: { id: any }, customOptions: any) {
    return this._pricingCategoryService.findOneAndUpdate(
      { id: data.id },
      data,
      customOptions
    );
  }
  async removePricingCategory(args: { id: any }, customOptions: any) {
    return this._pricingCategoryService.findOneAndRemove(
      { id: args.id },
      customOptions
    );
  }
  async services(pricingCategory: { id: any }, customOptions: any) {
    return await this._pricingServiceService.findAll(
      {
        category: pricingCategory.id,
      },
      null,
      customOptions
    );
  }
  async step(pricingCategory: { step: any }, customOptions: any) {
    return await this._pricingStepService.findOne(
      {
        id: pricingCategory.step,
      },
      null,
      customOptions
    );
  }
};
__decorate(
  [
    Auth(authRoles.pricingCategory.findAll),
    Query(() => FindManyPricingCategoriesEntity),
    __param(0, Args("query", { nullable: true })),
    __param(1, Args("options", { nullable: true })),
    __param(2, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
      FilterPricingCategoryArg,
      OptionsArgs,
      Object,
    ]),
    __metadata("design:returntype", Promise),
  ],
  PricingCategoryResolver.prototype,
  "findManyPricingCategories",
  null
);
__decorate(
  [
    Auth(authRoles.pricingCategory.findOne),
    Query(() => PricingCategoryEntity, { nullable: true }),
    __param(0, Args("query", { nullable: true })),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FilterPricingCategoryArg, Object]),
    __metadata("design:returntype", Promise),
  ],
  PricingCategoryResolver.prototype,
  "findOnePricingCategory",
  null
);
__decorate(
  [
    Auth(authRoles.pricingCategory.create),
    Mutation(() => PricingCategoryEntity),
    __param(0, Args("data")),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreatePricingCategoryInput, Object]),
    __metadata("design:returntype", Promise),
  ],
  PricingCategoryResolver.prototype,
  "createPricingCategory",
  null
);
__decorate(
  [
    Auth(authRoles.pricingCategory.update),
    Mutation(() => PricingCategoryEntity, { nullable: true }),
    __param(0, Args("data")),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdatePricingCategoryInput, Object]),
    __metadata("design:returntype", Promise),
  ],
  PricingCategoryResolver.prototype,
  "updatePricingCategory",
  null
);
__decorate(
  [
    Auth(authRoles.pricingCategory.delete),
    Mutation(() => PricingCategoryEntity, { nullable: true }),
    __param(0, Args()),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BaseArgs, Object]),
    __metadata("design:returntype", Promise),
  ],
  PricingCategoryResolver.prototype,
  "removePricingCategory",
  null
);
__decorate(
  [
    ResolveField(() => [PricingServiceEntity]),
    __param(0, Parent()),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PricingCategoryEntity, Object]),
    __metadata("design:returntype", Promise),
  ],
  PricingCategoryResolver.prototype,
  "services",
  null
);
__decorate(
  [
    ResolveField(() => PricingStepEntity, { nullable: true }),
    __param(0, Parent()),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PricingCategoryEntity, Object]),
    __metadata("design:returntype", Promise),
  ],
  PricingCategoryResolver.prototype,
  "step",
  null
);
PricingCategoryResolver = __decorate(
  [
    Resolver(() => PricingCategoryEntity),
    __metadata("design:paramtypes", [
      PricingCategoryService,
      PricingStepService,
      PricingServiceService,
    ]),
  ],
  PricingCategoryResolver
);
const _PricingCategoryResolver = PricingCategoryResolver;
export { _PricingCategoryResolver as PricingCategoryResolver };
