// Retained for compatibility. The editorial redesign uses a single-theme
// (light paper + dark sections). This hook is no longer called from App.tsx.
export type Theme = 'dark' | 'light';
export function useTheme() {
  return { theme: 'light' as Theme, toggle: () => {} };
}
