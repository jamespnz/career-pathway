import { FileText, Languages } from 'lucide-react';
import { useLang } from '@/context/LanguageContext';

export default function ExecutiveSummaryPage() {
  const { t, lang, setLang } = useLang();

  const enSummary = [
    {
      heading: 'Overview',
      body: 'This report analyses how 1, 2, and 3 years of study in New Zealand shape career options in Japan for a baking and food technology student. The findings show a clear pattern: each additional year of study and work experience in NZ significantly increases salary potential, employer range, and career progression speed in Japan.',
    },
    {
      heading: 'Key Findings',
      body: 'Level 4 (1 year) provides foundational baking skills and entry-level access to small bakeries and cafés. The salary ceiling is ¥3.5M–4.0M with slow promotion. Level 5 (2 years) adds advanced patisserie skills and supervisory training, opening doors to luxury hotels, French chains, and theme parks. The salary ceiling rises to ¥5.0M–6.0M. The 3-year pathway (Level 5 + Food Tech Diploma + NZ work experience) is the strongest option — it unlocks manufacturing, QA, and R&D careers, pushes the salary ceiling to ¥7.0M–8.0M, and makes management roles achievable in 4–6 years.',
    },
    {
      heading: 'Why New Zealand',
      body: 'NZ offers English immersion, Western patisserie techniques, a safe learning environment, real part-time work opportunities, and NZQA-registered qualifications recognised by Japanese employers. Three years of NZ study and work produces a candidate with full English fluency, hands-on production experience, and internationally competitive patisserie skills.',
    },
    {
      heading: 'Why Japan Needs These Skills',
      body: 'Japan faces severe labour shortages in hospitality and food manufacturing. Bilingual staff are in high demand at international hotels, theme parks, and food manufacturers. The food manufacturing sector — industrial bakeries, convenience-store suppliers, and major confectionery companies — needs workers with HACCP, QA, and R&D knowledge. A graduate with Level 5 + Food Tech + NZ experience is a rare and highly competitive candidate.',
    },
    {
      heading: 'Recommendation',
      body: 'The 3-year pathway is strongly recommended. It provides the highest salary ceiling (¥7.0M–8.0M), the broadest employer range, the fastest promotion speed, and the highest lifetime earnings impact. The investment in two additional years of study pays for itself many times over through higher salaries and faster career progression in Japan.',
    },
  ];

  const jpSummary = [
    {
      heading: '概要',
      body: '本報告書は、ニュージーランドでの1年、2年、3年の留学が、製パン・食品技術学生の日本でのキャリア選択肢にどう影響するかを分析する。調査結果は明確なパターンを示している：NZでの各追加年の学習と就労経験は、日本での給与可能性、雇用主の範囲、キャリア進歩速度を大幅に向上させる。',
    },
    {
      heading: '主な調査結果',
      body: 'レベル4（1年）は基礎的な製パンスキルと小規模ベーカリーやカフェへの入門アクセスを提供する。年収上限は350〜400万円で昇進は遅い。レベル5（2年）は高度な製菓スキルと監督研修を追加し、高級ホテル、フレンチチェーン、テーマパークへの扉を開く。年収上限は500〜600万円に上昇。3年パス（レベル5 ＋ 食品技術ディプロマ ＋ NZ就労経験）は最強の選択肢 — 製造、QA、R&Dキャリアを開放し、年収上限を700〜800万円に押し上げ、管理職を4〜6年で達成可能にする。',
    },
    {
      heading: 'ニュージーランドの理由',
      body: 'NZは英語の没入環境、西洋製菓技術、安全な学習環境、実際のアルバイト機会、日本の雇用主に認められたNZQA登録資格を提供。3年のNZ学習と就労は、フル英語力、実務生産経験、国際的に競争力のある製菓スキルを持つ候補者を生み出す。',
    },
    {
      heading: '日本がこれらのスキルを必要とする理由',
      body: '日本はホスピタリティと食品製造で深刻な人手不足に直面している。バイリンガル人材はインターナショナルホテル、テーマパーク、食品メーカーで高く求められている。食品製造業界 — 工業ベーカリー、コンビニサプライヤー、大手製菓会社 — はHACCP、QA、R&Dの知識を持つ人材を必要としている。レベル5 ＋ 食品技術 ＋ NZ経験を持つ卒業生は希少で非常に競争力のある候補者である。',
    },
    {
      heading: '推奨',
      body: '3年パスを強く推奨する。最高の年収上限（700〜800万円）、最も広い雇用主範囲、最速の昇進速度、最高の生涯所得インパクトを提供する。2年の追加学習への投資は、日本でのより高い給与とより速いキャリア進歩を通じて何倍もの価値をもたらす。',
    },
  ];

  const summary = lang === 'en' ? enSummary : jpSummary;

  return (
    <div className="animate-fade-in">
      <section className="bg-gradient-to-br from-stone-100 to-fern-50 py-16">
        <div className="container-page">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-fern-600 flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-800">
              {t('Executive Summary', 'エグゼクティブサマリー')}
            </h1>
          </div>
          <p className="text-lg text-stone-600 max-w-2xl">
            {t(
              'A concise summary of the full career pathways analysis. Available in both English and Japanese.',
              '完全なキャリアパス分析の簡潔な要約。英語と日本語の両方で利用可能。'
            )}
          </p>
          {/* Language toggle */}
          <div className="mt-6 inline-flex items-center gap-1 p-1 rounded-full bg-white border border-stone-200">
            <button
              onClick={() => setLang('en')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                lang === 'en' ? 'bg-fern-600 text-white' : 'text-stone-500 hover:text-stone-700'
              }`}
            >
              <Languages className="w-4 h-4" />
              English
            </button>
            <button
              onClick={() => setLang('jp')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                lang === 'jp' ? 'bg-fern-600 text-white' : 'text-stone-500 hover:text-stone-700'
              }`}
            >
              <Languages className="w-4 h-4" />
              日本語
            </button>
          </div>
        </div>
      </section>

      <div className="container-page py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          {summary.map((section, i) => (
            <div key={i} className="card p-8">
              <h2 className="text-xl font-bold text-fern-700 mb-3">{section.heading}</h2>
              <p className={`text-stone-600 leading-relaxed ${lang === 'jp' ? 'font-jp' : ''}`}>
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
