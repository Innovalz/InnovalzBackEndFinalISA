export class TransformerUtil {
  static flatFromTree(list: string | any[]) {
    let _a, _b;
    const map: Record<string, unknown> = {};
    const root = [];
    for (let i = 0; i < list.length; i += 1) {
      map[list[i].id] = i;
      list[i].children = [];
    }
    for (let i = 0; i < list.length; i += 1) {
      const node = list[i];
      if (node.parent !== null) {
        (_b =
          (_a = list[map[node.parent] as any]) === null || _a === void 0
            ? void 0
            : _a.children) === null || _b === void 0
          ? void 0
          : _b.push(node);
      } else {
        root.push(node);
      }
    }
    return root;
  }
  static stringKeyToRegex(query: { [x: string]: any }) {
    const obj: Record<string, unknown> = {};
    for (const key in query) {
      if (
        Object.prototype.hasOwnProperty.call(query, key) &&
        typeof query[key] === "string" &&
        key != "_id"
      ) {
        obj[key] = new RegExp(query[key], "i");
      } else {
        obj[key] = query[key];
      }
    }
    return obj;
  }
}
