import { ZodError, ZodIssue } from "zod";

interface ErrorMap {
  [key: string]: string;
}

export const extractErrors = (zodError: ZodError): ErrorMap => {
  return zodError.errors.reduce((acc: ErrorMap, error: ZodIssue) => {
    acc[error.path[0]] = error.message;
    return acc;
  }, {});
};

export const getInputClassName = (hasError: boolean) =>
  `bg-[#f8f9fa] shadow-inner p-3 rounded-lg ${
    hasError ? "border-red-500 border-[1px]" : "!mb-5"
  }`;
