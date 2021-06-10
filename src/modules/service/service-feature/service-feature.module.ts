import { Module, forwardRef } from "@nestjs/common";
import { ServiceFeatureService } from "./service-feature.service";
import { ServiceFeatureResolver } from "./service-feature.resolver";
import { ServiceFeatureSchema } from "./repo/service-feature.schema";
import { ModelsNames } from "../../../core/database/models-names";
import { injectMongoose } from "../../../core/database/imports/inject-mongoose";
import { ServiceFeatureRepo } from "./repo/service-feature.repo";
import { ChildServiceModule } from "../child-service/child-service.module";
import { __decorate } from "../../../helpers/decorate";

let ServiceFeatureModule = class ServiceFeatureModule {};
ServiceFeatureModule = __decorate(
  [
    Module({
      imports: [
        injectMongoose(ModelsNames.serviceFeature, ServiceFeatureSchema),
        forwardRef(() => ChildServiceModule),
      ],
      providers: [
        ServiceFeatureRepo,
        ServiceFeatureService,
        ServiceFeatureResolver,
      ],
      exports: [ServiceFeatureService],
    }),
  ],
  ServiceFeatureModule
);
const _ServiceFeatureModule = ServiceFeatureModule;
export { _ServiceFeatureModule as ServiceFeatureModule };
