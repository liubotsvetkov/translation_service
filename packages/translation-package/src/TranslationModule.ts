import { I18nJsonLoader, I18nModule } from "nestjs-i18n";
import { Module } from "@nestjs/common";
import { join } from "path";
import {
  TranslationServiceImpl,
  TRANSLATION_SERVICE,
} from "./services/TranslationServiceImpl";

@Module({
  imports: [
    I18nModule.forRoot({
      fallbackLanguage: "pt-BR",
      loaderOptions: {
        path: join(__dirname, "/i18n/"),
        watch: true,
      },
      loader: I18nJsonLoader,
    }),
  ],
  providers: [
    { provide: TRANSLATION_SERVICE, useClass: TranslationServiceImpl },
  ],
  exports: [TRANSLATION_SERVICE],
})
export class TranslationModule {}
