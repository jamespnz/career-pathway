import { CheckCircle2, XCircle, Star, Users, ArrowRight } from 'lucide-react';
import { useLang } from '@/context/LanguageContext';
import { useRouter } from '@/context/RouterContext';
import { decisionMatrix } from '@/data/careerData';

export default function DecisionMatrixPage() {
  const { t } = useLang();
  const { navigate } = useRouter();

  const recommendedPoints = [
    t('Full English fluency from 3 years of immersion', '3年の没入環境からのフル英語力'),
    t('Real NZ work experience in both retail and production', '小売と生産の両方での実際のNZ就労経験'),
    t('Food Tech Diploma unlocks manufacturing, QA, and R&D careers', '食品技術ディプロマが製造、QA、R&Dキャリアを開く'),
    t('Salary ceiling nearly doubles compared to Level 4 only', 'レベル4単体と比較して年収上限がほぼ2倍'),
    t('Management roles achievable in 4–6 years instead of 6–8', '管理職が6〜8年ではなく4〜6年で達成可能'),
    t('Very broad employer range — hotels, patisseries, manufacturing', '非常に広い雇用主範囲 — ホテル、製菓、製造'),
  ];

  const talkPoints = [
    t('Share the salary comparison — show how each year of study increases earning potential.', '給与比較を共有 — 各年の学習が収入可能性をどう高めるかを示す。'),
    t('Explain that NZ is one of the safest countries for international students.', 'NZが留学生にとって最も安全な国の一つであることを説明する。'),
    t('Show the employer map — demonstrate the wide range of Japanese companies that value these qualifications.', '雇用主マップを見せる — これらの資格を評価する日本企業の幅広い範囲を示す。'),
    t('Discuss the bilingual advantage — Japanese employers actively seek bilingual food professionals.', 'バイリンガルの利点を話し合う — 日本の雇用主はバイリンガルの食品専門家を積極的に求めている。'),
    t('Compare the 3-year pathway to the 1-year pathway — show how much more career flexibility it provides.', '3年パスと1年パスを比較 — どれほど多くのキャリア柔軟性を提供するかを示す。'),
  ];

  return (
    <div className="animate-fade-in">
      <section className="bg-gradient-to-br from-fern-50 to-stone-50 py-16">
        <div className="container-page">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-800 max-w-3xl">
            {t('Decision Matrix — Choose Your Path', '決定マトリクス — パスを選ぶ')}
          </h1>
          <p className="mt-4 text-lg text-stone-600 max-w-2xl">
            {t(
              'Compare all three pathways side by side. See exactly what each year of study gives you — and why the 3-year pathway is the strongest choice.',
              '3つのパスを並べて比較。各年の学習が何をもたらすか — そしてなぜ3年パスが最強の選択なのかを正確に見る。'
            )}
          </p>
        </div>
      </section>

      <div className="container-page py-16 space-y-12">
        {/* Full Decision Matrix */}
        <section>
          <div className="card overflow-hidden">
            <div className="bg-gradient-to-r from-fern-600 to-fern-700 px-6 py-5">
              <h3 className="text-xl font-bold text-white">{t('Full Comparison Matrix', '完全比較マトリクス')}</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-stone-50 border-b border-stone-200">
                    <th className="text-left px-6 py-4 text-sm font-semibold text-stone-500">{t('Pathway Factor', 'パス要因')}</th>
                    <th className="text-center px-4 py-4 text-sm font-semibold text-stone-600">
                      {t('1 Year', '1年')}
                      <p className="text-xs text-stone-400 font-normal">Level 4 Only</p>
                    </th>
                    <th className="text-center px-4 py-4 text-sm font-semibold text-fern-700 bg-fern-50/50">
                      {t('2 Years', '2年')}
                      <p className="text-xs text-fern-400 font-normal">Level 5 Only</p>
                    </th>
                    <th className="text-center px-4 py-4 text-sm font-semibold text-sakura-700 bg-sakura-50/50">
                      {t('3 Years + Work', '3年＋就労')}
                      <p className="text-xs text-sakura-400 font-normal">L5 + Food Tech</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {decisionMatrix.map((row, i) => (
                    <tr key={i} className="border-b border-stone-100 last:border-0">
                      <td className="px-6 py-3.5 text-sm font-medium text-stone-600">{row.label}</td>
                      <td className="px-4 py-3.5 text-sm text-center text-stone-500">{row.oneYear}</td>
                      <td className="px-4 py-3.5 text-sm text-center text-stone-700 bg-fern-50/20 font-medium">{row.twoYear}</td>
                      <td className="px-4 py-3.5 text-sm text-center text-sakura-800 bg-sakura-50/20 font-semibold">{row.threeYear}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Recommended Pathway */}
        <section className="rounded-3xl bg-gradient-to-br from-sakura-600 to-sakura-800 p-10 sm:p-14">
          <div className="flex items-center gap-3 mb-6">
            <Star className="w-8 h-8 text-white" />
            <h2 className="text-3xl font-bold text-white">{t('Recommended Pathway: 3 Years', '推奨パス：3年')}</h2>
          </div>
          <p className="text-sakura-50 text-lg mb-8 max-w-2xl">
            {t(
              'The 3-year pathway — Level 5 Patisserie + Food Tech Diploma + NZ work experience — is by far the strongest choice. Here is why:',
              '3年パス — レベル5製菓 ＋ 食品技術ディプロマ ＋ NZ就労経験 — は圧倒的に最強の選択。理由は以下の通り：'
            )}
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {recommendedPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-3 bg-white/10 rounded-xl p-4">
                <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <span className="text-sm text-white font-medium">{point}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Talk to Your Family */}
        <section className="card p-8 sm:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-fern-100 flex items-center justify-center">
              <Users className="w-6 h-6 text-fern-600" />
            </div>
            <h2 className="text-2xl font-bold text-stone-800">{t('Talk to Your Family', '家族と話し合う')}</h2>
          </div>
          <p className="text-stone-500 mb-6">
            {t(
              'Making a decision about studying abroad is a family conversation. Here are some talking points to help you discuss the 3-year pathway with your parents:',
              '留学の決定は家族での会話。3年パスについて両親と話し合うためのいくつかのポイント：'
            )}
          </p>
          <div className="space-y-3">
            {talkPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-stone-50">
                <span className="w-6 h-6 rounded-full bg-fern-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <span className="text-sm text-stone-600">{point}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <button onClick={() => navigate('summary')} className="btn-primary">
            {t('Read the Executive Summary', 'エグゼクティブサマリーを読む')}
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>
      </div>
    </div>
  );
}
