import { useLang } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-stone-800 text-stone-300 mt-20">
      <div className="container-page py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-fern-500 to-fern-700 flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <div>
              <p className="font-display font-bold text-white">Heads-Up Consulting</p>
              <p className="text-sm text-stone-400">
                {t('Career Pathways: NZ Study → Japan Employment', 'キャリアパス：ニュージーランド留学 → 日本就職')}
              </p>
            </div>
          </div>
          <p className="text-sm text-stone-400">
            © 2026 Heads-Up Consulting. {t('All rights reserved.', 'All rights reserved.')}
          </p>
        </div>
      </div>
    </footer>
  );
}
