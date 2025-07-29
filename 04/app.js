function generateForm() {
    var fields = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fields[_i] = arguments[_i];
    }
    var form = document.createElement("form");
    for (var _a = 0, fields_1 = fields; _a < fields_1.length; _a++) {
        var field = fields_1[_a];
        var input = void 0;
        if (field.type === "text" || field.type === "number") {
            var inputElement = document.createElement("input");
            inputElement.type = field.type;
            inputElement.name = field.name;
            input = inputElement;
        }
        else if (field.type === "select") {
            var selectElement = document.createElement("select");
            selectElement.name = field.name;
            for (var _b = 0, _c = field.options; _b < _c.length; _b++) {
                var optionValue = _c[_b];
                var option = document.createElement("option");
                option.value = optionValue;
                option.textContent = optionValue;
                selectElement.appendChild(option);
            }
            input = selectElement;
        }
        else {
            continue;
        }
        form.appendChild(input);
    }
    return form;
}
// :
document.body.appendChild(generateForm({ type: "text", name: "firstName" }, { type: "number", name: "age" }, { type: "select", name: "country", options: ["Polska", "Niemcy"] }));
