import { Croissant, ArrowRight, TrendingUp, Briefcase, Clock, Sparkles } from 'lucide-react';
import { useLang } from '@/context/LanguageContext';
import { useRouter } from '@/context/RouterContext';
import SalaryChart from '@/components/SalaryChart';
import { salaryData } from '@/data/careerData';

export default function Level4Page() {
  const { t } = useLang();
  const { navigate } = useRouter();

  const skills = [
    t('Bread baking fundamentals', 'パン焼きの基礎'),
    t('Pastry and pie doughs', 'パイ・ペースリー生地'),
    t('Basic desserts and custards', '基本デザートとカスタード'),
    t('Cake decoration basics', 'ケーキ装飾の基礎'),
    t('Food safety and hygiene', '食品安全と衛生'),
    t('Kitchen operations', 'キッチン運営'),
  ];

  const roles = [
    t('Small bakery assistant', '小規模ベーカリー助手'),
    t('Café pastry staff', 'カフェ製菓スタッフ'),
    t('Junior hotel kitchen hand', 'ジュニアホテルキッチンスタッフ'),
    t('Convenience store dessert production', 'コンビニデザート生産'),
  ];

  const row = salaryData[0];

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="bg-gradient-to-br from-stone-100 to-fern-50 py-16">
        <div className="container-page">
          <div className="flex items-center gap-2 text-fern-600 text-sm font-medium mb-4">
            <span className="w-8 h-8 rounded-lg bg-fern-600 text-white flex items-center justify-center font-bold">4</span>
            {t('Foundation Year', '基礎年度')}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-800 max-w-3xl">
            {t('Level 4 Baking — Foundation Year', 'レベル4 製パン — 基礎年度')}
          </h1>
          <p className="mt-4 text-lg text-stone-600 max-w-2xl">
            {t(
              'Level 4 is your first step into the professional baking world. You will learn the essential skills that every baker needs — breads, pastries, and basic desserts — while building English fluency and cultural confidence in New Zealand.',
              'レベル4はプロの製パン世界への第一歩。パン、ペースリー、基本デザートの必須スキルを学びながら、NZで英語力と文化的自信を築く。'
            )}
          </p>
        </div>
      </section>

      <div className="container-page py-16 space-y-16">
        {/* Skills */}
        <section>
          <h2 className="section-title mb-8">{t('What You Will Learn', '学ぶ内容')}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, i) => (
              <div key={i} className="card p-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-fern-100 flex items-center justify-center shrink-0">
                  <Croissant className="w-5 h-5 text-fern-600" />
                </div>
                <span className="text-sm font-medium text-stone-700">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Salary */}
        <section>
          <h2 className="section-title mb-2">{t('Salary Expectations in Japan', '日本での給与期待')}</h2>
          <p className="section-subtitle mb-8">
            {t('Level 4 graduates can expect entry-level salaries. Growth is possible but limited without further study.', 'レベル4卒業生は入門レベルの給与を期待できる。成長は可能だが、さらなる学習なしでは限界がある。')}
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
            <div className="card p-6 border-2 border-stone-200">
              <div className="flex items-center gap-2 text-stone-400 mb-2">
                <TrendingUp className="w-4 h-4" />
                <span className="text-xs font-medium uppercase tracking-wide">{t('Career Ceiling', 'キャリア上限')}</span>
              </div>
              <p className="text-2xl font-bold text-stone-800">{row.ceiling}</p>
            </div>
          </div>
          <SalaryChart />
        </section>

        {/* Entry roles */}
        <section>
          <h2 className="section-title mb-8">{t('Typical Entry-Level Roles in Japan', '日本での典型的な入門職')}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {roles.map((role, i) => (
              <div key={i} className="card p-5 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-fern-500" />
                <span className="text-sm font-medium text-stone-700">{role}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Foundation graphic */}
        <section className="rounded-3xl bg-gradient-to-br from-fern-50 to-stone-50 p-10 border border-fern-100">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-fern-600 flex items-center justify-center mb-3 mx-auto">
                <Croissant className="w-10 h-10 text-white" />
              </div>
              <p className="font-bold text-stone-800">{t('Level 4', 'レベル4')}</p>
              <p className="text-sm text-stone-500">{t('Foundation', '基礎')}</p>
            </div>
            <ArrowRight className="w-8 h-8 text-stone-300 hidden sm:block" />
            <div className="text-center opacity-50">
              <div className="w-20 h-20 rounded-2xl bg-stone-200 flex items-center justify-center mb-3 mx-auto">
                <Sparkles className="w-10 h-10 text-stone-400" />
              </div>
              <p className="font-bold text-stone-400">{t('Level 5', 'レベル5')}</p>
              <p className="text-sm text-stone-400">{t('Next Step', '次のステップ')}</p>
            </div>
          </div>
        </section>

        {/* Motivational */}
        <section className="rounded-3xl bg-stone-800 p-10 sm:p-14 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('Why Level 4 Is Only the Beginning', 'レベル4は始まりにすぎない')}
          </h2>
          <p className="text-stone-300 text-lg max-w-2xl mx-auto mb-8">
            {t(
              'Level 4 gives you the foundation — but the real career acceleration comes when you continue to Level 5 and beyond. Each additional year of study in NZ multiplies your earning potential and employer options in Japan.',
              'レベル4は基礎を与える。しかし本当のキャリア加速はレベル5以降に続くときに来る。NZでの各追加年の学習は、日本での収入可能性と雇用主の選択肢を倍増させる。'
            )}
          </p>
          <button onClick={() => navigate('level5')} className="btn-primary">
            {t('See Level 5 Patisserie', 'レベル5を見る')}
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>
      </div>
    </div>
  );
}
