import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TranslationModule } from "translation-package";

@Module({
  imports: [TranslationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
