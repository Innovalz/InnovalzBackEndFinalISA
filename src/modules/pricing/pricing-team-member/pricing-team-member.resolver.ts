import {
  Query,
  Args,
  Mutation,
  ResolveField,
  Parent,
  Resolver,
} from "@nestjs/graphql";
import { PricingTeamMemberService } from "./pricing-team-member.service";
import {
  FindManyPricingTeamMembersEntity,
  PricingTeamMemberEntity,
} from "./entities/pricing-team-member.entity";
import { CreatePricingTeamMemberInput } from "./dtos/create-pricing-team-member.input";
import { UpdatePricingTeamMemberInput } from "./dtos/update-pricing-team-member.input";
import { FilterPricingTeamMemberArg } from "./dtos/filter-pricing-team-member.args";
import { OptionsArgs } from "../../../core/graphql/base/dtos/options.args";
import { BaseArgs } from "../../../core/graphql/base/dtos/base.args";
import { authRoles } from "../../../services/auth/constants/auth.roles";
import { Auth } from "../../../services/auth/decorators/auth.decorator";
import { CustomOptions } from "../../../core/class-validator/decorators/custom-options.decorator";
import { PricingServiceService } from "../pricing-services/pricing-service.service";
import { PricingServiceEntity } from "../pricing-services/entities/pricing-service.entity";
import { UploadHandler } from "../../../core/graphql/upload-handler.class";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";
import { __param } from "../../../helpers/param";

let PricingTeamMemberResolver = class PricingTeamMemberResolver {
  private _pricingServiceService: any;
  private _pricingTeamMemberService: any;
  constructor(_pricingTeamMemberService: any, _pricingServiceService: any) {
    this._pricingTeamMemberService = _pricingTeamMemberService;
    this._pricingServiceService = _pricingServiceService;
  }
  async findManyPricingTeamMembers(
    query = {},
    options: any,
    customOptions: any
  ) {
    return this._pricingTeamMemberService.findManyPaginated(
      query,
      null,
      Object.assign(Object.assign({}, options), customOptions)
    );
  }
  async findOnePricingTeamMember(query: any, customOptions: any) {
    return this._pricingTeamMemberService.findOne(query, null, customOptions);
  }
  async createPricingTeamMember(data: any, customOptions: any) {
    await UploadHandler.forRequired(data, { image: "image" });
    return this._pricingTeamMemberService.create(data, customOptions);
  }
  async updatePricingTeamMember(data: { id: any }, customOptions: any) {
    await UploadHandler.forOptional(data, { image: "image" });
    return this._pricingTeamMemberService.findOneAndUpdate(
      { id: data.id },
      data,
      customOptions
    );
  }
  async removePricingTeamMember(args: { id: any }, customOptions: any) {
    return this._pricingTeamMemberService.findOneAndRemove(
      { id: args.id },
      customOptions
    );
  }
  async services(pricingTeamMember: { id: any }, customOptions: any) {
    return await this._pricingServiceService.findAll(
      {
        team: pricingTeamMember.id,
      },
      null,
      customOptions
    );
  }
};
__decorate(
  [
    Auth(authRoles.pricingTeamMember.findAll),
    Query(() => FindManyPricingTeamMembersEntity),
    __param(0, Args("query", { nullable: true })),
    __param(1, Args("options", { nullable: true })),
    __param(2, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
      FilterPricingTeamMemberArg,
      OptionsArgs,
      Object,
    ]),
    __metadata("design:returntype", Promise),
  ],
  PricingTeamMemberResolver.prototype,
  "findManyPricingTeamMembers",
  null
);
__decorate(
  [
    Auth(authRoles.pricingTeamMember.findOne),
    Query(() => PricingTeamMemberEntity, { nullable: true }),
    __param(0, Args("query", { nullable: true })),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FilterPricingTeamMemberArg, Object]),
    __metadata("design:returntype", Promise),
  ],
  PricingTeamMemberResolver.prototype,
  "findOnePricingTeamMember",
  null
);
__decorate(
  [
    Auth(authRoles.pricingTeamMember.create),
    Mutation(() => PricingTeamMemberEntity),
    __param(0, Args("data")),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreatePricingTeamMemberInput, Object]),
    __metadata("design:returntype", Promise),
  ],
  PricingTeamMemberResolver.prototype,
  "createPricingTeamMember",
  null
);
__decorate(
  [
    Auth(authRoles.pricingTeamMember.update),
    Mutation(() => PricingTeamMemberEntity, { nullable: true }),
    __param(0, Args("data")),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdatePricingTeamMemberInput, Object]),
    __metadata("design:returntype", Promise),
  ],
  PricingTeamMemberResolver.prototype,
  "updatePricingTeamMember",
  null
);
__decorate(
  [
    Auth(authRoles.pricingTeamMember.delete),
    Mutation(() => PricingTeamMemberEntity, { nullable: true }),
    __param(0, Args()),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BaseArgs, Object]),
    __metadata("design:returntype", Promise),
  ],
  PricingTeamMemberResolver.prototype,
  "removePricingTeamMember",
  null
);
__decorate(
  [
    ResolveField(() => [PricingServiceEntity], { nullable: true }),
    __param(0, Parent()),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PricingTeamMemberEntity, Object]),
    __metadata("design:returntype", Promise),
  ],
  PricingTeamMemberResolver.prototype,
  "services",
  null
);
PricingTeamMemberResolver = __decorate(
  [
    Resolver(() => PricingTeamMemberEntity),
    __metadata("design:paramtypes", [
      PricingTeamMemberService,
      PricingServiceService,
    ]),
  ],
  PricingTeamMemberResolver
);
const _PricingTeamMemberResolver = PricingTeamMemberResolver;
export { _PricingTeamMemberResolver as PricingTeamMemberResolver };
