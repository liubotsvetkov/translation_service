import { TranslateOptions, I18nContext } from "nestjs-i18n";
import { TranslationService } from "../interfaces/TranslationService";
export declare const TRANSLATION_SERVICE = "TRANSLATION-SERVICE";
export declare class TranslationServiceImpl implements TranslationService {
    private readonly i18n;
    constructor(i18n: I18nContext);
    translate(key: string, options?: TranslateOptions): Promise<string>;
    translateFields(translatableFields: string[], language: string): Promise<{
        [key: string]: string;
    }>;
}
