export class FlattenObject {
  static allProperties(obj: { [x: string]: any }, prefix = "") {
    return Object.keys(obj).reduce((acc: Record<string, unknown>, k) => {
      const pre = prefix.length ? prefix + "." : "";
      if (typeof obj[k] === "object") {
        Object.assign(acc, FlattenObject.allProperties(obj[k], pre + k));
      } else {
        acc[pre + k] = obj[k];
      }
      return acc;
    }, {});
  }
  static excludeArray(obj: { [x: string]: any }, prefix = "") {
    return Object.keys(obj).reduce((acc: Record<string, unknown>, k) => {
      const pre = prefix.length ? prefix + "." : "";
      if (!Array.isArray(obj[k])) {
        if (typeof obj[k] === "object") {
          Object.assign(acc, FlattenObject.excludeArray(obj[k], pre + k));
        } else {
          acc[pre + k] = obj[k];
        }
      } else {
        acc[pre + k] = obj[k];
      }
      return acc;
    }, {});
  }
}
