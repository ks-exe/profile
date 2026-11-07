import { useEffect, useRef, useState } from 'react';

/**
 * Counts a numeric value from 0 to `end` when `triggered` becomes true.
 * Returns the current display string (preserves non-numeric suffixes like +, ,).
 */
export function useCountUp(rawValue: string, triggered: boolean, duration = 1400) {
  const [display, setDisplay] = useState(rawValue);
  const ran = useRef(false);

  useEffect(() => {
    if (!triggered || ran.current) return;
    // Parse numeric part and suffix (e.g. "3,000+" → num=3000, suffix="+")
    const clean   = rawValue.replace(/,/g, '');
    const numMatch = clean.match(/^(\d+(?:\.\d+)?)(.*)$/);
    if (!numMatch) return; // non-numeric like "RAG" or "Weekly"
    const end     = parseFloat(numMatch[1]);
    const suffix  = numMatch[2] ?? '';
    ran.current   = true;
    const start   = performance.now();
    const tick    = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease out cubic
      const eased   = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * end);
      // Re-add thousands comma
      const formatted = current >= 1000
        ? current.toLocaleString()
        : String(current);
      setDisplay(formatted + suffix);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [triggered, rawValue, duration]);

  return display;
}
