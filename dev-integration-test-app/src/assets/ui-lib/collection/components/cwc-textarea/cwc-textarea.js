export class CwcTextarea {
    constructor() {
        this.label = '';
        this.value = '';
        this.initialValue = '';
    }
    componentWillLoad() {
        this.initialValue = this.value;
    }
    changeHanlder(e) {
        let value = e.target.value;
        if (this.initialValue !== value) {
            this.onvaluechange.emit(value);
            this.initialValue = value;
        }
    }
    render() {
        return (h("div", { class: "form-group" },
            h("label", { class: "control-label" }, this.label),
            h("textarea", { id: this.id, class: "form-control", value: this.value, onKeyUp: e => this.changeHanlder(e), onPaste: e => this.changeHanlder(e) })));
    }
    static get is() { return "cwc-textarea"; }
    static get properties() { return {
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
    }; }
    static get events() { return [{
            "name": "onvaluechange",
            "method": "onvaluechange",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:cwc-textarea:**/"; }
}
