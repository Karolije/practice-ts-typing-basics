type TextField = {
  type: "text";
  name: string;
};
type NumberField = {
  type: "number";
  name: string;
};
type SelectField = {
  type: "select";
  name: string;
  options: string[];
};

type FormField = TextField | NumberField | SelectField;

function generateForm(...fields: FormField[]): HTMLFormElement {
  const form = document.createElement("form");

  for (const field of fields) {
    let input: HTMLElement;

    if (field.type === "text" || field.type === "number") {
      const inputElement = document.createElement("input");
      inputElement.type = field.type;
      inputElement.name = field.name;
      input = inputElement;
    } else if (field.type === "select") {
      const selectElement = document.createElement("select");
      selectElement.name = field.name;

      for (const optionValue of field.options) {
        const option = document.createElement("option");
        option.value = optionValue;
        option.textContent = optionValue;
        selectElement.appendChild(option);
      }

      input = selectElement;
    } else {
      continue;
    }

    form.appendChild(input);
  }

  return form;
}

document.body.appendChild(
  generateForm(
    { type: "text", name: "firstName" },
    { type: "number", name: "age" },
    { type: "select", name: "country", options: ["Polska", "Niemcy"] }
  )
);
