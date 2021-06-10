import { ValidationPipe, Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { configs } from "./core/typescript/util/configs.util";
import { AllExceptionsFilter } from "./core/nestjs/filter/graphql.exception";

class Main {
  static App: any;
  static async bootstrap() {
    // const fs = require('fs');
    // const keyFile = "";
    // const certFile = "";
    // if (process.env.PRODUCTION) {
    //   const certFile = process.env.PRODUCTION ? fs.readFileSync(process.env.SSL_PATH+process.env.SSL_FC) : null;
    //   const keyFile = process.env.PRODUCTION ? fs.readFileSync(process.env.SSL_PATH+process.env.SSL_KEY) : null;
    // }
    const app = await NestFactory.create(AppModule, {

      logger: ["error"],
    //   httpsOptions: {
    //     key: keyFile,
    //     cert: certFile }
    }
    );
    Main.App = app;
    app.useGlobalFilters(new AllExceptionsFilter());
    // app.enableCors();
    app.useGlobalPipes(new ValidationPipe(configs.options.classValidator));
    app.enableShutdownHooks();
    const PORT = configs.server.port;
    await app.listen(PORT, () => {
      if (process.env.PRODUCTION) {
        Logger.log(`server starts on ${configs.server.parsedUrl}`, "App Main");
      } else {
        Logger.log(
          `Server and playground starts on ${configs.server.parsedUrl}${configs.server.basePath}`,
          "App Main"
        );
      }
    });
  }
}
const _Main = Main;
export { _Main as Main };
Main.bootstrap();
