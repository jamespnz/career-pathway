import { FlaskConical, ArrowRight, TrendingUp, Briefcase, Clock, Shield, Factory, Beaker } from 'lucide-react';
import { useLang } from '@/context/LanguageContext';
import { useRouter } from '@/context/RouterContext';
import SalaryChart from '@/components/SalaryChart';
import { salaryData } from '@/data/careerData';

export default function FoodTechPage() {
  const { t } = useLang();
  const { navigate } = useRouter();

  const skills = [
    t('HACCP food safety systems', 'HACCP食品安全システム'),
    t('Quality assurance (QA) procedures', '品質保証（QA）手順'),
    t('Production management and scheduling', '生産管理とスケジューリング'),
    t('R&D fundamentals — new product development', 'R&D基礎 — 新製品開発'),
    t('Food chemistry and microbiology', '食品化学と微生物学'),
    t('Regulatory compliance', '規制コンプライアンス'),
  ];

  const employerCategories = [
    { icon: Factory, label: t('Industrial bakeries (Yamazaki, Pasco, Fuji Baking)', '工業ベーカリー（山崎、Pasco、富士製パン）') },
    { icon: Briefcase, label: t('Convenience-store suppliers (7-Eleven, Lawson)', 'コンビニサプライヤー（セブン-イレブン、ローソン）') },
    { icon: Beaker, label: t('Food manufacturers (Meiji, Morinaga, Lotte)', '食品メーカー（明治、森永、ロッテ）') },
    { icon: Shield, label: t('QA departments', 'QA部門') },
    { icon: FlaskConical, label: t('R&D teams', 'R&Dチーム') },
  ];

  const row = salaryData[2];

  return (
    <div className="animate-fade-in">
      <section className="bg-gradient-to-br from-sakura-50 to-fern-50 py-16">
        <div className="container-page">
          <div className="flex items-center gap-2 text-sakura-600 text-sm font-medium mb-4">
            <span className="w-8 h-8 rounded-lg bg-sakura-600 text-white flex items-center justify-center">
              <FlaskConical className="w-4 h-4" />
            </span>
            {t('Manufacturing Quality & R&D', '製造品質とR&D')}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-800 max-w-3xl">
            {t('Food Technology Diploma — Manufacturing Quality & R&D', '食品技術ディプロマ — 製造品質とR&D')}
          </h1>
          <p className="mt-4 text-lg text-stone-600 max-w-2xl">
            {t(
              'The Food Technology Diploma is your key to Japan\'s massive food manufacturing sector. You will learn HACCP, quality assurance, production management, and R&D fundamentals — skills that Japan\'s industrial bakeries, convenience-store suppliers, and food manufacturers desperately need.',
              '食品技術ディプロマは日本の巨大な食品製造業界への鍵。HACCP、品質保証、生産管理、R&D基礎を学ぶ。日本の工業ベーカリー、コンビニサプライヤー、食品メーカーが切実に必要としているスキル。'
            )}
          </p>
        </div>
      </section>

      <div className="container-page py-16 space-y-16">
        <section>
          <h2 className="section-title mb-8">{t('Technical Skills You Will Gain', '習得する技術スキル')}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, i) => (
              <div key={i} className="card p-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-sakura-100 flex items-center justify-center shrink-0">
                  <FlaskConical className="w-5 h-5 text-sakura-600" />
                </div>
                <span className="text-sm font-medium text-stone-700">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-sakura-50 border border-sakura-100 p-8">
          <h3 className="text-xl font-bold text-stone-800 mb-3">
            {t('Why Japan\'s Food Manufacturing Sector Values These Skills', '日本の食品製造業界がこれらのスキルを重視する理由')}
          </h3>
          <p className="text-stone-600 leading-relaxed">
            {t(
              'Japan has one of the world\'s most demanding food safety standards. Companies like Yamazaki, Pasco, and Fuji Baking need staff who understand HACCP and QA systems. Convenience-store chains (7-Eleven, Lawson) require suppliers who can manage high-volume production with consistent quality. A Food Tech Diploma proves you have this knowledge — making you a rare and valuable candidate.',
              '日本は世界で最も厳しい食品安全基準の一つを持つ。山崎、Pasco、富士製パンなどの企業はHACCPとQAシステムを理解するスタッフを必要とする。コンビニチェーン（セブン-イレブン、ローソン）は一貫した品質で大量生産を管理できるサプライヤーを必要とする。食品技術ディプロマはこの知識があることを証明し、あなたを希少で価値ある候補とする。'
            )}
          </p>
        </section>

        <section>
          <h2 className="section-title mb-2">{t('Salary Progression', '給与の推移')}</h2>
          <p className="section-subtitle mb-8">
            {t('Adding Food Tech to Level 5 pushes your salary ceiling to ¥7.5M — nearly double Level 4 alone.', 'レベル5に食品技術を加えると、年収上限は750万円に達し、レベル4単体のほぼ2倍になる。')}
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="card p-6">
              <div className="flex items-center gap-2 text-stone-400 mb-2">
                <Briefcase className="w-4 h-4" />
                <span className="text-xs font-medium uppercase tracking-wide">{t('Starting Salary', '開始年収')}</span>
              </div>
              <p className="text-2xl font-bold text-stone-800">{row.starting}</p>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-2 text-stone-400 mb-2">
                <Clock className="w-4 h-4" />
                <span className="text-xs font-medium uppercase tracking-wide">{t('After 2–3 Years', '2〜3年後')}</span>
              </div>
              <p className="text-2xl font-bold text-stone-800">{row.after23}</p>
            </div>
            <div className="card p-6 border-2 border-sakura-200">
              <div className="flex items-center gap-2 text-stone-400 mb-2">
                <TrendingUp className="w-4 h-4" />
                <span className="text-xs font-medium uppercase tracking-wide">{t('Career Ceiling', 'キャリア上限')}</span>
              </div>
              <p className="text-2xl font-bold text-sakura-700">{row.ceiling}</p>
            </div>
          </div>
          <SalaryChart />
        </section>

        <section>
          <h2 className="section-title mb-8">{t('Employer Categories', '雇用主カテゴリ')}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {employerCategories.map((cat, i) => (
              <div key={i} className="card p-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-sakura-100 flex items-center justify-center shrink-0">
                  <cat.icon className="w-5 h-5 text-sakura-600" />
                </div>
                <span className="text-sm font-medium text-stone-700">{cat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-gradient-to-br from-sakura-600 to-sakura-800 p-10 sm:p-14 text-center">
          <TrendingUp className="w-12 h-12 text-white/80 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('Technical Skills = Higher Stability + Higher Salary', '技術スキル＝より高い安定性＋より高い給与')}
          </h2>
          <p className="text-sakura-50 text-lg max-w-2xl mx-auto mb-8">
            {t(
              'Food Tech skills make you indispensable. While patisserie skills are valued in hotels and cafés, QA and R&D skills are needed across Japan\'s entire food manufacturing industry — giving you job security and a much higher salary ceiling.',
              '食品技術スキルはあなたを不可欠にする。製菓スキルはホテルやカフェで評価されるが、QAとR&Dスキルは日本の食品製造業全体で必要とされる。仕事の安定性とはるかに高い年収上限をもたらす。'
            )}
          </p>
          <button onClick={() => navigate('nzwork')} className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-sakura-700 font-bold hover:bg-stone-50 transition-all hover:shadow-xl hover:-translate-y-0.5">
            {t('See How NZ Work Experience Helps', 'NZ就労経験がどう役立つかを見る')}
            <ArrowRight className="w-5 h-5" />
          </button>
        </section>
      </div>
    </div>
  );
}
