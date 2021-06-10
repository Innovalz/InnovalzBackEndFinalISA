import { Module } from "@nestjs/common";
import { SmallParagraphService } from "./small-paragraph.service";
import { SmallParagraphResolver } from "./small-paragraph.resolver";
import { SmallParagraphSchema } from "./repo/small-paragraph.schema";
import { ModelsNames } from "../../core/database/models-names";
import { injectMongoose } from "../../core/database/imports/inject-mongoose";
import { SmallParagraphRepo } from "./repo/small-paragraph.repo";
import { __decorate } from "../../helpers/decorate";

let SmallParagraphModule = class SmallParagraphModule {};
SmallParagraphModule = __decorate(
  [
    Module({
      imports: [
        injectMongoose(ModelsNames.smallParagraph, SmallParagraphSchema),
      ],
      providers: [
        SmallParagraphRepo,
        SmallParagraphService,
        SmallParagraphResolver,
      ],
      exports: [SmallParagraphService],
    }),
  ],
  SmallParagraphModule
);
const _SmallParagraphModule = SmallParagraphModule;
export { _SmallParagraphModule as SmallParagraphModule };
