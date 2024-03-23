"use client";
import { CldImage } from "next-cloudinary";

interface PersonCardProps {
  name: string;
  role: string;
  description: string;
  src: string;
}
export const PersonCard = ({
  name,
  role,
  description,
  src,
}: PersonCardProps) => {
  return (
    <div className="card max-w-2xl grid content-between justify-items-start">
      <strong className="text-xl ">{name}</strong>
      <h2 className="text-gray-200 my-2">{role}</h2>
      <CldImage width={650} height="600" alt="person" src={src} />
      <h3 className="text-gray-200 text-sm mt-4">{description}</h3>
    </div>
  );
};
