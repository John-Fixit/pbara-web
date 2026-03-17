"use client";

import Image from "next/image";

/**
 * Logo avatar placeholder for missing photos.
 * Keeps layout consistent until real portraits are provided.
 */
interface AvatarPlaceholderProps {
  name: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "w-10 h-10",
  md: "w-14 h-14",
  lg: "w-20 h-20",
};

export function AvatarPlaceholder({ name, size = "md", className = "" }: AvatarPlaceholderProps) {
  return (
    <div
      className={`relative rounded-full bg-primary border-2 border-gold overflow-hidden ${sizeClasses[size]} ${className}`}
      role="img"
      aria-label={`Avatar for ${name}`}
    >
      <Image
        src="/images/ra-logo.png"
        alt=""
        fill
        className="object-contain p-2"
        sizes="80px"
        priority={false}
      />
    </div>
  );
}
