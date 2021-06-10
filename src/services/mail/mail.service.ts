import { Injectable } from "@nestjs/common";
import { createTransport } from "nodemailer";
import { configs } from "../../core/typescript/util/configs.util";
import { __decorate } from "../../helpers/decorate";

let MailService = class MailService {
  transporter: any;
  constructor() {
    this.transporter = createTransport(configs.options.nodeMailer.transporter);
  }
  async sendEmail(mailOptions: any) {
    const _mailOptions = Object.assign(Object.assign({}, mailOptions), {
      from: configs.options.nodeMailer.from,
    });
    return new Promise((resolve, reject) => {
      let _a;
      return (_a = this.transporter) === null || _a === void 0
        ? void 0
        : _a.sendMail(_mailOptions, (err: any, info: unknown) => {
            if (err) {
              reject(err);
            } else {
              resolve(info);
            }
          });
    });
  }
};
MailService = __decorate([Injectable()], MailService);
const _MailService = MailService;
export { _MailService as MailService };
