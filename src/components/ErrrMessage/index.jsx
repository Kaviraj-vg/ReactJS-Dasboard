import React from "react";

export const ErrrMessage = ({ errors = [], className = "" }) => {
  return (
    errors?.length > 0 && (
      <div
        className={`text-red-500 text-left text-xs w-full mt-1 ${className}`}
      >
        {errors.join(", ")}
      </div>
    )
  );
};
