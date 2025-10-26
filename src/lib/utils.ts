import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const langColors: Record<string, string> = {
    TypeScript: "#3178c6",
    JavaScript: "#f1e05a",
    Python: "#3572A5",
    Go: "#00ADD8",
    Rust: "#dea584",
    C: "#555555",
    "C++": "#f34b7d",
    Java: "#b07219",
    PHP: "#4F5D95",
    Ruby: "#701516",
    HTML: "#e34c26",
    CSS: "#214ce5",
    Shell: "#89e051",
    Swift: "#ffac45",
    Kotlin: "#A97BFF",
    Dart: "#00B4AB",
    Svelte: "#ff3e00",
}
