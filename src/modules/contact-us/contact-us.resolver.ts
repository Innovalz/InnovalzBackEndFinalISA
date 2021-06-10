import { Query, Args, Mutation, Resolver } from "@nestjs/graphql";
import { ContactUsService } from "./contact-us.service";
import {
  FindManyContactUsEntity,
  ContactUsEntity,
} from "./entities/contact-us.entity";
import { CreateContactUsInput } from "./dtos/create-contact-us.input";
import { FilterContactUsArg } from "./dtos/filter-contact-us.args";
import { OptionsArgs } from "../../core/graphql/base/dtos/options.args";
import { authRoles } from "../../services/auth/constants/auth.roles";
import { Auth } from "../../services/auth/decorators/auth.decorator";
import { CustomOptions } from "../../core/class-validator/decorators/custom-options.decorator";
import { __decorate } from "../../helpers/decorate";
import { __metadata } from "../../helpers/metadata";
import { __param } from "../../helpers/param";

let ContactUsResolver = class ContactUsResolver {
  private _contactUsService: any;
  constructor(_contactUsService: any) {
    this._contactUsService = _contactUsService;
  }
  async findManyContactUs(query = {}, options: any, customOptions: any) {
    return this._contactUsService.findManyPaginated(
      query,
      null,
      Object.assign(Object.assign({}, options), customOptions)
    );
  }
  async findOneContactUs(query: any, customOptions: any) {
    return this._contactUsService.findOne(query, null, customOptions);
  }
  async createContactUs(data: any, customOptions: any) {
    return this._contactUsService.create(data, customOptions);
  }
};
__decorate(
  [
    Auth(authRoles.contactUs.findAll),
    Query(() => FindManyContactUsEntity),
    __param(0, Args("query", { nullable: true })),
    __param(1, Args("options", { nullable: true })),
    __param(2, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FilterContactUsArg, OptionsArgs, Object]),
    __metadata("design:returntype", Promise),
  ],
  ContactUsResolver.prototype,
  "findManyContactUs",
  null
);
__decorate(
  [
    Auth(authRoles.contactUs.findOne),
    Query(() => ContactUsEntity, { nullable: true }),
    __param(0, Args("query", { nullable: true })),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FilterContactUsArg, Object]),
    __metadata("design:returntype", Promise),
  ],
  ContactUsResolver.prototype,
  "findOneContactUs",
  null
);
__decorate(
  [
    Auth(authRoles.contactUs.create),
    Mutation(() => ContactUsEntity),
    __param(0, Args("data")),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateContactUsInput, Object]),
    __metadata("design:returntype", Promise),
  ],
  ContactUsResolver.prototype,
  "createContactUs",
  null
);
ContactUsResolver = __decorate(
  [
    Resolver(() => ContactUsEntity),
    __metadata("design:paramtypes", [ContactUsService]),
  ],
  ContactUsResolver
);
const _ContactUsResolver = ContactUsResolver;
export { _ContactUsResolver as ContactUsResolver };
