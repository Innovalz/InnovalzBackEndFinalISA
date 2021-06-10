import { Query, Args, Mutation, Resolver } from "@nestjs/graphql";
import { SmallParagraphService } from "./small-paragraph.service";
import {
  FindManySmallParagraphsEntity,
  SmallParagraphEntity,
} from "./entities/small-paragraph.entity";
import { CreateSmallParagraphInput } from "./dtos/create-small-paragraph.input";
import { UpdateSmallParagraphInput } from "./dtos/update-small-paragraph.input";
import { FilterSmallParagraphArg } from "./dtos/filter-small-paragraph.args";
import { OptionsArgs } from "../../core/graphql/base/dtos/options.args";
import { BaseArgs } from "../../core/graphql/base/dtos/base.args";
import { Auth } from "../../services/auth/decorators/auth.decorator";
import { authRoles } from "../../services/auth/constants/auth.roles";
import { CustomOptions } from "../../core/class-validator/decorators/custom-options.decorator";
import { __decorate } from "../../helpers/decorate";
import { __metadata } from "../../helpers/metadata";
import { __param } from "../../helpers/param";

let SmallParagraphResolver = class SmallParagraphResolver {
  private _smallParagraphService: any;
  constructor(_smallParagraphService: any) {
    this._smallParagraphService = _smallParagraphService;
  }
  async findManySmallParagraphs(query = {}, options: any, customOptions: any) {
    return this._smallParagraphService.findManyPaginated(
      query,
      null,
      Object.assign(Object.assign({}, options), customOptions)
    );
  }
  async findOneSmallParagraph(query: any, customOptions: any) {
    return this._smallParagraphService.findOne(query, null, customOptions);
  }
  async createSmallParagraph(data: any, customOptions: any) {
    return this._smallParagraphService.create(data, customOptions);
  }
  async updateSmallParagraph(data: { id: any }, customOptions: any) {
    return this._smallParagraphService.findOneAndUpdate(
      { id: data.id },
      data,
      customOptions
    );
  }
  async removeSmallParagraph(args: { id: any }, customOptions: any) {
    return this._smallParagraphService.findOneAndRemove(
      { id: args.id },
      customOptions
    );
  }
};
__decorate(
  [
    Auth(authRoles.smallParagraphs.findAll),
    Query(() => FindManySmallParagraphsEntity),
    __param(0, Args("query", { nullable: true })),
    __param(1, Args("options", { nullable: true })),
    __param(2, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
      FilterSmallParagraphArg,
      OptionsArgs,
      Object,
    ]),
    __metadata("design:returntype", Promise),
  ],
  SmallParagraphResolver.prototype,
  "findManySmallParagraphs",
  null
);
__decorate(
  [
    Auth(authRoles.smallParagraphs.findOne),
    Query(() => SmallParagraphEntity, { nullable: true }),
    __param(0, Args("query", { nullable: true })),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FilterSmallParagraphArg, Object]),
    __metadata("design:returntype", Promise),
  ],
  SmallParagraphResolver.prototype,
  "findOneSmallParagraph",
  null
);
__decorate(
  [
    Auth(authRoles.smallParagraphs.create),
    Mutation(() => SmallParagraphEntity),
    __param(0, Args("data")),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateSmallParagraphInput, Object]),
    __metadata("design:returntype", Promise),
  ],
  SmallParagraphResolver.prototype,
  "createSmallParagraph",
  null
);
__decorate(
  [
    Auth(authRoles.smallParagraphs.update),
    Mutation(() => SmallParagraphEntity, { nullable: true }),
    __param(0, Args("data")),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdateSmallParagraphInput, Object]),
    __metadata("design:returntype", Promise),
  ],
  SmallParagraphResolver.prototype,
  "updateSmallParagraph",
  null
);
__decorate(
  [
    Auth(authRoles.smallParagraphs.delete),
    Mutation(() => SmallParagraphEntity, { nullable: true }),
    __param(0, Args()),
    __param(1, CustomOptions()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BaseArgs, Object]),
    __metadata("design:returntype", Promise),
  ],
  SmallParagraphResolver.prototype,
  "removeSmallParagraph",
  null
);
SmallParagraphResolver = __decorate(
  [
    Resolver(() => SmallParagraphEntity),
    __metadata("design:paramtypes", [SmallParagraphService]),
  ],
  SmallParagraphResolver
);
const _SmallParagraphResolver = SmallParagraphResolver;
export { _SmallParagraphResolver as SmallParagraphResolver };
