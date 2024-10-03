import { ReactNode } from "react";

interface CardServiceProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export default function CardService({
  title,
  description,
  icon,
}: CardServiceProps) {
  return (
    <div className="w-3/12 p-5 border">
      <div className="my-3 m-auto w-24 h-24 overflow-hidden rounded-full bg-slate-700 text-5xl text-white flex justify-center items-center">
        {icon}
      </div>
      <h5 className="text-center text-slate-900/80">{title}</h5>
      <p className="text-center text-slate-900/70 text-sm">{description}</p>
    </div>
  );
}
