import { Query, Args, Mutation, Resolver } from "@nestjs/graphql";
import { RequestOfferService } from "./request-offer.service";
import {
  FindManyRequestOffersEntity,
  RequestOfferEntity,
} from "./entities/request-offer.entity";
import { CreateRequestOfferInput } from "./dtos/create-request-offer.input";
import { FilterRequestOfferArg } from "./dtos/filter-request-offer.args";
import { OptionsArgs } from "../../core/graphql/base/dtos/options.args";
import { authRoles } from "../../services/auth/constants/auth.roles";
import { Auth } from "../../services/auth/decorators/auth.decorator";
import { CustomOptions } from "../../core/class-validator/decorators/custom-options.decorator";
import { __decorate } from "../../helpers/decorate";
import { __metadata } from "../../helpers/metadata";
import { __param } from "../../helpers/param";

let RequestOfferResolver = class RequestOfferResolver {
  private _requestOfferService: any;
  constructor(_requestOfferService: any) {
    this._requestOfferService = _requestOfferService;
  }
  async findManyRequestOffers(query = {}, options: any, customOptions: any) {
    return this._requestOfferService.findManyPaginated(
      query,
      null,
      Object.assign(Object.assign({}, options), customOptions)
    );
  }
  async findOneRequestOffer(query: any, customOptions: any) {
    return this._requestOfferService.findOne(query, null, customOptions);
  }
  async createRequestOffer(data: any, customOptions: any) {
    return this._requestOfferService.create(data, customOptions);
  }
};
__decorate(
  [
    Auth(authRoles.requestOffer.findAll),
    Query(() => FindManyRequestOffersEntity),
    __param(0, Args("query", { nullable: true })),
    __param(1, Args("options", { nullable: true })),
    __param(2, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
      FilterRequestOfferArg,
      OptionsArgs,
      Object,
    ]),
    __metadata("design:returntype", Promise),
  ],
  RequestOfferResolver.prototype,
  "findManyRequestOffers",
  null
);
__decorate(
  [
    Auth(authRoles.requestOffer.findOne),
    Query(() => RequestOfferEntity, { nullable: true }),
    __param(0, Args("query", { nullable: true })),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FilterRequestOfferArg, Object]),
    __metadata("design:returntype", Promise),
  ],
  RequestOfferResolver.prototype,
  "findOneRequestOffer",
  null
);
__decorate(
  [
    Auth(authRoles.requestOffer.create),
    Mutation(() => RequestOfferEntity),
    __param(0, Args("data")),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateRequestOfferInput, Object]),
    __metadata("design:returntype", Promise),
  ],
  RequestOfferResolver.prototype,
  "createRequestOffer",
  null
);
RequestOfferResolver = __decorate(
  [
    Resolver(() => RequestOfferEntity),
    __metadata("design:paramtypes", [RequestOfferService]),
  ],
  RequestOfferResolver
);
const _RequestOfferResolver = RequestOfferResolver;
export { _RequestOfferResolver as RequestOfferResolver };
