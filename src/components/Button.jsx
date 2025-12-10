import React from "react";

const Button = ({ children, className, variant = "primary", disabled = false }) => {
  return (
    <button
      disabled={disabled}
      className={`${
        variant === "secondary"
          ? "bg-transparent hover:bg-(--primary) border-2 border-(--primary) text-(--primary) hover:text-black"
          : "bg-(--primary) hover:bg-transparent border-2 border-transparent hover:border-(--primary) hover:text-(--primary)"
      } sm:text-base text-sm cursor-pointer rounded-xl sm:p-4 p-3 font-semibold px-10 min-w-fit transition-all ${
        disabled ? "opacity-60 cursor-not-allowed" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
