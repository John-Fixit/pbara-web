"use client";

/**
 * Initials circle in navy + gold for missing executive/patron/chapter photos.
 * Do not use random stock faces — use this until real photos are provided.
 */
interface AvatarPlaceholderProps {
  name: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

const sizeClasses = {
  sm: "w-10 h-10 text-sm",
  md: "w-14 h-14 text-base",
  lg: "w-20 h-20 text-lg",
};

export function AvatarPlaceholder({ name, size = "md", className = "" }: AvatarPlaceholderProps) {
  const initials = getInitials(name);
  return (
    <div
      className={`rounded-full bg-navy border-2 border-gold flex items-center justify-center text-gold font-semibold font-heading ${sizeClasses[size]} ${className}`}
      role="img"
      aria-label={`Avatar for ${name}`}
    >
      {initials}
    </div>
  );
}
