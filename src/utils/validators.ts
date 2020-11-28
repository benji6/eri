type TValidator = (_: string) => string | undefined;

export const composeValidators = (...validators: TValidator[]): TValidator => (
  value
) => {
  for (let i = 0; i < validators.length; i++) {
    const validationResult = validators[i](value);
    if (validationResult) return validationResult;
  }
};

export const emailValidator: TValidator = (value) =>
  /.+@.+/.test(value) ? undefined : "Email address not valid";

export const passwordValidator: TValidator = (value) => {
  if (value.length < 8) return "Password must be at least 8 characters long";
  if (value.toLowerCase() === value)
    return "Password must have at least one uppercase letter";
  if (value.toUpperCase() === value)
    return "Password must have at least one lowercase letter";
  if (!/\d/g.test(value)) return "Password must contain at least one number";
};

export const requiredValidator: TValidator = (value) =>
  value ? undefined : "Required";
