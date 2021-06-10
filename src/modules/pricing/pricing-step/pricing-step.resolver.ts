import {
  Query,
  Args,
  Mutation,
  ResolveField,
  Parent,
  Resolver,
} from "@nestjs/graphql";
import { PricingStepService } from "./pricing-step.service";
import {
  FindManyPricingStepsEntity,
  PricingStepEntity,
} from "./entities/pricing-step.entity";
import { CreatePricingStepInput } from "./dtos/create-pricing-step.input";
import { UpdatePricingStepInput } from "./dtos/update-pricing-step.input";
import { FilterPricingStepArg } from "./dtos/filter-pricing-step.args";
import { OptionsArgs } from "../../../core/graphql/base/dtos/options.args";
import { BaseArgs } from "../../../core/graphql/base/dtos/base.args";
import { PricingCategoryEntity } from "../pricing-category/entities/pricing-category.entity";
import { PricingCategoryService } from "../pricing-category/pricing-category.service";
import { authRoles } from "../../../services/auth/constants/auth.roles";
import { Auth } from "../../../services/auth/decorators/auth.decorator";
import { CustomOptions } from "../../../core/class-validator/decorators/custom-options.decorator";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";
import { __param } from "../../../helpers/param";

let PricingStepResolver = class PricingStepResolver {
  private _pricingCategoryService: any;
  private _pricingStepService: any;
  constructor(_pricingStepService: any, _pricingCategoryService: any) {
    this._pricingStepService = _pricingStepService;
    this._pricingCategoryService = _pricingCategoryService;
  }
  async findManyPricingSteps(query = {}, options: any, customOptions: any) {
    return this._pricingStepService.findManyPaginated(
      query,
      null,
      Object.assign(Object.assign({}, options), customOptions)
    );
  }
  async findOnePricingStep(query: any, customOptions: any) {
    return this._pricingStepService.findOne(query, null, customOptions);
  }
  async createPricingStep(data: any, customOptions: any) {
    return this._pricingStepService.create(data, customOptions);
  }
  async updatePricingStep(data: { id: any }, customOptions: any) {
    return this._pricingStepService.findOneAndUpdate(
      { id: data.id },
      data,
      customOptions
    );
  }
  async removePricingStep(args: { id: any }, customOptions: any) {
    return this._pricingStepService.findOneAndRemove(
      { id: args.id },
      customOptions
    );
  }
  async categories(pricingStep: { id: any }, customOptions: any) {
    return await this._pricingCategoryService.findAll(
      {
        step: pricingStep.id,
      },
      null,
      customOptions
    );
  }
};
__decorate(
  [
    Auth(authRoles.pricingStep.findAll),
    Query(() => FindManyPricingStepsEntity),
    __param(0, Args("query", { nullable: true })),
    __param(1, Args("options", { nullable: true })),
    __param(2, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
      FilterPricingStepArg,
      OptionsArgs,
      Object,
    ]),
    __metadata("design:returntype", Promise),
  ],
  PricingStepResolver.prototype,
  "findManyPricingSteps",
  null
);
__decorate(
  [
    Auth(authRoles.pricingStep.findOne),
    Query(() => PricingStepEntity, { nullable: true }),
    __param(0, Args("query", { nullable: true })),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FilterPricingStepArg, Object]),
    __metadata("design:returntype", Promise),
  ],
  PricingStepResolver.prototype,
  "findOnePricingStep",
  null
);
__decorate(
  [
    Auth(authRoles.pricingStep.create),
    Mutation(() => PricingStepEntity),
    __param(0, Args("data")),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreatePricingStepInput, Object]),
    __metadata("design:returntype", Promise),
  ],
  PricingStepResolver.prototype,
  "createPricingStep",
  null
);
__decorate(
  [
    Auth(authRoles.pricingStep.update),
    Mutation(() => PricingStepEntity, { nullable: true }),
    __param(0, Args("data")),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdatePricingStepInput, Object]),
    __metadata("design:returntype", Promise),
  ],
  PricingStepResolver.prototype,
  "updatePricingStep",
  null
);
__decorate(
  [
    Auth(authRoles.pricingStep.delete),
    Mutation(() => PricingStepEntity, { nullable: true }),
    __param(0, Args()),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BaseArgs, Object]),
    __metadata("design:returntype", Promise),
  ],
  PricingStepResolver.prototype,
  "removePricingStep",
  null
);
__decorate(
  [
    ResolveField(() => [PricingCategoryEntity]),
    __param(0, Parent()),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PricingStepEntity, Object]),
    __metadata("design:returntype", Promise),
  ],
  PricingStepResolver.prototype,
  "categories",
  null
);
PricingStepResolver = __decorate(
  [
    Resolver(() => PricingStepEntity),
    __metadata("design:paramtypes", [
      PricingStepService,
      PricingCategoryService,
    ]),
  ],
  PricingStepResolver
);
const _PricingStepResolver = PricingStepResolver;
export { _PricingStepResolver as PricingStepResolver };
