"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseEntity = void 0;
;
var ResponseEntity = /** @class */ (function () {
    function ResponseEntity(props) {
        this.code = 200;
        this.message = 'OK';
        this.data = undefined;
        this.result = undefined;
        var code = props.code, message = props.message, result = props.result, data = props.data;
        this.code = code;
        this.result = result;
        this.data = data;
        this.message = message;
    }
    return ResponseEntity;
}());
exports.ResponseEntity = ResponseEntity;
