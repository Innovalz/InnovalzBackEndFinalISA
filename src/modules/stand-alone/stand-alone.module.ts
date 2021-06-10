import { Module } from "@nestjs/common";
import { StandAloneService } from "./stand-alone.service";
import { StandAloneResolver } from "./stand-alone.resolver";
import { StandAloneSchema } from "./repo/stand-alone.schema";
import { ModelsNames } from "../../core/database/models-names";
import { injectMongoose } from "../../core/database/imports/inject-mongoose";
import { StandAloneRepo } from "./repo/stand-alone.repo";
import { __decorate } from "../../helpers/decorate";

let StandAloneModule = class StandAloneModule {};
StandAloneModule = __decorate(
  [
    Module({
      imports: [
        injectMongoose(ModelsNames.standAlone, StandAloneSchema, {
          disable: { numbering: true },
        }),
      ],
      providers: [StandAloneRepo, StandAloneResolver, StandAloneService],
      exports: [StandAloneService],
    }),
  ],
  StandAloneModule
);
const _StandAloneModule = StandAloneModule;
export { _StandAloneModule as StandAloneModule };
