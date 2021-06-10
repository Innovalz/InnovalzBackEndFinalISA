import { ObjectType } from "@nestjs/graphql";
import { __decorate } from "../../../helpers/decorate";

let MissionEntity = class MissionEntity {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      title: { nullable: false, type: () => String },
      desc: { nullable: false, type: () => String },
    };
  }
};
MissionEntity = __decorate([ObjectType()], MissionEntity);
const _MissionEntity = MissionEntity;
export { _MissionEntity as MissionEntity };
