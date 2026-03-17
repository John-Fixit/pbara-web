import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FiUsers, FiCalendar, FiAward } from "react-icons/fi";

const stats = [
  { icon: HiOutlineBuildingOffice2, value: "120+", label: "Active Chapters" },
  { icon: FiUsers, value: "5,000+", label: "Total Ambassadors" },
  { icon: FiCalendar, value: "50+", label: "Years of Impact" },
  { icon: FiAward, value: "15+", label: "Awards Won" },
];

export function StatsBar() {
  return (
    <section className="bg-background py-12" aria-labelledby="stats-heading">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <span className="inline-flex items-center justify-center text-gold mb-2" aria-hidden>
                <Icon size={28} />
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
