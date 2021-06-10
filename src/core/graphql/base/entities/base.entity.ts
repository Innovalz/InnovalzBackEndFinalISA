import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsPositive } from "class-validator";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";

let BaseEntity = class BaseEntity {
  static _GRAPHQL_METADATA_FACTORY() {
    return { id: { nullable: true, type: () => Number } };
  }
};
__decorate(
  [Field(() => Int), IsPositive(), __metadata("design:type", Number)],
  BaseEntity.prototype,
  "id",
  void 0
);
BaseEntity = __decorate([ObjectType()], BaseEntity);
const _BaseEntity = BaseEntity;
export { _BaseEntity as BaseEntity };
