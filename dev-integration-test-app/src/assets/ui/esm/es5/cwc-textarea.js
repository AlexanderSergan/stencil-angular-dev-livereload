/*! Built with http://stenciljs.com */
import { h } from './livingui-textarea.core.js';
var CwcTextarea = /** @class */ (function () {
    function CwcTextarea() {
        this.label = '';
        this.value = 'asdfasfasdfasdf';
        this.initialValue = '';
    }
    CwcTextarea.prototype.componentWillLoad = function () {
        this.initialValue = this.value;
        console.log('1 nah');
    };
    CwcTextarea.prototype.changeHanlder = function (e) {
        var value = e.target.value;
        if (this.initialValue !== value) {
            this.onvaluechange.emit(value);
            this.initialValue = value;
        }
    };
    CwcTextarea.prototype.render = function () {
        var _this = this;
        console.log('textarea test');
        return ([
            h("h2", null, "test"),
            h("div", { class: "form-group" }, h("label", { class: "control-label" }, this.label + 'test'), h("textarea", { id: this.id, class: "form-control", value: this.value, onKeyUp: function (e) { return _this.changeHanlder(e); }, onPaste: function (e) { return _this.changeHanlder(e); } }))
        ]);
    };
    Object.defineProperty(CwcTextarea, "is", {
        get: function () { return "cwc-textarea"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CwcTextarea, "properties", {
        get: function () {
            return {
                "id": {
                    "type": String,
                    "attr": "id"
                },
                "label": {
                    "type": String,
                    "attr": "label"
                },
                "value": {
                    "type": String,
                    "attr": "value"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CwcTextarea, "events", {
        get: function () {
            return [{
                    "name": "onvaluechange",
                    "method": "onvaluechange",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CwcTextarea, "style", {
        get: function () { return ""; },
        enumerable: true,
        configurable: true
    });
    return CwcTextarea;
}());
export { CwcTextarea };
