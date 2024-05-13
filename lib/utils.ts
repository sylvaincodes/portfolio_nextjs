import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fetcher = async (
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) => {
  const res = await fetch(input, init);
  return res.json();
};


dayjs.extend(relativeTime);

export default dayjs;

