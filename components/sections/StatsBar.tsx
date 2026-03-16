/**
 * 4 stat items with icons, numbers, labels — Active Chapters, Total Ambassadors, Years of Impact, Awards Won
 */
const stats = [
  { icon: "🏛", value: "120+", label: "Active Chapters" },
  { icon: "👥", value: "5,000+", label: "Enrollment" },
  { icon: "📅", value: "50+", label: "Years of Impact" },
  { icon: "🏆", value: "15+", label: "Awards Won" },
];

export function StatsBar() {
  return (
    <section className="bg-light-bg py-12" aria-labelledby="stats-heading">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ icon, value, label }) => (
            <div key={label} className="text-center">
              <span className="text-2xl md:text-3xl text-gold block mb-2" aria-hidden>
                {icon}
              </span>
              <p className="font-heading text-3xl md:text-4xl font-bold text-text-dark">{value}</p>
              <p className="text-sm uppercase tracking-wider text-text-muted mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
