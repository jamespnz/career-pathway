const styles: Record<string, string> = {
  High: 'bg-fern-100 text-fern-700 border-fern-200',
  'Medium–High': 'bg-fern-50 text-fern-600 border-fern-100',
  Medium: 'bg-amber-50 text-amber-700 border-amber-200',
  'Low–Medium': 'bg-orange-50 text-orange-600 border-orange-200',
  Low: 'bg-stone-100 text-stone-500 border-stone-200',
};

export default function ImpactBadge({ level }: { level: string }) {
  const cls = styles[level] || styles['Medium'];
  return (
    <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold border ${cls}`}>
      {level}
    </span>
  );
}
