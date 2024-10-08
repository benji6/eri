type TValidator = (_: string) => string | undefined;

const composeValidators =
  (...validators: TValidator[]): TValidator =>
  (value) => {
    for (const validator of validators) {
      const validationResult = validator(value);
      if (validationResult) return validationResult;
    }
  };

const emailValidator: TValidator = (value) =>
  /.+@.+/.test(value) ? undefined : "Email address not valid";

const passwordValidator: TValidator = (value) => {
  if (value.length < 8) return "Password must be at least 8 characters long";
  if (value.toLowerCase() === value)
    return "Password must have at least one uppercase letter";
  if (value.toUpperCase() === value)
    return "Password must have at least one lowercase letter";
  if (!/\d/g.test(value)) return "Password must contain at least one number";
};

export const requiredValidator: TValidator = (value) =>
  value ? undefined : "Required";

export const validateEmailField = composeValidators(
  requiredValidator,
  emailValidator,
);

export const validatePasswordField = composeValidators(
  requiredValidator,
  passwordValidator,
);
