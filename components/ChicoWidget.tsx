"use client";
import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/LangContext";

type CallStatus = "idle" | "connecting" | "active";

export default function ChicoWidget() {
  const [status, setStatus] = useState<CallStatus>("idle");
  const [expanded, setExpanded] = useState(false);
  const [ready, setReady] = useState(false);
  const vapiRef = useRef<any>(null);
  const { lang } = useLang();
  const es = lang === "es";

  useEffect(() => {
    const init = async () => {
      try {
        const { default: Vapi } = await import("@vapi-ai/web");
        const vapi = new Vapi("05d85179-22cc-4b5b-8889-0fed00e48756");
        vapiRef.current = vapi;
        vapi.on("call-start", () => setStatus("active"));
        vapi.on("call-end",   () => setStatus("idle"));
        vapi.on("error",      () => setStatus("idle"));
        setReady(true);
      } catch (e) { console.error("Vapi init error:", e); }
    };
    init();
    return () => { try { vapiRef.current?.stop(); } catch {} };
  }, []);

  const startCall = async () => {
    if (!ready || !vapiRef.current) return;
    setStatus("connecting");
    try {
      await vapiRef.current.start("e7b2c2b0-c0b5-4aad-9c86-e0c792bf5fc5");
    } catch { setStatus("idle"); }
  };

  const endCall = () => { vapiRef.current?.stop(); setStatus("idle"); setExpanded(false); };
  const isActive     = status === "active";
  const isConnecting = status === "connecting";
  const isBusy       = isActive || isConnecting;

  return (
    <>
      {expanded && (
        <div style={{ position:"fixed", bottom:"88px", right:"24px", width:"280px", background:"#0D0D1A", border:"1px solid rgba(21,96,168,0.3)", borderRadius:"16px", boxShadow:"0 24px 64px rgba(0,0,0,0.5)", zIndex:9999 }}>
          <div style={{ padding:"16px 20px", borderBottom:"1px solid #1E1E32", display:"flex", alignItems:"center", gap:"12px" }}>
            <div style={{ width:"36px", height:"36px", borderRadius:"8px", background:"#1560A8", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:"bold", color:"white", flexShrink:0, fontSize:"18px" }}>C</div>
            <div>
              <p style={{ color:"#EEEEF5", fontSize:"14px", fontWeight:600, margin:0 }}>CHICO</p>
              <p style={{ color:"#55556A", fontSize:"12px", margin:0 }}>Oltomatic AI</p>
            </div>
            {isActive     && <span style={{ marginLeft:"auto", color:"#4ade80", fontSize:"12px" }}>● {es ? "En vivo" : "Live"}</span>}
            {isConnecting && <span style={{ marginLeft:"auto", color:"#9999B0", fontSize:"12px" }}>{es ? "Conectando..." : "Connecting..."}</span>}
          </div>
          <div style={{ padding:"20px" }}>
            {!isBusy ? (
              <>
                <p style={{ color:"#9999B0", fontSize:"14px", lineHeight:1.6, marginBottom:"16px" }}>
                  {es ? "Habla con Chico — nuestro agente IA. Pregunta lo que quieras sobre lo que hacemos." : "Talk to Chico — our AI agent. Ask anything about what we do."}
                </p>
                <button onClick={startCall} disabled={!ready}
                  style={{ width:"100%", padding:"12px", borderRadius:"10px", background: ready ? "#1560A8" : "#1E1E32", color:"white", fontSize:"14px", fontWeight:600, border:"none", cursor: ready ? "pointer" : "not-allowed" }}>
                  {ready ? (es ? "Iniciar conversación" : "Start conversation") : (es ? "Cargando..." : "Loading...")}
                </button>
                <p style={{ color:"#55556A", fontSize:"11px", textAlign:"center", marginTop:"10px" }}>
                  {es ? "Se requiere micrófono" : "Microphone required"}
                </p>
              </>
            ) : (
              <>
                <p style={{ color: isActive ? "#EEEEF5" : "#9999B0", fontSize:"14px", textAlign:"center", marginBottom:"16px" }}>
                  {isActive ? (es ? "Chico está escuchando..." : "Chico is listening...") : (es ? "Conectando con Chico..." : "Connecting to Chico...")}
                </p>
                <button onClick={endCall}
                  style={{ width:"100%", padding:"12px", borderRadius:"10px", background:"rgba(239,68,68,0.1)", color:"#f87171", fontSize:"14px", fontWeight:600, border:"1px solid rgba(239,68,68,0.2)", cursor:"pointer" }}>
                  {es ? "Finalizar llamada" : "End call"}
                </button>
              </>
            )}
          </div>
        </div>
      )}

      <button onClick={() => isBusy ? endCall() : setExpanded(prev => !prev)}
        style={{ position:"fixed", bottom:"24px", right:"24px", zIndex:9999, display:"flex", alignItems:"center", gap:"12px", background:"#1560A8", padding:"13px 20px", borderRadius:"16px", border:"none", cursor:"pointer", boxShadow:"0 8px 32px rgba(21,96,168,0.3)" }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" fill="white"/>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <div style={{ textAlign:"left" }}>
          <p style={{ color:"white", fontWeight:600, fontSize:"14px", margin:0, lineHeight:1.2 }}>
            {isActive ? (es ? "Hablando con Chico" : "Talking to Chico") : isConnecting ? (es ? "Conectando..." : "Connecting...") : (es ? "Habla con Chico" : "Talk to Chico")}
          </p>
          <p style={{ color:"rgba(255,255,255,0.55)", fontSize:"11px", margin:0 }}>{es ? "IA · En vivo" : "AI · Live"}</p>
        </div>
      </button>
    </>
  );
}
