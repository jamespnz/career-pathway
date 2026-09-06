import {
  ArrowRight,
  BookOpen,
  Globe2,
  Shield,
  Briefcase,
  Award,
  Users,
  Factory,
  TrendingUp,
  Building2,
  Sparkles,
} from 'lucide-react';
import { useLang } from '@/context/LanguageContext';
import { useRouter, type PageId } from '@/context/RouterContext';
import { salaryData } from '@/data/careerData';

export default function HomePage() {
  const { t, lang } = useLang();
  const { navigate } = useRouter();

  const whyNZ = [
    { icon: Globe2, title: t('English Immersion', '英語 immersion'), desc: t('Live and study in an English-speaking country — gain real fluency, not just classroom knowledge.', '英語圏で生活・学習し、本当の語学力を身につける。') },
    { icon: Sparkles, title: t('Western Patisserie Techniques', '西洋製菓技術'), desc: t('Learn French and European patisserie methods that are highly valued in Japan.', '日本で高く評価されるフランス・ヨーロッパの製菓技術を学ぶ。') },
    { icon: Shield, title: t('Safe, Friendly Environment', '安全でフレンドリーな環境'), desc: t('NZ is one of the safest countries in the world — ideal for international students.', 'NZは世界で最も安全な国の一つ。留学生に理想的な環境。') },
    { icon: Briefcase, title: t('Real Part-Time Work', '実際のアルバイト経験'), desc: t('Gain hands-on work experience in bakeries, cafés, and production kitchens.', 'ベーカリー、カフェ、生産キッチンでの実務経験を積む。') },
    { icon: Award, title: t('Recognised Qualifications', '認められた資格'), desc: t('NZQA-registered qualifications are valued by Japanese employers.', 'NZQA登録資格は日本の雇用主から高く評価される。') },
  ];

  const whyJapan = [
    { icon: Users, title: t('Labour Shortages', '人手不足'), desc: t('Japan\'s food industry faces severe labour shortages — skilled workers are in high demand.', '日本の食品業界は深刻な人手不足。スキルのある人材が高く求められている。') },
    { icon: Factory, title: t('Industry Growth', '業界成長'), desc: t('Hospitality and food manufacturing sectors continue to expand year over year.', 'ホスピタリティと食品製造業は年々拡大している。') },
    { icon: Globe2, title: t('Bilingual Staff Demand', 'バイリンガル人材の需要'), desc: t('International hotels and chains actively seek bilingual food professionals.', 'インターナショナルホテルやチェーンがバイリンガルの食品専門家を求めている。') },
    { icon: TrendingUp, title: t('Career Progression', 'キャリアアップ'), desc: t('Clear pathways from entry-level to supervisory and management roles.', '入門から監督・管理職への明確なキャリアパス。') },
  ];

  const comparisonRows = [
    { label: t('Qualification', '資格'), c1: 'Level 4', c2: 'Level 5', c3: 'Level 5 + Food Tech' },
    { label: t('NZ Work Experience', 'NZ就労経験'), c1: t('None', 'なし'), c2: t('Optional', '任意'), c3: t('Retail + Production', '小売＋生産') },
    { label: t('English Fluency', '英語力'), c1: t('Moderate', '中級'), c2: t('High', '上級'), c3: t('Full Fluency', 'フル') },
    { label: t('Starting Salary', '開始年収'), c1: '¥2.2M–2.8M', c2: '¥2.8M–3.6M', c3: '¥3.4M–4.2M' },
    { label: t('Salary Ceiling', '年収上限'), c1: '¥3.5M–4.0M', c2: '¥5.0M–6.0M', c3: '¥7.0M–8.0M' },
    { label: t('Promotion Speed', '昇進スピード'), c1: t('Slow', '遅い'), c2: t('Moderate', '中程度'), c3: t('Fast', '速い') },
    { label: t('Employer Range', '雇用主の幅'), c1: t('Narrow', '狭い'), c2: t('Broad', '広い'), c3: t('Very Broad', '非常に広い') },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-fern-50 via-white to-sakura-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-fern-200 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-sakura-100 rounded-full blur-3xl" />
        </div>
        <div className="relative container-page py-20 sm:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-fern-200 text-fern-700 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              {t('Heads-Up Consulting Career Pathways', 'Heads-Up Consulting キャリアパス')}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-800 leading-tight">
              {t(
                'Build Your Future: Study Baking & Food Technology in New Zealand, Launch Your Career in Japan.',
                '未来を築こう：ニュージーランドで製パン・食品技術を学び、日本でキャリアを始める。'
              )}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-stone-600 max-w-2xl">
              {t(
                'International training + bilingual fluency + real work experience = career acceleration.',
                '国際的な研修＋バイリンガル能力＋実務経験＝キャリアの加速。'
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button onClick={() => navigate('level4')} className="btn-primary">
                {t('Explore Your Pathway', 'あなたのパスを探る')}
                <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={() => navigate('matrix')} className="btn-secondary">
                {t('Compare Pathways', 'パスを比較する')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="container-page py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">
            {t('Why New Zealand Is the Ideal Place to Study', 'ニュージーランドが留学先として理想的な理由')}
          </h2>
          <p className="section-subtitle mx-auto">
            {t(
              'New Zealand offers world-class baking and food technology education in a safe, English-speaking environment. Students gain internationally recognised qualifications and real work experience — then return to Japan with skills that set them apart from other candidates.',
              'ニュージーランドは安全な英語環境で世界クラスの製パン・食品技術教育を提供。国際的に認められた資格と実務経験を得て、他の候補者と差をつけて日本に帰国。'
            )}
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="container-page pb-16">
        <div className="card overflow-hidden">
          <div className="bg-gradient-to-r from-fern-600 to-fern-700 px-6 py-5">
            <h3 className="text-xl font-bold text-white">
              {t('1 Year vs 2 Years vs 3 Years — At a Glance', '1年 vs 2年 vs 3年 — 比較表')}
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-stone-500">
                    {t('Factor', '項目')}
                  </th>
                  <th className="text-center px-6 py-4 text-sm font-semibold text-stone-700">
                    {t('1 Year', '1年')}
                    <p className="text-xs text-stone-400 font-normal mt-0.5">Level 4</p>
                  </th>
                  <th className="text-center px-6 py-4 text-sm font-semibold text-fern-700 bg-fern-50/50">
                    {t('2 Years', '2年')}
                    <p className="text-xs text-fern-400 font-normal mt-0.5">Level 5</p>
                  </th>
                  <th className="text-center px-6 py-4 text-sm font-semibold text-sakura-700 bg-sakura-50/50">
                    {t('3 Years', '3年')}
                    <p className="text-xs text-sakura-400 font-normal mt-0.5">Level 5 + Food Tech</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="border-b border-stone-100 last:border-0">
                    <td className="px-6 py-4 text-sm font-medium text-stone-600">{row.label}</td>
                    <td className="px-6 py-4 text-sm text-center text-stone-500">{row.c1}</td>
                    <td className="px-6 py-4 text-sm text-center text-stone-700 bg-fern-50/30 font-medium">{row.c2}</td>
                    <td className="px-6 py-4 text-sm text-center text-sakura-800 bg-sakura-50/30 font-semibold">{row.c3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why NZ */}
      <section className="bg-fern-50/50 py-16">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="section-title">{t('Why New Zealand?', 'ニュージーランドの理由')}</h2>
            <p className="section-subtitle mx-auto">
              {t('Five reasons NZ is the perfect stepping stone to a Japanese food career', 'NZが日本の食品キャリアへの完璧な踏み台である5つの理由')}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyNZ.map((item, i) => (
              <div key={i} className="card p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-fern-100 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-fern-600" />
                </div>
                <h3 className="text-lg font-bold text-stone-800 mb-2">{item.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Japan */}
      <section className="bg-sakura-50/50 py-16">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="section-title">{t('Why Japan Needs You', '日本があなたを必要とする理由')}</h2>
            <p className="section-subtitle mx-auto">
              {t('Japan\'s food industry is growing — and it needs skilled, bilingual professionals', '日本の食品業界は成長中。スキルのあるバイリンガル人材を求めている。')}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyJapan.map((item, i) => (
              <div key={i} className="card p-6 flex gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-sakura-100 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-sakura-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-16">
        <div className="rounded-3xl bg-gradient-to-br from-fern-600 to-fern-800 p-10 sm:p-14 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-fern-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-sakura-400/20 rounded-full blur-3xl" />
          <div className="relative">
            <Building2 className="w-12 h-12 text-white/80 mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {t('Ready to Explore Your Career Pathway?', 'キャリアパスを探検する準備はできましたか？')}
            </h2>
            <p className="text-fern-50 text-lg max-w-2xl mx-auto mb-8">
              {t(
                'See exactly how each year of study in NZ translates into jobs, salaries, and career growth in Japan.',
                'NZでの各年の学習が日本での仕事、給与、キャリア成長にどうつながるかを確認しよう。'
              )}
            </p>
            <button onClick={() => navigate('level4')} className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-fern-700 font-bold hover:bg-stone-50 transition-all hover:shadow-xl hover:-translate-y-0.5">
              {t('Explore Your Pathway', 'あなたのパスを探る')}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
