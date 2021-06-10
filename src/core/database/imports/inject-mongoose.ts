import { MongooseModule } from "@nestjs/mongoose";
import { AutoIncOptions, autoIncrement } from "mongoose-plugin-autoinc-fix";
import { configs } from "../../typescript/util/configs.util";
import { Schema, Document, Model } from "mongoose";
const mongooseI18n = require("mongoose-i18n-localize");

function injectMongoose(
  modelName: any,
  schemaRef: {
    plugin: (
      arg0: (
        schema: Schema<Document<any, any>, Model<any, any>, undefined>,
        options?: AutoIncOptions | undefined
      ) => void,
      arg1: {
        model?: any;
        field?: string;
        startAt?: number;
        unique?: boolean;
        locales?: any;
        defaultLanguage?: any;
      }
    ) => void;
    index: (arg0: any, arg1: { unique: boolean }) => void;
  },
  options?: Partial<{ disable: any; enable: any }>
) {
  return MongooseModule.forFeatureAsync([
    {
      name: modelName,
      useFactory: () => {
        let _a, _b, _c;
        if (
          !((_a =
            options === null || options === void 0
              ? void 0
              : options.disable) === null || _a === void 0
            ? void 0
            : _a.numbering)
        ) {
          schemaRef.plugin(autoIncrement, {
            model: modelName,
            field: "id",
            startAt: 1,
            unique: true,
          });
        }
        if (
          (_b =
            options === null || options === void 0
              ? void 0
              : options.enable) === null || _b === void 0
            ? void 0
            : _b.uniqueCompoundIndex
        ) {
          schemaRef.index(options?.enable?.uniqueCompoundIndex, {
            unique: true,
          });
        }
        if (
          !((_c =
            options === null || options === void 0
              ? void 0
              : options.disable) === null || _c === void 0
            ? void 0
            : _c.i18n)
        ) {
          schemaRef.plugin(mongooseI18n, {
            locales: configs.options.i18n.languages,
            defaultLanguage: configs.options.i18n.defaultLanguage,
          });
        }
        return schemaRef;
      },
    },
  ]);
}
const _injectMongoose = injectMongoose;
export { _injectMongoose as injectMongoose };
