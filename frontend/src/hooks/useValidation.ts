import { extractErrors } from "../config/utils/validation";
import { useState, useCallback } from "react";

interface ValidationProps {
  schema: any;
  formData: { [key: string]: any };
}

interface ValidationErrors {
  [key: string]: string;
}

const useValidation = ({ schema, formData }: ValidationProps) => {
  const [errors, setErrors] = useState<ValidationErrors>({});

  const handleValidation = useCallback(() => {
    const result = schema.safeParse(formData);
    if (!result.success) {
      const fieldErrors = extractErrors(result.error);
      setErrors(fieldErrors); // fieldErrors도 ValidationErrors 타입이어야 함
      return false;
    }

    setErrors({});
    return true;
  }, [schema, formData]);

  return { errors, validate: handleValidation };
};

export default useValidation;
