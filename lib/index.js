"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HastExp = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
class HastExp {
    constructor() {
        this.url = 'https://hastebin.com/documents';
    }
    makePost(message, extension = 'js') {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof (message) !== 'string')
                return new Error('Content header should be a string but got ' + typeof (message) + ' instead');
            const result = yield node_fetch_1.default(this.url, { method: 'POST', body: message });
            if (result.status === 200) {
                const jsonDate = yield result.json();
                return `${this.url.slice(0, -10)}/${jsonDate.key}.${extension}`;
            }
        });
    }
    fetchPost(linkSlug) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof (linkSlug) !== 'string')
                return new Error(`Lik should should be a string but got ${typeof (linkSlug)} instead`);
            if (linkSlug.length !== 10)
                return new Error(`Link slug should be 10 characters.`);
            const link = yield node_fetch_1.default(`https://hastebin.com/documents/${linkSlug}`, { method: 'GET' });
            let linkData = yield link.json();
            return linkData;
        });
    }
}
exports.HastExp = HastExp;
//# sourceMappingURL=index.js.map