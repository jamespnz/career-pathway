import { useState } from 'react';
import { MapPin, X, Building2, Briefcase } from 'lucide-react';
import { useLang } from '@/context/LanguageContext';
import { regions, qualificationRegions, type RegionInfo } from '@/data/careerData';

export default function EmployerMapPage() {
  const { t, lang } = useLang();
  const [selected, setSelected] = useState<RegionInfo | null>(null);

  return (
    <div className="animate-fade-in">
      <section className="bg-gradient-to-br from-sakura-50 to-fern-50 py-16">
        <div className="container-page">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-800 max-w-3xl">
            {t('Japan Employer Map', '日本雇用主マップ')}
          </h1>
          <p className="mt-4 text-lg text-stone-600 max-w-2xl">
            {t(
              'Explore Japan\'s major regions and discover which employer categories and qualifications fit each area. Click a region to see details.',
              '日本の主要地域を探索し、各地域にどの雇用主カテゴリと資格が適合するかを見つける。地域をクリックして詳細を見る。'
            )}
          </p>
        </div>
      </section>

      <div className="container-page py-16 space-y-12">
        {/* Map */}
        <section>
          <div className="card p-6 sm:p-10">
            <div className="relative w-full mx-auto" style={{ maxWidth: '500px' }}>
              {/* Stylized Japan map background */}
              <svg viewBox="0 0 100 80" className="w-full h-auto" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.08))' }}>
                {/* Hokkaido */}
                <path d="M 38 8 Q 42 5 48 8 Q 52 12 48 18 Q 44 22 40 20 Q 36 16 38 8 Z" fill="#dcf2e6" stroke="#8ad3aa" strokeWidth="0.5" />
                {/* Honshu main */}
                <path d="M 42 25 Q 48 22 52 28 Q 55 34 52 40 Q 50 46 48 50 Q 46 54 44 58 L 42 55 Q 44 48 46 42 Q 48 36 46 30 Q 44 26 42 25 Z" fill="#dcf2e6" stroke="#8ad3aa" strokeWidth="0.5" />
                {/* Shikoku */}
                <path d="M 42 52 Q 46 50 48 54 Q 46 58 42 57 Q 40 55 42 52 Z" fill="#dcf2e6" stroke="#8ad3aa" strokeWidth="0.5" />
                {/* Kyushu */}
                <path d="M 28 58 Q 32 56 34 60 Q 36 66 32 68 Q 28 66 27 62 Q 26 60 28 58 Z" fill="#dcf2e6" stroke="#8ad3aa" strokeWidth="0.5" />
              </svg>

              {/* Region pins */}
              {regions.map((region) => (
                <button
                  key={region.name}
                  onClick={() => setSelected(region)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group"
                  style={{ left: `${region.x}%`, top: `${region.y}%` }}
                >
                  <div className="relative">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-sakura-500 border-2 border-white shadow-lg flex items-center justify-center hover:bg-sakura-600 hover:scale-110 transition-all cursor-pointer">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <span className="absolute top-full mt-1 left-1/2 -translate-x-1/2 text-xs font-semibold text-stone-700 whitespace-nowrap bg-white/90 px-2 py-0.5 rounded shadow-sm">
                      {lang === 'en' ? region.name : region.jpName}
                    </span>
                  </div>
                </button>
              ))}
            </div>
            <p className="text-center text-sm text-stone-400 mt-6">
              {t('Click a region pin to see employer details', '地域ピンをクリックして雇用主詳細を見る')}
            </p>
          </div>
        </section>

        {/* Qualification → Best Regions table */}
        <section>
          <h2 className="section-title mb-8">{t('Which Qualification Fits Which Region?', 'どの資格がどの地域に適合するか？')}</h2>
          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-stone-50 border-b border-stone-200">
                    <th className="text-left px-6 py-4 text-xs font-semibold text-stone-500 uppercase tracking-wide">{t('Qualification', '資格')}</th>
                    <th className="text-left px-6 py-4 text-xs font-semibold text-stone-500 uppercase tracking-wide">{t('Best Regions', '最適な地域')}</th>
                    <th className="text-left px-6 py-4 text-xs font-semibold text-stone-500 uppercase tracking-wide hidden md:table-cell">{t('Why', '理由')}</th>
                  </tr>
                </thead>
                <tbody>
                  {qualificationRegions.map((row, i) => (
                    <tr key={i} className="border-b border-stone-100 last:border-0">
                      <td className="px-6 py-4 text-sm font-semibold text-stone-700">{row.qualification}</td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1.5">
                          {row.bestRegions.map((r) => (
                            <span key={r} className="inline-block px-2.5 py-1 rounded-full bg-fern-50 text-fern-700 text-xs font-medium border border-fern-100">
                              {r}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-stone-500 hidden md:table-cell">{row.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

      {/* Detail modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-sm animate-fade-in" onClick={() => setSelected(null)}>
          <div className="card max-w-lg w-full p-8 max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-sakura-100 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-sakura-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-stone-800">{lang === 'en' ? selected.name : selected.jpName}</h3>
                  <p className="text-sm text-stone-400">{lang === 'en' ? selected.jpName : selected.name}</p>
                </div>
              </div>
              <button onClick={() => setSelected(null)} className="p-2 rounded-lg text-stone-400 hover:bg-stone-100">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-5">
              <div>
                <div className="flex items-center gap-2 text-stone-400 mb-2">
                  <Building2 className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wide">{t('Industries', '産業')}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selected.industries.map((ind) => (
                    <span key={ind} className="inline-block px-2.5 py-1 rounded-full bg-fern-50 text-fern-700 text-xs font-medium border border-fern-100">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-stone-400 mb-2">
                  <Briefcase className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wide">{t('Example Employers', '雇用主例')}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selected.exampleEmployers.map((emp) => (
                    <span key={emp} className="inline-block px-2.5 py-1 rounded-full bg-sakura-50 text-sakura-700 text-xs font-medium border border-sakura-100">
                      {emp}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-stone-100">
                <p className="text-sm text-stone-600 leading-relaxed">{selected.why}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
