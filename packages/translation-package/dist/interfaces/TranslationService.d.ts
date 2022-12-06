import { TranslateOptions } from "nestjs-i18n";
export declare const TRANSLATION_SERVICE = "TRANSLATION-SERVICE";
export interface TranslationService {
    translate(key: string, options: TranslateOptions): Promise<string>;
    translateFields(translatableFields: string[], language: string): Promise<{
        [key: string]: string;
    }>;
}
