import clsx from "clsx";
import { PropsWithChildren } from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({
  children,
  className = "",
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <button
      className={clsx("p-2 bg-blue-600 rounded-lg", className)}
      {...props}
    >
      {children}
    </button>
  );
};
