import React from "react";
import { cn } from "@/lib/utils";

interface LiquidGlassProps {
  children: React.ReactNode;
  className?: string;
}

export const LiquidGlass: React.FC<LiquidGlassProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-white/20 bg-white/10 backdrop-blur-md shadow-lg",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] before:animate-[liquid_3s_ease-in-out_infinite]",
        className,
      )}
    >
      {children}
      <style jsx>{`
        @keyframes liquid {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};
