import { CheckCircle2, Info, TrendingUp, Zap, Bell, Radio, Users, Globe, Shield, Cpu, RefreshCcw, Gauge } from "lucide-react"
import { motion } from "framer-motion"

// ─── Brand tokens (mirrors tailwind.config brand palette) ────────────────────
const B = {
  blue:     "#007AFF",
  yellow:   "#FFB800",
  indigo:   "#5856D6",
  darkGray: "#1C1C1E",
  pass:     "#007AFF",   // brand-blue for "meets target"
  info:     "#FFB800",   // brand-yellow for "informational"
  fail:     "#FF3B30",
}

// ─── Shared data ─────────────────────────────────────────────────────────────

const metrics = [
  {
    name: "Cold-start time",
    icon: Zap,
    target: "< 3 s",
    targetValue: 3,
    observed: 1.37,
    unit: "s",
    maxValue: 3,
    notes: "Icon tap → dashboard fully rendered.",
    type: "target",
  },
  {
    name: "End-to-end ride request latency",
    icon: TrendingUp,
    target: "< 5 s",
    targetValue: 5,
    observed: 0.90,
    unit: "s",
    maxValue: 5,
    notes: "Commuter tap → driver push notification received.",
    type: "target",
  },
  {
    name: "Push notification success rate",
    icon: CheckCircle2,
    target: "> 95 %",
    targetValue: 95,
    observed: 98,
    unit: "%",
    maxValue: 100,
    notes: "Across all test notifications sent during testing.",
    type: "target",
  },
  {
    name: "Push notification end-to-end latency",
    icon: Bell,
    target: "—",
    observed: 2.83,
    unit: "s",
    maxValue: 5,
    notes: "Firestore write → APNs delivery at client.",
    type: "informational",
  },
  {
    name: "Firestore real-time listener latency",
    icon: Radio,
    target: "—",
    observed: 2.80,
    unit: "s",
    maxValue: 5,
    notes: "Server commit → client snapshot callback.",
    type: "informational",
  },
]

const meetsTarget = (m) => {
  if (m.type !== "target") return false
  return m.unit === "%" ? m.observed >= m.targetValue : m.observed <= m.targetValue
}

const statusColor = (m) =>
  m.type === "informational" ? B.info : meetsTarget(m) ? B.pass : B.fail

const passCount  = metrics.filter(meetsTarget).length
const targetCount = metrics.filter(m => m.type === "target").length
const infoCount  = metrics.filter(m => m.type === "informational").length

// ─── PerformanceMetricsVisualized ────────────────────────────────────────────

export function PerformanceMetricsVisualized() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="max-w-2xl mb-12">
          <span className="badge mb-4">NFR Results</span>
          <h2 className="section-title mb-4">Metric breakdown</h2>
          <p className="section-subtitle">
            Each card shows the observed value against its target threshold.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-6 mb-10">
          {[
            { color: B.pass,  label: "Meets target" },
            { color: B.info,  label: "Informational" },
            { color: B.fail,  label: "Below target" },
          ].map(({ color, label }) => (
            <div key={label} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm flex-shrink-0" style={{ backgroundColor: color }} />
              <span className="text-sm text-gray-500">{label}</span>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="space-y-5">
          {metrics.map((metric, i) => {
            const color  = statusColor(metric)
            const barPct = Math.min((metric.observed / metric.maxValue) * 100, 100)
            const Icon   = metric.icon
            const passed = meetsTarget(metric)

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${color}12`, border: `1.5px solid ${color}30` }}
                  >
                    <Icon className="w-5 h-5" style={{ color }} strokeWidth={2} />
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Title + badge */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <h3 className="text-base font-bold text-brand-darkGray">{metric.name}</h3>
                      {metric.type === "target" ? (
                        <span
                          className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg flex-shrink-0"
                          style={{ backgroundColor: `${color}12`, color }}
                        >
                          {passed
                            ? <><CheckCircle2 className="w-3 h-3" />Target met</>
                            : <><Info className="w-3 h-3" />Below target</>}
                        </span>
                      ) : (
                        <span
                          className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg flex-shrink-0"
                          style={{ backgroundColor: `${B.info}12`, color: B.info }}
                        >
                          <Info className="w-3 h-3" />Informational
                        </span>
                      )}
                    </div>

                    {/* Target / Observed */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Target</p>
                        <p className="text-sm font-bold text-brand-darkGray">{metric.target}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Observed</p>
                        <p className="text-sm font-bold" style={{ color }}>{metric.observed}{metric.unit}</p>
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs text-gray-400 w-4">0</span>
                      <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden relative">
                        {/* Target marker */}
                        {metric.type === "target" && metric.targetValue && (
                          <div
                            className="absolute top-0 bottom-0 w-px bg-gray-400 z-10"
                            style={{ left: `${(metric.targetValue / metric.maxValue) * 100}%` }}
                          />
                        )}
                        <motion.div
                          className="h-full rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${barPct}%` }}
                          transition={{ duration: 0.7, delay: i * 0.07 + 0.2 }}
                          viewport={{ once: true }}
                          style={{ backgroundColor: color }}
                        />
                      </div>
                      <span className="text-xs text-gray-400 w-8 text-right">{metric.maxValue}{metric.unit}</span>
                    </div>

                    {/* Note */}
                    <p className="text-xs text-gray-400 leading-relaxed">{metric.notes}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Summary row */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { value: `${passCount}/${targetCount}`, label: "Targets met",           color: B.pass   },
            { value: infoCount,                     label: "Informational metrics", color: B.info   },
            { value: metrics.length,                label: "Total metrics tracked", color: B.indigo },
          ].map(({ value, label, color }) => (
            <div
              key={label}
              className="rounded-2xl border p-6"
              style={{ backgroundColor: `${color}08`, borderColor: `${color}25` }}
            >
              <p className="text-3xl font-black mb-1" style={{ color }}>{value}</p>
              <p className="text-sm font-medium text-gray-500">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── PerformanceScalability ───────────────────────────────────────────────────

export function PerformanceScalability() {
  const statCards = [
    { label: "Matching latency", value: "< 250 ms", icon: Zap,    color: B.yellow },
    { label: "Concurrent users", value: "100 k+",   icon: Users,  color: B.blue   },
    { label: "API uptime",       value: "99.99 %",  icon: Globe,  color: B.indigo },
    { label: "Data throughput",  value: "1.2 GB/s", icon: Gauge,  color: B.darkGray },
  ]

  const strategy = [
    { title: "Serverless Logic (Firebase Functions)", body: "Auto-scaling compute responds instantly to London rush-hour traffic spikes." },
    { title: "Geohash Sharding",                     body: "DB partitioned by London borough for optimised spatial query performance." },
    { title: "Edge Caching",                         body: "TfL stop data and route geometries cached at the edge — sub-100 ms UI." },
  ]

  const reliability = [
    { label: "Accessibility compliance (WCAG 2.1)", value: "100 %", pct: 100 },
    { label: "Average app load time",               value: "0.8 s", pct: 85  },
    { label: "Successful match rate",               value: "98.2 %", pct: 98.2 },
  ]

  return (
    <section className="section-pad" style={{ background: `linear-gradient(135deg, #0d1b3e 0%, ${B.indigo} 55%, ${B.blue} 100%)` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Infrastructure
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
              Scalability &amp; performance
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Built to handle high-concurrency transit demand across London.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-xl self-start md:self-auto">
            <RefreshCcw className="w-4 h-4 text-brand-yellow animate-[spin_3s_linear_infinite]" />
            <span className="text-xs font-bold text-white">SYSTEM HEALTH: 99.9 %</span>
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {statCards.map(({ label, value, icon: Icon, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-white/10 border border-white/15 rounded-2xl p-6 group hover:bg-white/15 transition-all duration-200"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200"
                style={{ backgroundColor: `${color}25` }}
              >
                <Icon className="w-5 h-5" style={{ color }} />
              </div>
              <p className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-1">{label}</p>
              <p className="text-2xl font-black text-white">{value}</p>
            </motion.div>
          ))}
        </div>

        {/* Strategy + Reliability */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Infrastructure strategy */}
          <div className="bg-white/8 border border-white/15 rounded-2xl p-8">
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
              <Cpu className="w-5 h-5 text-brand-yellow" />
              Infrastructure strategy
            </h4>
            <ul className="space-y-6">
              {strategy.map(({ title, body }) => (
                <li key={title} className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow mt-2 shrink-0" />
                  <div>
                    <p className="text-white font-semibold mb-1 text-sm">{title}</p>
                    <p className="text-sm text-white/50 leading-relaxed">{body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Reliability bars */}
          <div className="bg-white/8 border border-white/15 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/5 blur-[80px] -mr-32 -mt-32 rounded-full pointer-events-none" />
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
              <Shield className="w-5 h-5 text-brand-yellow" />
              Reliability &amp; usability
            </h4>
            <div className="space-y-7">
              {reliability.map(({ label, value, pct }) => (
                <div key={label}>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-sm text-white/70">{label}</span>
                    <span className="text-xs font-bold text-brand-yellow">{value}</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: B.yellow }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-xs text-white/40 italic leading-relaxed">
                "Monitored via Real User Monitoring (RUM) and synthetic tests across 3G – 5G network conditions."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── PerformanceBarChart (kept for standalone use) ────────────────────────────

const FRAME_W = 800
const FRAME_H = 480
const PAD     = 32
const LCOL    = 220
const RGUT    = 36
const BAR_W   = FRAME_W - PAD * 2 - LCOL - RGUT
const BAR_H   = 44
const BAR_G   = 20

const getBarPx = (observed, max)  => (observed / max) * BAR_W
const getLinePx = (target, max)   => (target / max) * BAR_W

export function PerformanceBarChart() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-2xl mb-10">
          <span className="badge mb-4">Bar Chart</span>
          <h2 className="section-title">At a glance</h2>
        </div>

        <div className="overflow-x-auto">
          <div
            className="bg-white rounded-2xl border border-gray-100 shadow-xl mx-auto"
            style={{ width: `${FRAME_W}px`, minHeight: `${FRAME_H}px`, padding: `${PAD}px` }}
          >
            {/* Chart header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-brand-darkGray">Performance test results</h3>
                <p className="text-sm text-gray-400 mt-1">RaleeyGo iOS MVP — Non-functional requirements</p>
              </div>
              <div className="flex items-center gap-5 mt-1">
                {[
                  { color: B.pass, label: "Meets target" },
                  { color: B.info, label: "Informational" },
                ].map(({ color, label }) => (
                  <div key={label} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: color }} />
                    <span className="text-xs text-gray-500">{label}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2">
                  <svg width="18" height="2"><line x1="0" y1="1" x2="18" y2="1" stroke={B.fail} strokeWidth="2" strokeDasharray="4 3" /></svg>
                  <span className="text-xs text-gray-500">Target threshold</span>
                </div>
              </div>
            </div>

            {/* Rows */}
            <div className="relative mt-6">
              {/* Grid lines */}
              <svg
                width={BAR_W} height={(BAR_H + BAR_G) * metrics.length}
                style={{ position: "absolute", left: `${LCOL}px`, top: 0, pointerEvents: "none" }}
              >
                {[0.25, 0.5, 0.75, 1].map((p, i) => (
                  <line key={i} x1={p * BAR_W} y1={0} x2={p * BAR_W} y2={(BAR_H + BAR_G) * metrics.length} stroke="#F0F0F0" strokeWidth="1" />
                ))}
              </svg>

              {metrics.map((m, i) => {
                const bw    = getBarPx(m.observed, m.maxValue)
                const color = statusColor(m)
                return (
                  <div
                    key={i}
                    className="relative flex items-center"
                    style={{ height: `${BAR_H}px`, marginBottom: i < metrics.length - 1 ? `${BAR_G}px` : 0 }}
                  >
                    {/* Label */}
                    <div
                      className="flex items-center justify-end pr-4 text-right"
                      style={{ width: `${LCOL}px`, fontSize: "13px", fontWeight: 600, color: B.darkGray, fontFamily: "system-ui" }}
                    >
                      {m.name}
                    </div>

                    {/* Bar area */}
                    <div className="relative" style={{ width: `${BAR_W}px` }}>
                      <div style={{ width: `${bw}px`, height: `${BAR_H}px`, backgroundColor: color, borderTopRightRadius: 6, borderBottomRightRadius: 6 }} />

                      {/* Target line */}
                      {m.type === "target" && m.targetValue && (
                        <div className="absolute" style={{ left: `${getLinePx(m.targetValue, m.maxValue)}px`, top: "-6px", bottom: "-6px" }}>
                          <svg width="2" height={BAR_H + 12} style={{ position: "absolute", left: 0 }}>
                            <line x1="1" y1="0" x2="1" y2={BAR_H + 12} stroke={B.fail} strokeWidth="2" strokeDasharray="5 3" />
                          </svg>
                          <div style={{ position: "absolute", bottom: `${BAR_H + 8}px`, left: "50%", transform: "translateX(-50%)", fontSize: "10px", color: B.fail, whiteSpace: "nowrap", fontWeight: 600 }}>
                            {m.target}
                          </div>
                        </div>
                      )}

                      {/* Value */}
                      <div className="absolute" style={{ left: `${bw + 8}px`, top: "50%", transform: "translateY(-50%)", fontSize: "12px", fontWeight: 700, color, fontFamily: "monospace" }}>
                        {m.observed}{m.unit}
                      </div>

                      {/* Annotation */}
                      <div className="absolute" style={{ left: 0, top: `${BAR_H + 2}px`, fontSize: "11px", color: "#AAAAAA", fontStyle: "italic" }}>
                        {m.notes}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <p className="text-center text-xs text-gray-300 mt-8" style={{ marginLeft: `${LCOL}px` }}>Proportion of reference maximum</p>

            {/* Footer summary */}
            <div className="flex items-center justify-between rounded-xl mt-5 px-5 py-3 bg-gray-50 border border-gray-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" style={{ color: B.pass }} strokeWidth={2.5} />
                <span className="text-sm font-semibold" style={{ color: B.pass }}>{passCount} of {targetCount} targeted metrics meet threshold</span>
              </div>
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4" style={{ color: B.info }} strokeWidth={2.5} />
                <span className="text-sm font-semibold" style={{ color: B.info }}>{infoCount} informational metrics baselined</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Page default export ──────────────────────────────────────────────────────

export default function Performance() {
  return (
    <div>
      {/* Hero — matches every other page */}
      <section className="page-hero relative overflow-hidden">
        <div className="absolute -top-20 right-0 w-96 h-96 bg-brand-yellow/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Non-Functional Requirements
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Performance<br /><span className="text-brand-yellow">test results</span>
            </h1>
            <p className="text-white/65 text-lg leading-relaxed mb-10">
              Real-world benchmarks from the RaleeyGo iOS MVP — measured across cold-start, ride request latency, push notifications, and live data sync.
            </p>

            {/* Hero stat pills */}
            <div className="flex flex-wrap gap-4">
              {[
                { value: `${passCount}/${targetCount}`, label: "Targets met" },
                { value: `${infoCount}`,                label: "Baselined" },
                { value: `${metrics.length}`,           label: "Total metrics" },
              ].map(({ value, label }) => (
                <div key={label} className="bg-white/10 border border-white/20 rounded-xl px-5 py-3">
                  <p className="text-2xl font-black text-brand-yellow">{value}</p>
                  <p className="text-xs text-white/60 font-medium">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metric cards */}
      <PerformanceMetricsVisualized />

      {/* Bar chart */}
      <PerformanceBarChart />

      {/* Scalability */}
      <PerformanceScalability />
    </div>
  )
}
