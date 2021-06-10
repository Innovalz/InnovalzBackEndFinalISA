import { configs } from "../../typescript/util/configs.util";
import { GraphQLUpload } from "apollo-server-express";
class BaseScaler {
  parseValue(value: any) {
    return GraphQLUpload === null || GraphQLUpload === void 0
      ? void 0
      : GraphQLUpload.parseValue(value);
  }
  parseLiteral(ast: { [key: string]: any } | null | undefined) {
    return GraphQLUpload === null || GraphQLUpload === void 0
      ? void 0
      : GraphQLUpload.parseLiteral(ast as any, ast);
  }
  serialize(value: any) {
    return `${configs.server.parsedUrl}uploads/${value}`;
  }
}
const _BaseScaler = BaseScaler;
export { _BaseScaler as BaseScaler };
