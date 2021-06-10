import { Query, Args, Mutation, Resolver } from "@nestjs/graphql";
import { PartnerService } from "./partner.service";
import {
  FindManyPartnersEntity,
  PartnerEntity,
} from "./entities/partner.entity";
import { CreatePartnerInput } from "./dtos/create-partner.input";
import { UpdatePartnerInput } from "./dtos/update-partner.input";
import { FilterPartnerArg } from "./dtos/filter-partner.args";
import { OptionsArgs } from "../../core/graphql/base/dtos/options.args";
import { BaseArgs } from "../../core/graphql/base/dtos/base.args";
import { UploadHandler } from "../../core/graphql/upload-handler.class";
import { authRoles } from "../../services/auth/constants/auth.roles";
import { Auth } from "../../services/auth/decorators/auth.decorator";
import { CustomOptions } from "../../core/class-validator/decorators/custom-options.decorator";
import { __decorate } from "../../helpers/decorate";
import { __metadata } from "../../helpers/metadata";
import { __param } from "../../helpers/param";

let PartnerResolver = class PartnerResolver {
  private _partnerService: any;
  constructor(_partnerService: any) {
    this._partnerService = _partnerService;
  }
  async findManyPartners(query = {}, options: any, customOptions: any) {
    return this._partnerService.findManyPaginated(
      query,
      null,
      Object.assign(Object.assign({}, options), customOptions)
    );
  }
  async findOnePartner(query: any, customOptions: any) {
    return this._partnerService.findOne(query, null, customOptions);
  }
  async createPartner(data: any, customOptions: any) {
    await UploadHandler.forRequired(data, { image: "image" });
    return this._partnerService.create(data, customOptions);
  }
  async updatePartner(data: { id: any }, customOptions: any) {
    await UploadHandler.forOptional(data, { image: "image" });
    return this._partnerService.findOneAndUpdate(
      { id: data.id },
      data,
      customOptions
    );
  }
  async removePartner(args: { id: any }, customOptions: any) {
    return this._partnerService.findOneAndRemove(
      { id: args.id },
      customOptions
    );
  }
};
__decorate(
  [
    Auth(authRoles.partner.findAll),
    Query(() => FindManyPartnersEntity),
    __param(0, Args("query", { nullable: true })),
    __param(1, Args("options", { nullable: true })),
    __param(2, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FilterPartnerArg, OptionsArgs, Object]),
    __metadata("design:returntype", Promise),
  ],
  PartnerResolver.prototype,
  "findManyPartners",
  null
);
__decorate(
  [
    Auth(authRoles.partner.findOne),
    Query(() => PartnerEntity, { nullable: true }),
    __param(0, Args("query", { nullable: true })),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FilterPartnerArg, Object]),
    __metadata("design:returntype", Promise),
  ],
  PartnerResolver.prototype,
  "findOnePartner",
  null
);
__decorate(
  [
    Auth(authRoles.partner.create),
    Mutation(() => PartnerEntity),
    __param(0, Args("data")),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreatePartnerInput, Object]),
    __metadata("design:returntype", Promise),
  ],
  PartnerResolver.prototype,
  "createPartner",
  null
);
__decorate(
  [
    Auth(authRoles.partner.update),
    Mutation(() => PartnerEntity, { nullable: true }),
    __param(0, Args("data")),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdatePartnerInput, Object]),
    __metadata("design:returntype", Promise),
  ],
  PartnerResolver.prototype,
  "updatePartner",
  null
);
__decorate(
  [
    Auth(authRoles.partner.delete),
    Mutation(() => PartnerEntity, { nullable: true }),
    __param(0, Args()),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BaseArgs, Object]),
    __metadata("design:returntype", Promise),
  ],
  PartnerResolver.prototype,
  "removePartner",
  null
);
PartnerResolver = __decorate(
  [
    Resolver(() => PartnerEntity),
    __metadata("design:paramtypes", [PartnerService]),
  ],
  PartnerResolver
);
const _PartnerResolver = PartnerResolver;
export { _PartnerResolver as PartnerResolver };
