import { createContext, useContext, useState, type ReactNode } from 'react';

export type PageId =
  | 'home'
  | 'level4'
  | 'level5'
  | 'foodtech'
  | 'nzwork'
  | 'timeline'
  | 'map'
  | 'matrix'
  | 'summary';

interface RouterContextType {
  page: PageId;
  navigate: (p: PageId) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export function RouterProvider({ children }: { children: ReactNode }) {
  const [page, setPage] = useState<PageId>('home');
  const navigate = (p: PageId) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return <RouterContext.Provider value={{ page, navigate }}>{children}</RouterContext.Provider>;
}

export function useRouter() {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error('useRouter must be used within RouterProvider');
  return ctx;
}

export const navItems: { id: PageId; labelEn: string; labelJp: string }[] = [
  { id: 'home', labelEn: 'Home', labelJp: 'ホーム' },
  { id: 'level4', labelEn: 'Level 4', labelJp: 'レベル4' },
  { id: 'level5', labelEn: 'Level 5', labelJp: 'レベル5' },
  { id: 'foodtech', labelEn: 'Food Tech', labelJp: '食品技術' },
  { id: 'nzwork', labelEn: 'NZ Work', labelJp: 'NZ就労' },
  { id: 'timeline', labelEn: 'Timeline', labelJp: 'タイムライン' },
  { id: 'map', labelEn: 'Employer Map', labelJp: '雇用主マップ' },
  { id: 'matrix', labelEn: 'Decision Matrix', labelJp: '決定マトリクス' },
  { id: 'summary', labelEn: 'Executive Summary', labelJp: 'エグゼクティブサマリー' },
];
