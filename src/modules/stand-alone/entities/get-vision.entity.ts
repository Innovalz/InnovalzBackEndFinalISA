import { ObjectType } from "@nestjs/graphql";
import { __decorate } from "../../../helpers/decorate";

let VisionEntity = class VisionEntity {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      title: { nullable: false, type: () => String },
      desc: { nullable: false, type: () => String },
    };
  }
};
VisionEntity = __decorate([ObjectType()], VisionEntity);
const _VisionEntity = VisionEntity;
export { _VisionEntity as VisionEntity };
