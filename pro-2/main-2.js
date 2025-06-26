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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path_1 = require("path");
var prompt_1 = require("../prompt/prompt");
var progress_js_1 = require("./progress.js");
var orginalFolder = (0, path_1.join)(__dirname, "orginal");
var cloneFolder = (0, path_1.join)(__dirname, "clone");
if (!fs.existsSync(cloneFolder)) {
    fs.mkdirSync(cloneFolder, { recursive: true });
}
console.log("\tMenu\n\n1. Copy File\n2. Move File\n3. Show Folder");
var showFolder = function () {
    var files = fs.readdirSync(orginalFolder);
    files.forEach(function (file, index) {
        var fullPath = (0, path_1.join)(orginalFolder, file);
        var stats = fs.statSync(fullPath);
        var sizeMB = (stats.size / 1024 / 1024).toFixed(2);
        console.log("".concat(index + 1, ". ").concat(file, " ------------- ").concat(sizeMB, " MB"));
    });
    return files;
};
// ---------------------------------------------------------------------------
var copyFile = function () { return __awaiter(void 0, void 0, void 0, function () {
    var files, ask, _a, selectedFile, fromPath, toPath;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                console.clear();
                console.log("COPY File\n\n");
                files = showFolder();
                _a = Number;
                return [4 /*yield*/, (0, prompt_1.askPrompt)("\n>>> ")];
            case 1:
                ask = _a.apply(void 0, [_b.sent()]);
                console.clear();
                selectedFile = files[ask - 1];
                if (!selectedFile) {
                    console.error("❌ Tanlangan file topilmadi!");
                    return [2 /*return*/];
                }
                fromPath = (0, path_1.join)(orginalFolder, selectedFile);
                toPath = (0, path_1.join)(cloneFolder, selectedFile);
                try {
                    (0, progress_js_1.copyFileWithProgress)(fromPath, toPath, function (percent) {
                        console.clear();
                        console.log("\uD83D\uDCE6 Nusxalanmoqda: ".concat(percent, "%"));
                        if (percent >= 100) {
                            console.clear();
                            console.log("".concat(selectedFile, " faylni nusxalandi :)"));
                            return;
                        }
                    });
                }
                catch (err) {
                    console.error("❌ Xatolik:", err.message);
                }
                return [2 /*return*/];
        }
    });
}); };
// ---------------------------------------------------------------------------
var moveFile = function () { return __awaiter(void 0, void 0, void 0, function () {
    var files, ask, _a, selectedFile, fromPath, toPath;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                console.clear();
                console.log("MOVE File\n\n");
                files = showFolder();
                _a = Number;
                return [4 /*yield*/, (0, prompt_1.askPrompt)("\n>>> ")];
            case 1:
                ask = _a.apply(void 0, [_b.sent()]);
                selectedFile = files[ask - 1];
                if (!selectedFile) {
                    console.error("❌ Fayl topilmadi!");
                    return [2 /*return*/];
                }
                fromPath = (0, path_1.join)(orginalFolder, selectedFile);
                toPath = (0, path_1.join)(cloneFolder, selectedFile);
                try {
                    (0, progress_js_1.copyFileWithProgress)(fromPath, toPath, function (percent) {
                        console.clear();
                        console.log("\uD83D\uDCE6 Ko'chirilmoqda: ".concat(percent, "%"));
                        if (percent >= 100) {
                            console.clear();
                            console.log("".concat(selectedFile, " file ko'chirildi :)"));
                            fs.unlink(fromPath, function (err) {
                                if (err) {
                                    return;
                                }
                            });
                        }
                    });
                }
                catch (err) {
                    console.error("❌ Ko'chirishda xatolik:", err.message);
                }
                return [2 /*return*/];
        }
    });
}); };
// ---------------------------------------------------------------------------
var showMenu = function () { return __awaiter(void 0, void 0, void 0, function () {
    var choose, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = Number;
                return [4 /*yield*/, (0, prompt_1.askPrompt)("\n>>> Tanlovingiz: ")];
            case 1:
                choose = _a.apply(void 0, [_c.sent()]);
                _b = choose;
                switch (_b) {
                    case 1: return [3 /*break*/, 2];
                    case 2: return [3 /*break*/, 4];
                    case 3: return [3 /*break*/, 6];
                }
                return [3 /*break*/, 7];
            case 2: return [4 /*yield*/, copyFile()];
            case 3:
                _c.sent();
                return [3 /*break*/, 8];
            case 4: return [4 /*yield*/, moveFile()];
            case 5:
                _c.sent();
                return [3 /*break*/, 8];
            case 6:
                console.clear();
                console.log("".concat(orginalFolder, " - Folder\n"));
                showFolder();
                return [3 /*break*/, 8];
            case 7:
                console.log("❌ Noto'g'ri tanlov!");
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); };
// ---------------------------------------------------------------------------
showMenu();
