import { NestFactory } from "@nestjs/core";
import { setupGracefulShutdown } from "nestjs-graceful-shutdown";
import { AppModule } from "./app.module.js";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupGracefulShutdown({ app });
  await app.listen(3000);
}

bootstrap().catch(console.error);
