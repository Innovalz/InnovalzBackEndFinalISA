import { ObjectType } from "@nestjs/graphql";
import { __decorate } from "../../../../helpers/decorate";

let UserDataEntity = class UserDataEntity {
  static _GRAPHQL_METADATA_FACTORY() {
    return {
      name: { nullable: false, type: () => String },
      email: { nullable: false, type: () => String },
      phone: { nullable: false, type: () => String },
    };
  }
};
UserDataEntity = __decorate([ObjectType()], UserDataEntity);
const _UserDataEntity = UserDataEntity;
export { _UserDataEntity as UserDataEntity };
