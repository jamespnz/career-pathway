import { BookOpen, Cake, FlaskConical, Briefcase, Plane, Users, Building2, TrendingUp } from 'lucide-react';
import { useLang } from '@/context/LanguageContext';

export default function TimelinePage() {
  const { t } = useLang();

  const milestones = [
    {
      year: '2026',
      icon: BookOpen,
      title: t('Level 4 Baking — Foundation Year', 'レベル4 製パン — 基礎年度'),
      desc: t('Start NZ study. Learn breads, pastries, basic desserts. Build English fluency.', 'NZ留学開始。パン、ペースリー、基本デザートを学ぶ。英語力を築く。'),
      salary: '¥2.2M–2.8M',
      color: 'bg-stone-400',
    },
    {
      year: '2027',
      icon: Cake,
      title: t('Level 5 Patisserie — Advanced Skills', 'レベル5 製菓 — 高度スキル'),
      desc: t('Master entremets, chocolate, artisan breads. Begin supervisory training. Part-time work.', 'アントルメ、チョコレート、職人パンを習得。監督研修開始。アルバイト開始。'),
      salary: '¥2.8M–3.6M',
      color: 'bg-fern-400',
    },
    {
      year: '2028',
      icon: FlaskConical,
      title: t('Food Tech Diploma + NZ Work Experience', '食品技術ディプロマ ＋ NZ就労経験'),
      desc: t('Complete Food Tech. Accumulate retail + production experience. Full English fluency.', '食品技術修了。小売＋生産経験を蓄積。フル英語力。'),
      salary: '¥3.4M–4.2M',
      color: 'bg-fern-600',
    },
    {
      year: '2029',
      icon: Plane,
      title: t('Return to Japan — Employment', '日本帰国 — 就職'),
      desc: t('Enter Japanese workforce with strong qualifications and bilingual ability.', '強力な資格とバイリンガル能力で日本の労働市場に参入。'),
      salary: '¥3.4M–4.2M',
      color: 'bg-sakura-500',
    },
    {
      year: '2030–2031',
      icon: Users,
      title: t('Supervisor / Shift Leader', '監督／シフトリーダー'),
      desc: t('Promoted to supervisory role. Lead a team, manage production schedules.', '監督職に昇進。チームをリードし、生産スケジュールを管理。'),
      salary: '¥4.2M–5.5M',
      color: 'bg-sakura-600',
    },
    {
      year: '2032–2033',
      icon: Building2,
      title: t('QA Lead / R&D Assistant / Production Manager', 'QAリード／R&Dアシスタント／生産管理者'),
      desc: t('Move into specialised management roles. Food Tech skills unlock manufacturing careers.', '専門管理職へ移行。食品技術スキルが製造キャリアを開く。'),
      salary: '¥5.5M–6.5M',
      color: 'bg-sakura-700',
    },
    {
      year: '2034–2035',
      icon: TrendingUp,
      title: t('Management / Department Head', '管理／部門長'),
      desc: t('Reach management level. Salary ceiling approaches ¥8M with full fluency + experience.', '管理レベルに到達。フル英語力＋経験で年収上限は800万円に接近。'),
      salary: '¥7.0M–8.0M',
      color: 'bg-sakura-800',
    },
  ];

  return (
    <div className="animate-fade-in">
      <section className="bg-gradient-to-br from-fern-50 to-sakura-50 py-16">
        <div className="container-page">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-800 max-w-3xl">
            {t('Career Timeline (2026 → 2035)', 'キャリアタイムライン（2026 → 2035）')}
          </h1>
          <p className="mt-4 text-lg text-stone-600 max-w-2xl">
            {t(
              'See the full journey — from your first day of NZ study to management level in Japan. Each milestone builds on the last, creating a clear path of salary growth and career progression.',
              'NZ留学初日から日本の管理レベルまでの全行程を見る。各マイルストーンが前の上に積み重なり、給与成長とキャリア進歩の明確な道を作る。'
            )}
          </p>
        </div>
      </section>

      <div className="container-page py-16">
        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-stone-200 -translate-x-1/2" />

          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div
                key={i}
                className={`relative flex items-start gap-6 ${
                  i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 z-10">
                  <div className={`w-4 h-4 rounded-full ${m.color} ring-4 ring-white`} />
                </div>

                {/* Content */}
                <div className={`flex-1 pl-16 sm:pl-0 ${i % 2 === 0 ? 'sm:pr-16 sm:text-right' : 'sm:pl-16'}`}>
                  <div className="card p-6 inline-block w-full">
                    <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                      <div className={`w-10 h-10 rounded-lg ${m.color} flex items-center justify-center shrink-0`}>
                        <m.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm font-bold text-stone-400">{m.year}</span>
                    </div>
                    <h3 className="text-lg font-bold text-stone-800 mb-2">{m.title}</h3>
                    <p className="text-sm text-stone-500 leading-relaxed mb-3">{m.desc}</p>
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-50 ${i % 2 === 0 ? 'sm:ml-auto' : ''}`}>
                      <Briefcase className="w-3.5 h-3.5 text-stone-400" />
                      <span className="text-xs font-semibold text-stone-600">{m.salary}</span>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden sm:block flex-1" />
              </div>
            ))}
          </div>
        </div>

        {/* Motivational */}
        <section className="rounded-3xl bg-gradient-to-br from-fern-600 to-fern-800 p-10 sm:p-14 text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('Your Future Is Built Step by Step', 'あなたの未来は一歩ずつ築かれる')}
          </h2>
          <p className="text-fern-50 text-lg max-w-2xl mx-auto">
            {t(
              'Each year of study and work in NZ is an investment that compounds. By 2035, you could be earning ¥7M–¥8M in a management role — something that would take much longer without the NZ pathway.',
              'NZでの各年の学習と就労は複利で成長する投資。2035年までに管理職で700〜800万円を稼げる可能性。NZパスなしでははるかに時間がかかる。'
            )}
          </p>
        </section>
      </div>
    </div>
  );
}
