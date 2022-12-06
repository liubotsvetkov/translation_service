import { TranslationService } from "translation-package";
export declare class AppService {
    private readonly translationService;
    constructor(translationService: TranslationService);
    getHello(): Promise<string>;
}
