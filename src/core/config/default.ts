import { join } from "path";
import { SupportedLanguages } from "../typescript/@types/supported-languages";
let production = process.env.PRODUCTION  ? true : false;
const defaultConfigs = {

  server: {
    production:production,
    protocol: production ? "https" : "http" || "http",
    host: production ? process.env.HOST : "localhost",
    port: production ? process.env.PORT : 3000,
    basePath: "graphql",
  },
  database: {
    uri: production ? process.env.MONGO_URL:"mongodb://localhost:27017/innovalz-website",
  },
  app: {
    name: "Innovalz Website",
  },
  options: {
    nodeMailer: {
      transporter: {
        name: "www.innovalz.com",
        host: "mail.innovalz.com",
        port: 587,
        secure: false,
        auth: {
          user: "no-reply@innovalz.com",
          pass: "!*NmMKdgd[E1",
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
      from: "no-reply@innovalz.com",
      sender: "Innovalz",
    },
    mongoose: {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    },
    bcrypt: {
      rounds: 10,
    },
    classValidator: {
      //transform: false,
      //forbidNonWhitelisted: true,
      //transformOptions: {
      //enableImplicitConversion: true,
      //strategy: "exposeAll",
      //},
    },
    i18n: {
      defaultLanguage: (SupportedLanguages as any).en,
      languages: Object.values(SupportedLanguages),
    },
    jwt: {
      secret: "my_jwt_secret",
      signOptions: {
        expiresIn: 3600,
      },
    },
  },
  paths: {
    assets: join(process.cwd(), "public", "assets"),
    dev: join(process.cwd(), "public", "dev"),
    uploads: join(process.cwd(), "public", "uploads"),
  },
};
const _default = defaultConfigs;
export { _default as default };
