import { Query, Args, Mutation, Resolver } from "@nestjs/graphql";
import { PricingHistoryService } from "./pricing-history.service";
import {
  FindManyPricingHistoriesEntity,
  PricingHistoryEntity,
} from "./entities/pricing-history.entity";
import { CreatePricingHistoryInput } from "./dtos/create-pricing-history.input";
import { FilterPricingHistoryArg } from "./dtos/filter-pricing-history.args";
import { OptionsArgs } from "../../../core/graphql/base/dtos/options.args";
import { UserService } from "../../user/user.service";
import { Auth } from "../../../services/auth/decorators/auth.decorator";
import { authRoles } from "../../../services/auth/constants/auth.roles";
import { CustomOptions } from "../../../core/class-validator/decorators/custom-options.decorator";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";
import { __param } from "../../../helpers/param";

let PricingHistoryResolver = class PricingHistoryResolver {
  private _pricingHistoryService: any;
  private _userService: any;
  constructor(_pricingHistoryService: any, _userService: any) {
    this._pricingHistoryService = _pricingHistoryService;
    this._userService = _userService;
  }
  async findManyPricingHistories(query = {}, options: any, customOptions: any) {
    return this._pricingHistoryService.findManyPaginated(
      query,
      null,
      Object.assign(Object.assign({}, options), customOptions)
    );
  }
  async findOnePricingHistory(query: any, customOptions: any) {
    return this._pricingHistoryService.findOne(query, null, customOptions);
  }
  async createPricingHistory(data: any, customOptions: any) {
    return this._pricingHistoryService.create(data, customOptions);
  }
};
__decorate(
  [
    Auth(authRoles.pricingHistory.findAll),
    Query(() => FindManyPricingHistoriesEntity),
    __param(0, Args("query", { nullable: true })),
    __param(1, Args("options", { nullable: true })),
    __param(2, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
      FilterPricingHistoryArg,
      OptionsArgs,
      Object,
    ]),
    __metadata("design:returntype", Promise),
  ],
  PricingHistoryResolver.prototype,
  "findManyPricingHistories",
  null
);
__decorate(
  [
    Auth(authRoles.pricingHistory.findOne),
    Query(() => PricingHistoryEntity, { nullable: true }),
    __param(0, Args("query", { nullable: true })),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FilterPricingHistoryArg, Object]),
    __metadata("design:returntype", Promise),
  ],
  PricingHistoryResolver.prototype,
  "findOnePricingHistory",
  null
);
__decorate(
  [
    Auth(authRoles.pricingHistory.create),
    Mutation(() => PricingHistoryEntity),
    __param(0, Args("data")),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreatePricingHistoryInput, Object]),
    __metadata("design:returntype", Promise),
  ],
  PricingHistoryResolver.prototype,
  "createPricingHistory",
  null
);
PricingHistoryResolver = __decorate(
  [
    Resolver(() => PricingHistoryEntity),
    __metadata("design:paramtypes", [PricingHistoryService, UserService]),
  ],
  PricingHistoryResolver
);
const _PricingHistoryResolver = PricingHistoryResolver;
export { _PricingHistoryResolver as PricingHistoryResolver };
