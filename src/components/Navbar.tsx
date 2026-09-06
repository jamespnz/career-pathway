import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLang } from '@/context/LanguageContext';
import { useRouter, navItems, type PageId } from '@/context/RouterContext';

export default function Navbar() {
  const { lang, toggle } = useLang();
  const { page, navigate } = useRouter();
  const [open, setOpen] = useState(false);

  const go = (id: PageId) => {
    navigate(id);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200/80">
      <nav className="container-page flex items-center justify-between h-16">
        <button onClick={() => go('home')} className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-fern-500 to-fern-700 flex items-center justify-center">
            <span className="text-white font-bold text-lg">H</span>
          </div>
          <span className="font-display font-bold text-stone-800 hidden sm:block">
            Heads-Up Consulting
          </span>
        </button>

        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                page === item.id
                  ? 'bg-fern-50 text-fern-700'
                  : 'text-stone-600 hover:text-fern-700 hover:bg-stone-50'
              }`}
            >
              {lang === 'en' ? item.labelEn : item.labelJp}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-stone-600 hover:text-fern-700 hover:bg-stone-50 transition-colors"
          >
            <Globe className="w-4 h-4" />
            <span className="font-semibold">{lang === 'en' ? 'EN' : 'JP'}</span>
            <span className="text-stone-300">/</span>
            <span className={lang === 'en' ? 'text-stone-300' : 'font-semibold text-fern-700'}>
              {lang === 'en' ? 'JP' : 'EN'}
            </span>
          </button>
          <button
            className="lg:hidden p-2 rounded-lg text-stone-600 hover:bg-stone-50"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-stone-200 bg-white animate-fade-in">
          <div className="container-page py-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={`block w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  page === item.id
                    ? 'bg-fern-50 text-fern-700'
                    : 'text-stone-600 hover:bg-stone-50'
                }`}
              >
                {lang === 'en' ? item.labelEn : item.labelJp}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
