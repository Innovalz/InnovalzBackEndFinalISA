import { Module, forwardRef } from "@nestjs/common";
import { ChildServiceService } from "./child-service.service";
import { ChildServiceResolver } from "./child-service.resolver";
import { ChildServiceSchema } from "./repo/child-service.schema";
import { ModelsNames } from "../../../core/database/models-names";
import { injectMongoose } from "../../../core/database/imports/inject-mongoose";
import { ChildServiceRepo } from "./repo/child-service.repo";
import { ServiceFeatureModule } from "../service-feature/service-feature.module";
import { ParentServiceModule } from "../parent-service/parent-service.module";
import { __decorate } from "../../../helpers/decorate";

let ChildServiceModule = class ChildServiceModule {};
ChildServiceModule = __decorate(
  [
    Module({
      imports: [
        injectMongoose(ModelsNames.childService, ChildServiceSchema),
        forwardRef(() => ServiceFeatureModule),
        forwardRef(() => ParentServiceModule),
      ],
      providers: [ChildServiceRepo, ChildServiceResolver, ChildServiceService],
      exports: [ChildServiceService],
    }),
  ],
  ChildServiceModule
);
const _ChildServiceModule = ChildServiceModule;
export { _ChildServiceModule as ChildServiceModule };
