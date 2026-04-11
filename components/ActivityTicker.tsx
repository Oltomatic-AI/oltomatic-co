"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/LangContext";

function randomBetween(a: number, b: number) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

export default function ActivityTicker() {
  const { t } = useLang();

  const getEvents = () => [
    { icon: "📞", text: t("tick1"), detail: t("tick_d1") },
    { icon: "🎯", text: t("tick2"), detail: t("tick_d2") },
    { icon: "📅", text: t("tick3"), detail: t("tick_d3") },
    { icon: "📊", text: t("tick4"), detail: t("tick_d4") },
    { icon: "📞", text: t("tick5"), detail: t("tick_d5") },
    { icon: "✉️", text: t("tick6"), detail: t("tick_d6") },
    { icon: "🎯", text: t("tick7"), detail: t("tick_d7") },
    { icon: "📅", text: t("tick8"), detail: t("tick_d8") },
    { icon: "📞", text: t("tick9"), detail: t("tick_d9") },
    { icon: "📊", text: t("tick10"), detail: t("tick_d10") },
    { icon: "✉️", text: t("tick11"), detail: t("tick_d11") },
    { icon: "📞", text: t("tick12"), detail: t("tick_d12") },
  ];

  const [items, setItems] = useState(() =>
    Array.from({ length: 4 }, (_, i) => ({ ...getEvents()[i], id: i, time: `${randomBetween(2,58)} min` }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const events = getEvents();
      const newEvent = events[randomBetween(0, events.length - 1)];
      setItems((prev) => [{ ...newEvent, id: Date.now(), time: t("just_now") }, ...prev.slice(0, 3)]);
    }, 6000);
    return () => clearInterval(interval);
  }, [t]);

  const stats = [
    { value: t("stat1_val"), label: t("stat1_label") },
    { value: t("stat2_val"), label: t("stat2_label") },
    { value: t("stat3_val"), label: t("stat3_label") },
    { value: t("stat4_val"), label: t("stat4_label") },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {stats.map((s) => (
          <div key={s.label} className="p-3 rounded-xl"
            style={{ background: "rgba(21,96,168,0.07)", border: "1px solid rgba(21,96,168,0.12)" }}>
            <div className="font-bold blue-text mb-1" style={{ fontSize: "26px", lineHeight: 1 }}>{s.value}</div>
            <p style={{ fontSize: "11px", color: "#55556A", lineHeight: "1.4" }}>{s.label}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 mb-4">
        <div className="flex-1 h-px" style={{ background: "#1E1E32" }} />
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#16A34A", animation: "pulse 2s infinite" }} />
          <span style={{ fontSize: "10px", color: "#16A34A", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>{t("ticker_label")}</span>
        </div>
        <div className="flex-1 h-px" style={{ background: "#1E1E32" }} />
      </div>
      <div className="flex flex-col gap-2">
        {items.map((item, i) => (
          <div key={item.id} className="flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-700"
            style={{ background: i === 0 ? "rgba(21,96,168,0.1)" : "transparent", border: `1px solid ${i === 0 ? "rgba(21,96,168,0.2)" : "transparent"}`, opacity: i === 0 ? 1 : Math.max(0.35, 1 - i * 0.22) }}>
            <span style={{ fontSize: "13px", flexShrink: 0 }}>{item.icon}</span>
            <div className="flex-1 min-w-0">
              <p style={{ fontSize: "12px", fontWeight: 600, color: "#EEEEF5", margin: 0 }}>{item.text}</p>
              <p style={{ fontSize: "11px", color: "#55556A", margin: 0 }}>{item.detail}</p>
            </div>
            <span style={{ fontSize: "11px", color: i === 0 ? "#5BA3E0" : "#55556A", flexShrink: 0 }}>{item.time}</span>
            {i === 0 && <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#5BA3E0", animation: "pulse 2s infinite" }} />}
          </div>
        ))}
      </div>
    </div>
  );
}
