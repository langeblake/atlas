import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}
/// The CN function enables to safely and properly combine Tailwind classes, spefically Dynamic class.
/// We have specific classes for 'Error' state, and 'Success' state.
/// Shadcn Ui is a compenent library that is very compatible with Next.js 