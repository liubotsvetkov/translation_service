"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslationServiceImpl = exports.TRANSLATION_SERVICE = void 0;
const common_1 = require("@nestjs/common");
const nestjs_i18n_1 = require("nestjs-i18n");
exports.TRANSLATION_SERVICE = "TRANSLATION-SERVICE";
let TranslationServiceImpl = class TranslationServiceImpl {
    constructor(i18n) {
        this.i18n = i18n;
    }
    async translate(key, options = {}) {
        return this.i18n.translate(key, options);
    }
    async translateFields(translatableFields, language) {
        let translationLanguage;
        if (language.includes("en")) {
            translationLanguage = "en";
        }
        else {
            translationLanguage = "pt";
        }
        const translatedFieldsArray = await Promise.all(translatableFields.map(async (field) => {
            const translatedField = await this.translate(field, {
                lang: translationLanguage,
            });
            return { [field]: translatedField };
        }));
        return translatedFieldsArray.reduce((prevValue, currValue) => (Object.assign(Object.assign({}, prevValue), currValue)), {});
    }
};
TranslationServiceImpl = __decorate([
    common_1.Injectable(),
    __param(0, nestjs_i18n_1.I18n()),
    __metadata("design:paramtypes", [nestjs_i18n_1.I18nContext])
], TranslationServiceImpl);
exports.TranslationServiceImpl = TranslationServiceImpl;
//# sourceMappingURL=TranslationServiceImpl.js.map