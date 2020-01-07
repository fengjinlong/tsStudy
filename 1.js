"use strict";
exports.__esModule = true;
/**
 * 一个方法：生成错误提示信息
 *
 * @param {string} message 提示信息，比如`you have a error`
 * @param {number | string} code 错误码，数字和字符都行
 * @param {string} type 类型，请写`demo1`或者`demo2`
 *
 * [还不懂？点这里吧](https://www.google.com)
 *
 * // demo
 * genErrMsg('demo', 10086)
 *
 */
function genErrMsg(message, code, type) {
    return (message || "\u7F51\u7EDC\u7E41\u5FD9\uFF0C\u8BF7\u7A0D\u5019\u518D\u8BD5") + (code ? "(" + code + ")" : "");
}
exports.genErrMsg = genErrMsg;
genErrMsg();

function f () {

}

setInterval()

f.call()