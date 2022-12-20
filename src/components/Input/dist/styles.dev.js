"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 80%;\n    height: 62px;\n\n    margin: 20px;\n\n    border: 2px solid #afafaf;\n    border-radius: 20px;\n\n    input{\n        width: 100%;\n        height: 62px;\n        padding: 0 20px;\n\n        background-color: inherit;\n        color: #fff;\n        border: 0;\n        \n        font-size: 20px;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var InputContainer = _styledComponents["default"].div(_templateObject());

exports.InputContainer = InputContainer;