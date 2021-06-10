export class DtoTransformerUtil {
  static _handleParsing(value: string, opts = { isArray: false }) {
    if (opts && opts.isArray && Array.isArray(value)) return value;
    const parsedData = JSON.parse(value);
    if (opts && opts.isArray) {
      return !Array.isArray(parsedData) ? [parsedData] : parsedData;
    }
    return parsedData;
  }
  static convertStringToArrayOfNumber(value: string) {
    try {
      return value
        .split(",")
        .map((stringValue: string) => +stringValue.replace(/"/g, "").trim());
    } catch (err) {
      return value;
    }
  }
  static convertStringToArrayOfStrings(value: string) {
    try {
      return value
        .split(",")
        .map((stringValue: string) => stringValue.replace(/"/g, "").trim());
    } catch (err) {
      return value;
    }
  }
  static tryParse(value: any) {
    try {
      return this._handleParsing(value);
    } catch (err) {
      return value;
    }
  }
  static tryParseAsArray(value: string) {
    try {
      value = value.replace(/^"+|"+$/g, "");
      value = value
        .replace(/([a-zA-Z0-9]+?):/g, '"$1":')
        .replace(/'/g, '"')
        .replace(/[`~!@#$%^&*()_|+\-=?;.<>\\\\\\\/]/gi, "");
      return this._handleParsing(value, { isArray: true });
    } catch (err) {
      return value;
    }
  }
  static parseStringToArrayOfObjects(value: any) {
    try {
      const parsedValue = this.tryParse(value);
      const valueWithoutSpecialCharacters = parsedValue
        .replace(/([a-zA-Z0-9]+?):/g, '"$1":')
        .replace(/'/g, '"')
        .replace(/[`~!@#$%^&*()_|+\-=?;.<>\\\\\\\/]/gi, "");
      return JSON.parse(valueWithoutSpecialCharacters);
    } catch (error) {
      console.error({ dtoTransformer: { error } });
    }
  }
}
