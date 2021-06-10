export class StringTransformer {
  static toTitleCase(str: string) {
    return str
      .toLowerCase()
      .replace(/\b\w/, (letter: string) => letter.toUpperCase());
  }
}
