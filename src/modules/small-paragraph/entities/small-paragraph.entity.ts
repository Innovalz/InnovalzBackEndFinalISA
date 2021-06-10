import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsPositive } from "class-validator";
import { BaseEntity } from "../../../core/graphql/base/entities/base.entity";
import { InfoEntity } from "../../../core/graphql/base/entities/info.entity";
import { __decorate } from "../../../helpers/decorate";
import { __metadata } from "../../../helpers/metadata";

let SmallParagraphEntity = class SmallParagraphEntity /* extends BaseEntity */ {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      id: { nullable: true, type: () => Number },
      headline: { nullable: false, type: () => String },
      fullDesc: { nullable: false, type: () => [String] },
    };
  }
};
__decorate(
  [Field(() => Int), IsPositive(), __metadata("design:type", Number)],
  BaseEntity.prototype,
  "id",
  void 0
);
SmallParagraphEntity = __decorate([ObjectType()], SmallParagraphEntity);
const _SmallParagraphEntity = SmallParagraphEntity;
export { _SmallParagraphEntity as SmallParagraphEntity };

let FindManySmallParagraphsEntity = class FindManySmallParagraphsEntity {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      entities: {
        nullable: false,
        type: () => [SmallParagraphEntity],
      },
      info: {
        nullable: true,
        type: () => InfoEntity,
      },
    };
  }
};
FindManySmallParagraphsEntity = __decorate(
  [ObjectType()],
  FindManySmallParagraphsEntity
);
const _FindManySmallParagraphsEntity = FindManySmallParagraphsEntity;
export { _FindManySmallParagraphsEntity as FindManySmallParagraphsEntity };
