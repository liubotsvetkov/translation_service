"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslationModule = void 0;
const nestjs_i18n_1 = require("nestjs-i18n");
const common_1 = require("@nestjs/common");
const path_1 = require("path");
const TranslationServiceImpl_1 = require("./services/TranslationServiceImpl");
let TranslationModule = class TranslationModule {
};
TranslationModule = __decorate([
    common_1.Module({
        imports: [
            nestjs_i18n_1.I18nModule.forRoot({
                fallbackLanguage: "pt-BR",
                loaderOptions: {
                    path: path_1.join(__dirname, "/i18n/"),
                    watch: true,
                },
                loader: nestjs_i18n_1.I18nJsonLoader,
            }),
        ],
        providers: [
            { provide: TranslationServiceImpl_1.TRANSLATION_SERVICE, useClass: TranslationServiceImpl_1.TranslationServiceImpl },
        ],
        exports: [TranslationServiceImpl_1.TRANSLATION_SERVICE],
    })
], TranslationModule);
exports.TranslationModule = TranslationModule;
//# sourceMappingURL=TranslationModule.js.map