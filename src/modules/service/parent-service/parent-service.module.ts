import { Module, forwardRef } from "@nestjs/common";
import { ParentServiceService } from "./parent-service.service";
import { ParentServiceResolver } from "./parent-service.resolver";
import { ParentServiceSchema } from "./repo/parent-service.schema";
import { ModelsNames } from "../../../core/database/models-names";
import { injectMongoose } from "../../../core/database/imports/inject-mongoose";
import { ParentServiceRepo } from "./repo/parent-service.repo";
import { ChildServiceModule } from "../child-service/child-service.module";
import { __decorate } from "../../../helpers/decorate";

let ParentServiceModule = class ParentServiceModule {};
ParentServiceModule = __decorate(
  [
    Module({
      imports: [
        injectMongoose(ModelsNames.parentService, ParentServiceSchema),
        forwardRef(() => ChildServiceModule),
      ],
      providers: [
        ParentServiceRepo,
        ParentServiceResolver,
        ParentServiceService,
      ],
      exports: [ParentServiceService],
    }),
  ],
  ParentServiceModule
);
const _ParentServiceModule = ParentServiceModule;
export { _ParentServiceModule as ParentServiceModule };
