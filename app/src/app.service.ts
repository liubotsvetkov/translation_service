import { Inject, Injectable } from '@nestjs/common';
import { TRANSLATION_SERVICE, TranslationService } from "translation-package";

@Injectable()
export class AppService {

  constructor(
    @Inject(TRANSLATION_SERVICE)
    private readonly translationService: TranslationService
  ) {}
  
  async getHello(): Promise<string> {
    return await this.translationService.translate("key1", {
      lang: "en",
    });
  }
}
