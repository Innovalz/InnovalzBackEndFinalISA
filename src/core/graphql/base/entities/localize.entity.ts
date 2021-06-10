import { Field, ObjectType, PartialType } from "@nestjs/graphql";
import { __decorate } from "../../../../helpers/decorate";
import { __metadata } from "../../../../helpers/metadata";

let LocalizeEntity = class LocalizeEntity {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      ar: { nullable: false, type: () => String },
      en: { nullable: false, type: () => String },
    };
  }
};
__decorate(
  [Field(), __metadata("design:type", String)],
  LocalizeEntity.prototype,
  "ar",
  void 0
);
__decorate(
  [Field(), __metadata("design:type", String)],
  LocalizeEntity.prototype,
  "en",
  void 0
);
LocalizeEntity = __decorate([ObjectType()], LocalizeEntity);
const _LocalizeEntity = LocalizeEntity;
export { _LocalizeEntity as LocalizeEntity };

let PartialLocalizeEntity = class PartialLocalizeEntity extends PartialType(
  LocalizeEntity
) {
  static _GRAPHQL_METADATA_FACTORY() {
    return {};
  }
};
PartialLocalizeEntity = __decorate([ObjectType()], PartialLocalizeEntity);
const _PartialLocalizeEntity = PartialLocalizeEntity;
export { _PartialLocalizeEntity as PartialLocalizeEntity };
