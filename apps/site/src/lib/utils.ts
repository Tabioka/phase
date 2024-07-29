import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import { env } from "./env"

import type { ClassValue } from "clsx"

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const absoluteURL = (path: string) => env.NEXT_PUBLIC_BASE_URL + path

export const getInitials = (input: string) => {
  const words = input.split(" ")

  if (!words.length) return "N/A"
  if (words.length == 1) return words[0]!.slice(0, 2).toUpperCase()

  return (
    words[0]!.charAt(0).toUpperCase() +
    words[words.length - 1]!.charAt(0).toUpperCase()
  )
}

export const getOrdinal = (number: number): string => {
  if (number >= 11 && number <= 13) return number + "th"
  return (
    number +
    (["th", "st", "nd", "rd"][number % 10] ?? ["th", "st", "nd", "rd"][0]!)
  )
}

export function deleteKeyRecursively<TObj, TKey extends string>(
  obj: TObj,
  keyToDelete: TKey,
): Omit<TObj, TKey> {
  typeof obj === "object" &&
    obj !== null &&
    (Array.isArray(obj)
      ? obj.forEach((item) => deleteKeyRecursively(item, keyToDelete))
      : Object.entries(obj).forEach(([key, value]) =>
          key === keyToDelete
            ? delete obj[key as keyof typeof obj]
            : deleteKeyRecursively(value, keyToDelete),
        ))

  return obj as Omit<TObj, TKey>
}
