import { salaryChartBars } from '@/data/careerData';
import { useLang } from '@/context/LanguageContext';

export default function SalaryChart() {
  const { t } = useLang();
  const maxVal = 8.5;

  return (
    <div className="card p-6 sm:p-8">
      <h3 className="text-xl font-bold text-stone-800 mb-1">
        {t('Salary Ceiling Progression (JPY Millions)', '年収上限の推移（百万円）')}
      </h3>
      <p className="text-sm text-stone-500 mb-6">
        {t(
          'How salary ceilings grow with each additional year of study and experience',
          '留学年数と経験が増すごとに年収上限がどう伸びるか'
        )}
      </p>
      <div className="space-y-5">
        {salaryChartBars.map((bar, i) => (
          <div key={bar.label} className="group">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm font-medium text-stone-700">{bar.label}</span>
              <span className="text-sm font-bold text-stone-800">
                ¥{bar.start}M – ¥{bar.ceiling}M
              </span>
            </div>
            <div className="relative h-8 bg-stone-100 rounded-lg overflow-hidden">
              <div
                className={`absolute top-0 left-0 h-full ${bar.color} rounded-lg transition-all duration-1000 ease-out`}
                style={{
                  width: `${(bar.ceiling / maxVal) * 100}%`,
                  animationDelay: `${i * 150}ms`,
                }}
              />
              <div
                className="absolute top-0 h-full bg-stone-300/50 rounded-lg"
                style={{ left: 0, width: `${(bar.start / maxVal) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-6 mt-6 pt-4 border-t border-stone-100">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-stone-300" />
          <span className="text-xs text-stone-500">{t('Starting salary', '開始年収')}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-fern-500" />
          <span className="text-xs text-stone-500">{t('Salary ceiling', '年収上限')}</span>
        </div>
      </div>
    </div>
  );
}
