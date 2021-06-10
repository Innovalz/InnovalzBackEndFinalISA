import { ObjectType } from "@nestjs/graphql";
import { __decorate } from "../../../helpers/decorate";

let AboutEntity = class AboutEntity {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      title: { nullable: false, type: () => String },
      desc: { nullable: false, type: () => [String] },
      desc2: { nullable: false, type: () => String },
    };
  }
};
AboutEntity = __decorate([ObjectType()], AboutEntity);
const _AboutEntity = AboutEntity;
export { _AboutEntity as AboutEntity };
