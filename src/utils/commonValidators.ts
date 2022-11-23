import { emailRegex } from "./Regex";

export const checkIfEmailIsValid = (emailField: string): boolean => {
  return emailRegex.test(emailField);
};

export const chechIfFieldsAreEmpty = (fields: string[]): boolean => {
  return fields.every((field) => field.length > 0);
};

export const checkLength = (field: string, length: number): boolean => {
  return field.trim().length >= length;
};
