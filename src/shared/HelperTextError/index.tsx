import React from "react";
import { FieldError } from "react-hook-form";

interface IHelperTextError {
  validation: FieldError | undefined;
}

export const HelperTextError: React.FC<IHelperTextError> = ({ validation }) => {
  return (
    validation && (
      <span className="text-secundary text-xs mt-1 text-red font-bold">
        {validation.message}
      </span>
    )
  );
};
