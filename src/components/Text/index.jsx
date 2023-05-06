import React from "react";

const variantClasses = {
  h1: "font-bold sm:text-5xl md:text-5xl text-7xl",
  h2: "font-bold text-4xl sm:text-[32px] md:text-[34px]",
  h3: "text-lg",
  h4: "font-normal text-base",
  h5: "font-normal text-sm",
  h6: "font-normal text-xs",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
