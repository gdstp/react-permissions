import clsx from "clsx";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ className = "", ...props }: Props) => {
  return (
    <input
      className={clsx("p-2 rounded-lg text-black", className)}
      {...props}
    />
  );
};
