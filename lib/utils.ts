import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


/// The CN function enables to safely and properly combine Tailwind classes, spefically Dynamic class.
/// We have specific classes for 'Error' state, and 'Success' state.
/// Shadcn Ui is a compenent library that is very compatible with Next.js