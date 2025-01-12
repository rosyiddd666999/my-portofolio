import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Button = (
  props: {
    variant: "primary" | "secondary" | "text";
    iconAfter?: ReactNode;
  } & ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const { className, children, variant, iconAfter, ...rest } = props;
  return (
    <button
      className={twMerge(
        "h-11 px-6 rounded-xl border border-buttonColor uppercase inline-flex items-center gap-2 transition duration-300 relative",
        variant === "primary" && "bg-buttonColor text-white",
        variant === "secondary" &&
          "overflow-hidden group bg-transparent text-buttonColor hover:text-white",
        variant === "text" &&
          "h-auto px-0 border-transparent after:transition-all after:duration-300 after:content-[''] after:h-px after:w-0 after:absolute after:top-full after:bg-buttonColor hover:after:w-full",
        className
      )}
      {...rest}
    >
      {variant === "secondary" && (
        <span className="absolute inset-0 bg-buttonColor transform translate-y-full scale-x-[1.1] rounded-t-full transition-transform duration-500 group-hover:translate-y-0 group-hover:rounded-xl group-hover:scale-x-100"></span>
      )}
      <span className="relative z-10">{children}</span>
      {iconAfter && <span className="relative z-10">{iconAfter}</span>}
    </button>
  );
};

export default Button;
