type BaseRule = {
    name: string;
    type: "string" | "number" | "select";
    required: boolean;
    errorMessage: string;
  };
  type StringRule = BaseRule & {
    type: "string";
    min?: number;
    max?: number;
  };
  
  type NumberRule = BaseRule & {
    type: "number";
    min?: number;
    max?: number;
  };
  
  type SelectRule = BaseRule & {
    type: "select";
    options: string[];
  };
  type ValidationRule = StringRule | NumberRule | SelectRule;
  type Value = {
    name: string;
    value: any;
  };

  function validate(rules: ValidationRule[], values: Value[]): { name: string; error: string }[] {
    const errors: { name: string; error: string }[] = [];
  
    for (const rule of rules) {
      const valObj = values.find(v => v.name === rule.name);
      const val = valObj?.value;
  
      if (rule.required) {
        if (val === undefined || val === null || val === "") {
          errors.push({ name: rule.name, error: rule.errorMessage });
          continue; 
        }
      }
  
      switch (rule.type) {
        case "string":
          if (typeof val !== "string") {
            errors.push({ name: rule.name, error: "Wartość musi być tekstem." });
            break;
          }
          if ("min" in rule && val.length < (rule.min ?? 0)) {
            errors.push({ name: rule.name, error: `Minimalna długość to ${rule.min} znaków.` });
          }
          if ("max" in rule && val.length > (rule.max ?? Infinity)) {
            errors.push({ name: rule.name, error: `Maksymalna długość to ${rule.max} znaków.` });
          }
          break;
  
        case "number":
          if (typeof val !== "number") {
            errors.push({ name: rule.name, error: "Wartość musi być liczbą." });
            break;
          }
          if ("min" in rule && val < (rule.min ?? -Infinity)) {
            errors.push({ name: rule.name, error: `Minimalna wartość to ${rule.min}.` });
          }
          if ("max" in rule && val > (rule.max ?? Infinity)) {
            errors.push({ name: rule.name, error: `Maksymalna wartość to ${rule.max}.` });
          }
          break;
  
        case "select":
          if (typeof val !== "string") {
            errors.push({ name: rule.name, error: "Wartość musi być tekstem (wybór z listy)." });
            break;
          }
          if (!rule.options.includes(val)) {
            errors.push({ name: rule.name, error: `Wartość musi być jedną z dostępnych opcji.` });
          }
          break;
      }
    }
  
    return errors;
  }
  