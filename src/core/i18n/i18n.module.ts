import { Module } from "@nestjs/common";
import {
  I18nModule as __I18nModule,
  HeaderResolver,
  I18nJsonParser,
} from "nestjs-i18n";
import { __decorate } from "../../helpers/decorate";
import { SupportedLanguages } from "../typescript/@types/supported-languages";
import { configs } from "../typescript/util/configs.util";

let I18nModule = class I18nModule {};
I18nModule = __decorate(
  [
    Module({
      imports: [
        __I18nModule.forRoot({
          fallbackLanguage: configs.options.i18n.defaultLanguage,
          fallbacks: {
            "en-.*": (SupportedLanguages as any).en,
            "ar-.*": (SupportedLanguages as any).ar,
          },
          resolvers: [new HeaderResolver(["accept-language"])],
          parser: I18nJsonParser,
          parserOptions: {
            path: __dirname,
            watch: true,
          },
        }),
      ],
    }),
  ],
  I18nModule
);
const _I18nModule = I18nModule;
export { _I18nModule as I18nModule };
