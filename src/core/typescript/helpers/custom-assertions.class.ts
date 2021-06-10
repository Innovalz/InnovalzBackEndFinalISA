import {
  InternalServerErrorException,
  ForbiddenException,
} from "@nestjs/common";
class CustomAssertions {
  static argsNullOrEmptyAssertion(args: {
    [x: string]: any;
    originalFileName?: any;
  }) {
    for (const key in args) {
      if (Object.prototype.hasOwnProperty.call(args, key)) {
        const keyValue = args[key];
        if (!keyValue) {
          throw new InternalServerErrorException(
            `"${key}" cannot be empty or null`
          );
        }
      }
    }
  }
  static valuesNullOrEmptyAssertion(values: { value: any; message: string }[]) {
    if (!Array.isArray(values)) return checkObj(values);
    for (const obj of values) {
      checkObj(obj);
    }
  }
  static assertArrayValues(arr: any) {
    for (const item of arr) {
      if (!item) {
        throw new Error(`Invalid ${item} in ${arr}`);
      }
    }
    return arr;
  }
}
const _CustomAssertions = CustomAssertions;
export { _CustomAssertions as CustomAssertions };
function checkObj(obj: { value: any; message: any }) {
  if (!obj.value) {
    throw new ForbiddenException(obj.message);
  }
}
