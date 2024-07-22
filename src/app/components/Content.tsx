import { PropsWithChildren } from "react";

export const Content = ({ children }: PropsWithChildren) => {
  return (
    <div className="p-4 border border-slate-50 rounded-lg bg-white text-black">
      {children}
    </div>
  );
};
