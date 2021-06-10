import { Field, Int, InputType } from "@nestjs/graphql";
import {
  DEFAULT_PAGINATION_LIMIT,
  DEFAULT_PAGINATION_PAGE,
} from "../../../typescript/variables/system-config";
import { IsOptional, IsPositive } from "class-validator";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";

let OptionsArgs = class OptionsArgs {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      limit: { nullable: true, type: () => Number },
      page: { nullable: true, type: () => Number },
    };
  }
};
__decorate(
  [
    Field(() => Int, { defaultValue: DEFAULT_PAGINATION_LIMIT }),
    IsOptional(),
    IsPositive(),
    __metadata("design:type", Number),
  ],
  OptionsArgs.prototype,
  "limit",
  void 0
);
__decorate(
  [
    Field(() => Int, { defaultValue: DEFAULT_PAGINATION_PAGE }),
    IsOptional(),
    IsPositive(),
    __metadata("design:type", Number),
  ],
  OptionsArgs.prototype,
  "page",
  void 0
);
OptionsArgs = __decorate([InputType()], OptionsArgs);
const _OptionsArgs = OptionsArgs;
export { _OptionsArgs as OptionsArgs };
