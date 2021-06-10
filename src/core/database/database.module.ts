import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { __decorate } from "../../helpers/decorate";
import { configs } from "../typescript/util/configs.util";

let DatabaseModule = class DatabaseModule {};
DatabaseModule = __decorate(
  [
    Module({
      imports: [
        MongooseModule.forRoot(
          configs.database.parsedUrl,
          configs.options.mongoose
        ),
      ],
    }),
  ],
  DatabaseModule
);
const _DatabaseModule = DatabaseModule;
export { _DatabaseModule as DatabaseModule };
