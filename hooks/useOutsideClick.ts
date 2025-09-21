import { useEffect } from 'react';

export default function useOutsideClick<T extends HTMLElement>(
  ref: React.RefObject<T | null>, // allow null
  handler: () => void
) {
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (!ref.current || ref.current.contains(e.target as Node)) {
        return;
      }
      handler();
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener); // for mobile

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}
