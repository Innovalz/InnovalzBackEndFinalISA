import { Module } from "@nestjs/common";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { __decorate } from "../../helpers/decorate";

let AssetsModule = class AssetsModule {};
AssetsModule = __decorate(
  [
    Module({
      imports: [
        ServeStaticModule.forRoot({
          rootPath: join(process.cwd(), "public"),
        }),
      ],
    }),
  ],
  AssetsModule
);
const _AssetsModule = AssetsModule;
export { _AssetsModule as AssetsModule };
