import { Field, ObjectType } from "@nestjs/graphql";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";

let InfoEntity = class InfoEntity {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      hasNext: { nullable: false, type: () => Boolean },
      nextPage: { nullable: false, type: () => Object },
      hasPrevious: { nullable: false, type: () => Boolean },
      previousPage: { nullable: false, type: () => Object },
      totalEntities: { nullable: false, type: () => Number },
      limit: { nullable: false, type: () => Number },
      totalPages: { nullable: false, type: () => Number },
      currentPage: { nullable: false, type: () => Number },
    };
  }
};
__decorate(
  [Field(() => Number, { nullable: true }), __metadata("design:type", Object)],
  InfoEntity.prototype,
  "nextPage",
  void 0
);
__decorate(
  [Field(() => Number, { nullable: true }), __metadata("design:type", Object)],
  InfoEntity.prototype,
  "previousPage",
  void 0
);
InfoEntity = __decorate([ObjectType()], InfoEntity);
const _InfoEntity = InfoEntity;
export { _InfoEntity as InfoEntity };
