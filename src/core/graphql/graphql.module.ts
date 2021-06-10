import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ResumeScaler } from "./scalers/resume.scaler";
import { ImageScaler } from "./scalers/image.scaler";
import { __decorate } from "../../helpers/decorate";

let GraphqlModule = class GraphqlModule {};
GraphqlModule = __decorate(
  [
    Module({
      imports: [
        GraphQLModule.forRoot({
          autoSchemaFile: true,
          context: ({ req, connection }) => {
            return connection ? { req: connection.context } : { req };
          },
          uploads: {
            maxFileSize: 5000000,
            maxFiles: 5,
          },
          playground: true,
          introspection: true,
          formatError: (error) => {
            let _a, _b, _c, _d, _e, _f, _g;
            const message =
              ((_c =
                (_b =
                  (_a = error.extensions) === null || _a === void 0
                    ? void 0
                    : _a.exception) === null || _b === void 0
                  ? void 0
                  : _b.response) === null || _c === void 0
                ? void 0
                : _c.message) || error.message;
            return {
              error:
                (_e =
                  (_d = error.extensions) === null || _d === void 0
                    ? void 0
                    : _d.exception) === null || _e === void 0
                  ? void 0
                  : _e.message,
              status:
                (_g =
                  (_f = error.extensions) === null || _f === void 0
                    ? void 0
                    : _f.exception) === null || _g === void 0
                  ? void 0
                  : _g.status,
              message: typeof message === "string" ? [message] : message,
              path: error.path,
            };
          },
        }),
      ],
      providers: [ImageScaler, ResumeScaler],
    }),
  ],
  GraphqlModule
);
const _GraphqlModule = GraphqlModule;
export { _GraphqlModule as GraphqlModule };
