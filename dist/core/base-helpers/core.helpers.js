"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enumForSwagger = void 0;
const enumForSwagger = (inputEnum, name) => {
    const enumRecord = {};
    Object.keys(inputEnum).forEach((key) => {
        enumRecord[key] = inputEnum[key];
    });
    return { enum: enumRecord, enumName: name };
};
exports.enumForSwagger = enumForSwagger;
//# sourceMappingURL=core.helpers.js.map