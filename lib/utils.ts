import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// tailwind-merge doit connaître nos tailles de police personnalisées,
// sinon `text-display-lg` est pris pour une couleur et écrasé par `text-ink`.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": ["text-display-xl", "text-display-lg", "text-display-md", "text-brush-xl", "text-brush-lg", "text-giant"],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
