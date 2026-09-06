import { ShoppingBag, Factory, ArrowRight, Star, CheckCircle2 } from 'lucide-react';
import { useLang } from '@/context/LanguageContext';
import { useRouter } from '@/context/RouterContext';
import ImpactBadge from '@/components/ImpactBadge';
import { employerImpact } from '@/data/careerData';

export default function NZWorkPage() {
  const { t } = useLang();
  const { navigate } = useRouter();

  const workEnvs = [
    {
      icon: ShoppingBag,
      title: t('Retail Patisserie', '小売製菓'),
      desc: t(
        'Working in a boutique NZ patisserie builds decorative skills, customer service confidence, and English fluency. You learn to produce entremets, glazed desserts, and chocolate work — all while serving customers in English.',
        'NZのブティック製菓店での就労は装飾スキル、接客の自信、英語力を築く。アントルメ、グラッサージュデザート、チョコレートワークを生産しながら英語で接客する。'
      ),
      skills: [t('Decorative plating', '装飾プレーティング'), t('Customer service in English', '英語での接客'), t('Display and merchandising', 'ディスプレイとマーチャンダイジング')],
    },
    {
      icon: Factory,
      title: t('Commercial / Institutional Bakery', '商業／機関ベーカリー'),
      desc: t(
        'Working in a supermarket, hospital, or hotel production kitchen builds batch production skills and QA awareness. You learn to manage large quantities, maintain consistency, and follow food safety protocols.',
        'スーパー、病院、ホテルの生産キッチンでの就労はバッチ生産スキルとQA意識を築く。大量管理、一貫性維持、食品安全プロトコルの順守を学ぶ。'
      ),
      skills: [t('Batch production', 'バッチ生産'), t('Quality assurance exposure', '品質保証の経験'), t('High-volume workflow', '大量生産ワークフロー')],
    },
  ];

  return (
    <div className="animate-fade-in">
      <section className="bg-gradient-to-br from-fern-50 to-stone-50 py-16">
        <div className="container-page">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-800 max-w-3xl">
            {t('NZ Work Experience — Retail + Production', 'NZ就労経験 — 小売＋生産')}
          </h1>
          <p className="mt-4 text-lg text-stone-600 max-w-2xl">
            {t(
              'Part-time work in New Zealand is not just about earning money — it is a major career advantage. Real work experience in NZ bakeries and production kitchens makes you stand out from other candidates when you return to Japan.',
              'NZでのアルバイトはお金を稼ぐだけではない。大きなキャリア上の利点。NZベーカリーと生産キッチンでの実務経験は、日本に帰国した際に他の候補者と差をつける。'
            )}
          </p>
        </div>
      </section>

      <div className="container-page py-16 space-y-16">
        {/* Two work environments */}
        <section className="grid md:grid-cols-2 gap-6">
          {workEnvs.map((env, i) => (
            <div key={i} className="card p-8">
              <div className="w-14 h-14 rounded-2xl bg-fern-100 flex items-center justify-center mb-5">
                <env.icon className="w-7 h-7 text-fern-600" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">{env.title}</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">{env.desc}</p>
              <div className="space-y-2">
                {env.skills.map((skill, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-fern-500 shrink-0" />
                    <span className="text-sm text-stone-600">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Employer Impact Table */}
        <section>
          <h2 className="section-title mb-2">
            {t('How NZ Experience Maps to Japanese Employers', 'NZ経験が日本の雇用主にどう対応するか')}
          </h2>
          <p className="section-subtitle mb-8">
            {t('See how different employer categories value each qualification and NZ work experience.', '各雇用主カテゴリが各資格とNZ就労経験をどう評価するかを見る。')}
          </p>
          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-stone-50 border-b border-stone-200">
                    <th className="text-left px-4 py-4 text-xs font-semibold text-stone-500 uppercase tracking-wide">{t('Employer Examples', '雇用主例')}</th>
                    <th className="text-center px-3 py-4 text-xs font-semibold text-stone-500 uppercase">L4</th>
                    <th className="text-center px-3 py-4 text-xs font-semibold text-stone-500 uppercase">L5</th>
                    <th className="text-center px-3 py-4 text-xs font-semibold text-stone-500 uppercase">{t('Food Tech', '食品技術')}</th>
                    <th className="text-center px-3 py-4 text-xs font-semibold text-stone-500 uppercase">{t('NZ Exp.', 'NZ経験')}</th>
                    <th className="text-left px-4 py-4 text-xs font-semibold text-stone-500 uppercase tracking-wide hidden lg:table-cell">{t('Why NZ Matters', 'NZが重要な理由')}</th>
                  </tr>
                </thead>
                <tbody>
                  {employerImpact.map((row, i) => (
                    <tr key={i} className="border-b border-stone-100 last:border-0 hover:bg-stone-50/50 transition-colors">
                      <td className="px-4 py-3 text-sm font-medium text-stone-700">{row.employers}</td>
                      <td className="px-3 py-3 text-center"><ImpactBadge level={row.level4} /></td>
                      <td className="px-3 py-3 text-center"><ImpactBadge level={row.level5} /></td>
                      <td className="px-3 py-3 text-center"><ImpactBadge level={row.foodTech} /></td>
                      <td className="px-3 py-3 text-center"><ImpactBadge level={row.nzExperience} /></td>
                      <td className="px-4 py-3 text-xs text-stone-500 hidden lg:table-cell max-w-xs">{row.whyNZ}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Motivational */}
        <section className="rounded-3xl bg-gradient-to-br from-fern-600 to-fern-800 p-10 sm:p-14 text-center">
          <Star className="w-12 h-12 text-white/80 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('Real Experience Makes You Stand Out in Japan', '実務経験が日本であなたを際立たせる')}
          </h2>
          <p className="text-fern-50 text-lg max-w-2xl mx-auto mb-8">
            {t(
              'When a Japanese employer sees NZ work experience on your CV, they know you have real skills — not just classroom knowledge. You have worked in professional kitchens, served English-speaking customers, and handled real production pressure. That makes you a proven, reliable candidate.',
              '日本の雇用主があなたの履歴書にNZ就労経験を見ると、あなたが本当のスキルを持っていることを知る。教室の知識だけでなく、プロのキッチンで働き、英語を話す顧客に接し、実際の生産プレッシャーを処理した。それがあなたを実証された信頼できる候補にする。'
            )}
          </p>
          <button onClick={() => navigate('timeline')} className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-fern-700 font-bold hover:bg-stone-50 transition-all hover:shadow-xl hover:-translate-y-0.5">
            {t('See Your Career Timeline', 'キャリアタイムラインを見る')}
            <ArrowRight className="w-5 h-5" />
          </button>
        </section>
      </div>
    </div>
  );
}
