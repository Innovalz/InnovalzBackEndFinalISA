import { __decorate } from "../helpers/decorate";
import { Module, ValidationPipe } from "@nestjs/common";
import { DatabaseModule } from "./database/database.module";
import { GraphqlModule } from "./graphql/graphql.module";
import { I18nModule } from "./i18n/i18n.module";
import { AssetsModule } from "./assets/assets.module";
import { APP_PIPE } from "@nestjs/core";

let CoreModule = class CoreModule {
  onApplicationShutdown(signal: any) {
    console.log({ signal });
  }
};
CoreModule = __decorate(
  [
    Module({
      imports: [AssetsModule, DatabaseModule, GraphqlModule, I18nModule],
      providers: [
        {
          provide: APP_PIPE,
          useClass: ValidationPipe,
        },
      ],
    }),
  ],
  CoreModule
);
const _CoreModule = CoreModule;
export { _CoreModule as CoreModule };
