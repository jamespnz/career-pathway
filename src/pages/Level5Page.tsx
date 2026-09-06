import { Cake, ArrowRight, TrendingUp, Briefcase, Clock, Sparkles, Users } from 'lucide-react';
import { useLang } from '@/context/LanguageContext';
import { useRouter } from '@/context/RouterContext';
import SalaryChart from '@/components/SalaryChart';
import { salaryData } from '@/data/careerData';

export default function Level5Page() {
  const { t } = useLang();
  const { navigate } = useRouter();

  const skills = [
    t('Entremets and layered desserts', 'アントルメと層デザート'),
    t('Glazing and finishing techniques', 'グラッサージュと仕上げ技術'),
    t('Chocolate work and tempering', 'チョコレートワークとテンパリング'),
    t('Artisan breads and sourdough', '職人パンとサワードウ'),
    t('Sugar and pastillage decoration', '砂糖細工とパスティヤージュ装飾'),
    t('Supervisory and team leadership', '監督とチームリーダーシップ'),
  ];

  const employerCategories = [
    t('Luxury hotels (Park Hyatt, Ritz-Carlton, Hilton)', '高級ホテル（パークハイアット、リッツカールトン、ヒルトン）'),
    t('Department store patisseries (Isetan, Takashimaya)', '百貨店製菓（伊勢丹、高島屋）'),
    t('French bakery chains (Maison Kayser, PAUL)', 'フレンチベーカリーチェーン（メゾンカイザー、PAUL）'),
    t('Theme parks (Disney, USJ, Pokémon Café)', 'テーマパーク（ディズニー、USJ、ポケモンカフェ）'),
    t('Artisan bakeries (Levain, Burdigala)', '職人ベーカリー（ルヴァン、ブルディガラ）'),
  ];

  const doorsTo = [
    t('Senior patissier roles', 'シニアパティシエール職'),
    t('Shift leader / team supervisor', 'シフトリーダー／チーム監督'),
    t('Luxury hotel pastry sections', '高級ホテル製菓部門'),
    t('Boutique patisserie ownership potential', 'ブティック製菓店オーナー可能性'),
  ];

  const row = salaryData[1];

  return (
    <div className="animate-fade-in">
      <section className="bg-gradient-to-br from-fern-50 to-sakura-50 py-16">
        <div className="container-page">
          <div className="flex items-center gap-2 text-fern-600 text-sm font-medium mb-4">
            <span className="w-8 h-8 rounded-lg bg-fern-700 text-white flex items-center justify-center font-bold">5</span>
            {t('Advanced Skills & Supervisory Training', '高度スキルと監督研修')}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-800 max-w-3xl">
            {t('Level 5 Patisserie — Advanced Skills', 'レベル5 製菓 — 高度スキル')}
          </h1>
          <p className="mt-4 text-lg text-stone-600 max-w-2xl">
            {t(
              'Level 5 takes you from baker to patissier. You will master entremets, chocolate, artisan breads, and supervisory skills — making you internationally competitive and opening doors to luxury hotels, department stores, and theme parks.',
              'レベル5はベーカーからパティシエールへ。アントルメ、チョコレート、職人パン、監督スキルを習得し、国際的に競争力を持ち、高級ホテル、百貨店、テーマパークへの扉を開く。'
            )}
          </p>
        </div>
      </section>

      <div className="container-page py-16 space-y-16">
        <section>
          <h2 className="section-title mb-8">{t('Advanced Skills You Will Master', '習得する高度スキル')}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, i) => (
              <div key={i} className="card p-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-fern-100 flex items-center justify-center shrink-0">
                  <Cake className="w-5 h-5 text-fern-600" />
                </div>
                <span className="text-sm font-medium text-stone-700">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-fern-50 border border-fern-100 p-8">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-fern-600 flex items-center justify-center shrink-0">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-stone-800 mb-2">{t('Supervisory Training', '監督研修')}</h3>
              <p className="text-stone-600 leading-relaxed">
                {t(
                  'Level 5 includes supervisory training — you learn to lead a team, manage production schedules, and ensure quality standards. This is exactly what Japanese employers look for when promoting staff to shift leaders and section heads.',
                  'レベル5には監督研修が含まれる。チームのリード、生産スケジュールの管理、品質基準の確保を学ぶ。日本の雇用主がスタッフをシフトリーダーや部門長に昇進させる際にまさに求めているもの。'
                )}
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="section-title mb-2">{t('Salary Progression', '給与の推移')}</h2>
          <p className="section-subtitle mb-8">
            {t('Level 5 graduates earn significantly more than Level 4 — and the ceiling is much higher.', 'レベル5卒業生はレベル4より大幅に高い給与を得る。上限もはるかに高い。')}
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
            <div className="card p-6 border-2 border-fern-200">
              <div className="flex items-center gap-2 text-stone-400 mb-2">
                <TrendingUp className="w-4 h-4" />
                <span className="text-xs font-medium uppercase tracking-wide">{t('Career Ceiling', 'キャリア上限')}</span>
              </div>
              <p className="text-2xl font-bold text-fern-700">{row.ceiling}</p>
            </div>
          </div>
          <SalaryChart />
        </section>

        <section>
          <h2 className="section-title mb-8">{t('Employer Categories That Hire Level 5 Graduates', 'レベル5卒業生を雇用する雇用主カテゴリ')}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {employerCategories.map((cat, i) => (
              <div key={i} className="card p-5 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-sakura-500" />
                <span className="text-sm font-medium text-stone-700">{cat}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-gradient-to-br from-fern-50 to-white p-10 border border-fern-100">
          <h2 className="text-2xl font-bold text-stone-800 mb-6 text-center">
            {t('Level 5 Opens Doors To…', 'レベル5が開く扉…')}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {doorsTo.map((door, i) => (
              <div key={i} className="card p-5 text-center">
                <div className="w-12 h-12 rounded-xl bg-fern-100 flex items-center justify-center mb-3 mx-auto">
                  <Sparkles className="w-6 h-6 text-fern-600" />
                </div>
                <p className="text-sm font-medium text-stone-700">{door}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-gradient-to-br from-fern-600 to-fern-800 p-10 sm:p-14 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('Your Skills Become Internationally Competitive', 'あなたのスキルは国際的に競争力を持つ')}
          </h2>
          <p className="text-fern-50 text-lg max-w-2xl mx-auto mb-8">
            {t(
              'With Level 5, you are not just a baker — you are a trained patissier with supervisory capability. Japanese luxury hotels and French chains will see you as an ideal candidate, especially with NZ work experience.',
              'レベル5があれば、あなたはベーカーではなく監督能力を持つ訓練されたパティシエール。日本の高級ホテルやフレンチチェーンは、特にNZ就労経験があれば理想的な候補と見なす。'
            )}
          </p>
          <button onClick={() => navigate('foodtech')} className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-fern-700 font-bold hover:bg-stone-50 transition-all hover:shadow-xl hover:-translate-y-0.5">
            {t('Explore Food Technology Diploma', '食品技術ディプロマを見る')}
            <ArrowRight className="w-5 h-5" />
          </button>
        </section>
      </div>
    </div>
  );
}
