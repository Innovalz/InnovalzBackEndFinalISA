import { Module } from "@nestjs/common";
import { CoreModule } from "./core/core.module";
import { ServicesModule } from "./services/services.module";
import { ModulesModule } from "./modules/modules.module";
import { __decorate } from "./helpers/decorate";

let AppModule = class AppModule {};
AppModule = __decorate(
  [
    Module({
      imports: [CoreModule, ServicesModule, ModulesModule],
    }),
  ],
  AppModule
);
const _AppModule = AppModule;
export { _AppModule as AppModule };
