import { ZodError, ZodIssue } from "zod";

interface ErrorMap {
  [key: string]: string;
}

const extractErrors = (zodError: ZodError): ErrorMap => {
  return zodError.errors.reduce((acc: ErrorMap, error: ZodIssue) => {
    acc[error.path[0]] = error.message;
    return acc;
  }, {});
};

export { extractErrors };
