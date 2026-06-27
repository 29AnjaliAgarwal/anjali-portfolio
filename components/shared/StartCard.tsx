type StatCardProps = {
  value: string;
  label: string;
};

export default function StatCard({
  value,
  label,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-3xl font-bold text-slate-900">
        {value}
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        {label}
      </p>
    </div>
  );
}
