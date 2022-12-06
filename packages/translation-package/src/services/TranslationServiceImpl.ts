import { Injectable } from "@nestjs/common";
import { TranslateOptions, I18n, I18nContext } from "nestjs-i18n";
import { TranslationService } from "../interfaces/TranslationService";

export const TRANSLATION_SERVICE = "TRANSLATION-SERVICE";

@Injectable()
export class TranslationServiceImpl implements TranslationService {
  constructor(@I18n() private readonly i18n: I18nContext) {}

  public async translate(
    key: string,
    options: TranslateOptions = {}
  ): Promise<string> {
    return this.i18n.translate(key, options);
  }

  public async translateFields(
    translatableFields: string[],
    language: string
  ): Promise<{ [key: string]: string }> {
    let translationLanguage: string;
    if (language.includes("en")) {
      translationLanguage = "en";
    } else {
      translationLanguage = "pt";
    }
    const translatedFieldsArray = await Promise.all(
      translatableFields.map(async (field) => {
        const translatedField = await this.translate(field, {
          lang: translationLanguage,
        });
        return { [field]: translatedField };
      })
    );
    return translatedFieldsArray.reduce(
      (prevValue, currValue) => ({ ...prevValue, ...currValue }),
      {}
    );
  }
}
