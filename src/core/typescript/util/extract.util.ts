import { extension } from "mime-types";
import { extname } from "path";
class ExtractUtil {
  static extensionType(originalFileName, mimetype) {
    let extensionType = "";
    if (mimetype) {
      const mimeTypeHasExtension = extension(mimetype);
      if (mimeTypeHasExtension) {
        extensionType = "." + mimeTypeHasExtension;
      }
    }
    if (!Boolean(extensionType)) {
      extensionType = extname(originalFileName);
    }
    return extensionType;
  }
}
const _ExtractUtil = ExtractUtil;
export { _ExtractUtil as ExtractUtil };
