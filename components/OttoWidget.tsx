"use client";
import { useEffect, useRef, useState } from "react";

type CallStatus = "idle" | "connecting" | "active";

export default function OttoWidget() {
  const [status, setStatus] = useState<CallStatus>("idle");
  const [expanded, setExpanded] = useState(false);
  const [ready, setReady] = useState(false);
  const vapiRef = useRef<any>(null);

  useEffect(() => {
    let vapi: any;

    const init = async () => {
      try {
        const { default: Vapi } = await import("@vapi-ai/web");
        vapi = new Vapi("05d85179-22cc-4b5b-8889-0fed00e48756");
        vapiRef.current = vapi;

        vapi.on("call-start", () => setStatus("active"));
        vapi.on("call-end",   () => setStatus("idle"));
        vapi.on("error",      () => setStatus("idle"));

        setReady(true);
      } catch (e) {
        console.error("Vapi init error:", e);
      }
    };

    init();

    return () => {
      if (vapiRef.current) {
        try { vapiRef.current.stop(); } catch {}
      }
    };
  }, []);

  const startCall = async () => {
    if (!ready || !vapiRef.current) return;
    setStatus("connecting");
    try {
      await vapiRef.current.start("db9c9c70-a62c-4b0b-8777-ca93c03cf28e");
    } catch {
      setStatus("idle");
    }
  };

  const endCall = () => {
    if (!vapiRef.current) return;
    vapiRef.current.stop();
    setStatus("idle");
  };

  const isActive     = status === "active";
  const isConnecting = status === "connecting";
  const isBusy       = isActive || isConnecting;

  return (
    <>
      {/* Panel */}
      {expanded && (
        <div className="fixed bottom-24 right-6 z-50 rounded-2xl overflow-hidden"
          style={{
            width: "280px",
            background: "#0D0D1A",
            border: "1px solid rgba(21,96,168,0.3)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
          }}>
          {/* Header */}
          <div className="px-5 py-4 flex items-center gap-3" style={{ borderBottom: "1px solid #1E1E32" }}>
            <div className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-white flex-shrink-0"
              style={{ background: "#1560A8" }}>O</div>
            <div>
              <p className="text-sm font-semibold" style={{ color: "#EEEEF5" }}>OTTO</p>
              <p className="text-xs" style={{ color: "#55556A" }}>Oltomatic AI</p>
            </div>
            {isActive && (
              <span className="ml-auto flex items-center gap-1.5 text-xs" style={{ color: "#4ade80" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Live
              </span>
            )}
            {isConnecting && (
              <span className="ml-auto text-xs" style={{ color: "#9999B0" }}>Connecting...</span>
            )}
          </div>

          {/* Body */}
          <div className="px-5 py-5">
            {!isBusy ? (
              <>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: "#9999B0" }}>
                  Talk to OTTO — our AI agent. Ask anything about what we do, how we work, or what we can build for you.
                </p>
                <button onClick={startCall} disabled={!ready}
                  className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200"
                  style={{ background: ready ? "#1560A8" : "#1E1E32", cursor: ready ? "pointer" : "not-allowed" }}
                  onMouseEnter={(e) => { if (ready) e.currentTarget.style.background = "#2272C3"; }}
                  onMouseLeave={(e) => { if (ready) e.currentTarget.style.background = "#1560A8"; }}>
                  {ready ? "Start conversation" : "Loading..."}
                </button>
                <p className="text-xs text-center mt-3" style={{ color: "#55556A" }}>Microphone required</p>
              </>
            ) : (
              <>
                <div className="text-center py-3 mb-4">
                  <div className="flex justify-center items-end gap-1 mb-3" style={{ height: "28px" }}>
                    {[0,1,2,3,4].map((i) => (
                      <div key={i} className="w-1 rounded-full"
                        style={{
                          background: "#5BA3E0",
                          height: isActive ? undefined : "4px",
                          animation: isActive ? `waveBar 1.2s ease-in-out ${i * 0.12}s infinite` : "none",
                          minHeight: "4px",
                        }} />
                    ))}
                  </div>
                  <p className="text-sm" style={{ color: isActive ? "#EEEEF5" : "#9999B0" }}>
                    {isActive ? "OTTO is listening" : "Connecting..."}
                  </p>
                </div>
                <button onClick={endCall}
                  className="w-full py-3 rounded-xl text-sm font-semibold transition-all"
                  style={{ background: "rgba(239,68,68,0.1)", color: "#f87171", border: "1px solid rgba(239,68,68,0.2)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(239,68,68,0.2)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(239,68,68,0.1)"; }}>
                  End call
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => {
          if (isBusy) {
            endCall();
            setExpanded(false);
          } else {
            setExpanded((prev) => !prev);
          }
        }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl transition-all duration-200"
        style={{
          background: "#1560A8",
          padding: "13px 20px",
          boxShadow: isActive
            ? "0 0 0 4px rgba(21,96,168,0.25), 0 8px 32px rgba(21,96,168,0.4)"
            : "0 8px 32px rgba(21,96,168,0.3)",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = "#2272C3"; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = "#1560A8"; }}>

        {isActive ? (
          <div className="flex gap-0.5 items-end" style={{ height: "18px" }}>
            {[0,1,2,3].map((i) => (
              <div key={i} className="w-0.5 rounded-full"
                style={{ background: "white", animation: `waveBar 1s ease-in-out ${i*0.15}s infinite` }} />
            ))}
          </div>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" fill="white"/>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )}

        <div>
          <p className="text-white font-semibold text-sm leading-none mb-0.5">
            {isActive ? "Talking to OTTO" : isConnecting ? "Connecting..." : "Talk to OTTO"}
          </p>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "11px" }}>
            {isActive ? "Tap to end" : "AI · Live"}
          </p>
        </div>

        {isActive && <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse ml-1" />}
      </button>

      <style>{`
        @keyframes waveBar {
          0%, 100% { height: 4px; }
          50% { height: 22px; }
        }
      `}</style>
    </>
  );
}
