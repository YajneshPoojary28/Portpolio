function MiniBar({ h, delay }) {
  return (
    <div className="flex-1 bg-border rounded-t overflow-hidden flex items-end h-16">
      <div
        className="w-full bg-gradient-to-t from-primary/70 to-secondary/70 rounded-t"
        style={{ height: `${h}%`, transition: `height 0.6s ease ${delay}s` }}
      />
    </div>
  )
}

export function CaseManagementPreview() {
  return (
    <div className="rounded-xl border border-border bg-surface/70 p-4 font-mono text-[11px] sm:text-xs">
      <p className="text-primary tracking-wide mb-3">CYBER CRIME COMMAND CENTER</p>
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="rounded-lg bg-card/80 border border-border p-2.5">
          <p className="text-muted text-[10px]">Active cases</p>
          <p className="text-text text-base font-semibold mt-1">128</p>
        </div>
        <div className="rounded-lg bg-card/80 border border-border p-2.5">
          <p className="text-muted text-[10px]">Under investigation</p>
          <p className="text-text text-base font-semibold mt-1">42</p>
        </div>
        <div className="rounded-lg bg-card/80 border border-border p-2.5">
          <p className="text-muted text-[10px]">Resolved cases</p>
          <p className="text-text text-base font-semibold mt-1">76</p>
        </div>
      </div>
      <div className="rounded-lg border border-primary/25 bg-primary/5 p-3">
        <div className="flex justify-between text-[10px] text-muted mb-1.5">
          <span>CASE #CC-2026-0182</span>
          <span className="text-primary">UNDER INVESTIGATION</span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-[10px] text-muted">
          <span>Evidence: <span className="text-text">24</span></span>
          <span>Officer: <span className="text-text">Investigator</span></span>
          <span>Updated: <span className="text-text">Today</span></span>
        </div>
      </div>
    </div>
  )
}

export function AnalyticsPreview() {
  return (
    <div className="rounded-xl border border-border bg-surface/70 p-4 font-mono text-[11px] sm:text-xs">
      <div className="grid grid-cols-4 gap-2 mb-4">
        {[
          ['Revenue', '₹12.8M'],
          ['Sales', '24,582'],
          ['Top product', 'Product A'],
          ['Growth', '+18.6%'],
        ].map(([label, val]) => (
          <div key={label} className="rounded-lg bg-card/80 border border-border p-2">
            <p className="text-muted text-[9.5px]">{label}</p>
            <p className="text-text text-sm font-semibold mt-1">{val}</p>
          </div>
        ))}
      </div>
      <div className="flex items-end gap-1.5 h-16 mb-3">
        {[40, 65, 50, 80, 60, 90, 70].map((h, i) => (
          <MiniBar key={i} h={h} delay={i * 0.05} />
        ))}
      </div>
      <p className="text-[10px] text-muted">Sample preview data — not actual figures</p>
    </div>
  )
}

export function GenericPreview({ label }) {
  return (
    <div className="rounded-xl border border-border bg-surface/70 p-4 font-mono text-[11px] sm:text-xs h-full flex flex-col justify-center items-center min-h-[140px] gap-2">
      <div className="w-10 h-10 rounded-lg border border-primary/30 flex items-center justify-center text-primary">
        &lt;/&gt;
      </div>
      <p className="text-muted text-center">{label}</p>
    </div>
  )
}
