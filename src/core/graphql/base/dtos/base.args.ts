import { Field, Int, ArgsType } from "@nestjs/graphql";
import { IsPositive } from "class-validator";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";

let BaseArgs = class BaseArgs {
  static _GRAPHQL_METADATA_FACTORY() {
    return { id: { nullable: false, type: () => Number } };
  }
};
__decorate(
  [Field(() => Int), IsPositive(), __metadata("design:type", Number)],
  BaseArgs.prototype,
  "id",
  void 0
);
BaseArgs = __decorate([ArgsType()], BaseArgs);
const _BaseArgs = BaseArgs;
export { _BaseArgs as BaseArgs };
