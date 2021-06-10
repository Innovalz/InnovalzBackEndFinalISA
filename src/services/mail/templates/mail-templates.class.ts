import { StringTransformer } from "../../../core/typescript/util/string-transformer.util";
import { confirmRegistrationTemplate } from "./confirm-registration.template";
import { resetPasswordTemplate } from "./reset-password.template";
import { welcomeTemplate } from "./welcome.template";
class EmailTemplates {
  static registration(args) {
    return confirmRegistrationTemplate.call(args);
  }
  static welcome(args) {
    args.userName = StringTransformer.toTitleCase(args.userName.toUpperCase());
    return welcomeTemplate.call(args);
  }
  static forgetPassword(args) {
    return resetPasswordTemplate.call(args);
  }
}
const _EmailTemplates = EmailTemplates;
export { _EmailTemplates as EmailTemplates };
