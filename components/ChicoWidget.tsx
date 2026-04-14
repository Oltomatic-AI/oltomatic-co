'use client';

import { useEffect, useRef, useState, useContext } from 'react';
import { LangContext } from '../lib/LangContext';

declare global {
  interface Window {
    vapiSDK?: {
      run: (config: {
        apiKey: string;
        assistant: string;
        config?: Record<string, unknown>;
      }) => { destroy?: () => void };
    };
  }
}

export default function ChicoWidget() {
  const { lang } = useContext(LangContext);
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const instanceRef = useRef<{ destroy?: () => void } | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    scriptRef.current = script;

    script.onload = () => setLoaded(true);

    return () => {
      instanceRef.current?.destroy?.();
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    if (!loaded || !window.vapiSDK) return;

    instanceRef.current?.destroy?.();

    const isSpanish = lang === 'es';

    instanceRef.current = window.vapiSDK.run({
      apiKey: '05d85179-22cc-4b5b-8889-0fed00e48756',
      assistant: 'e7b2c2b0-c0b5-4aad-9c86-e0c792bf5fc5',
      config: {
        position: 'bottom-right',
        offset: '40px',
        width: '50px',
        height: '50px',
        idle: {
          color: '#BE3A55',
          type: 'pill',
          title: isSpanish ? 'Habla con Otto' : 'Talk to Otto',
          subtitle: isSpanish ? 'IA · En vivo' : 'AI · Live',
          icon: 'https://unpkg.com/lucide-static@0.321.0/icons/phone.svg',
        },
        loading: {
          color: '#BE3A55',
          type: 'pill',
          title: isSpanish ? 'Conectando...' : 'Connecting...',
          subtitle: isSpanish ? 'Un momento' : 'One moment',
          icon: 'https://unpkg.com/lucide-static@0.321.0/icons/loader-2.svg',
        },
        active: {
          color: '#BE3A55',
          type: 'pill',
          title: isSpanish ? '¡En llamada!' : 'In call!',
          subtitle: isSpanish ? 'Toca para colgar' : 'Tap to end',
          icon: 'https://unpkg.com/lucide-static@0.321.0/icons/phone-off.svg',
        },
        assistantOverrides: {
          firstMessage: isSpanish
            ? '¡Hola! Soy Otto, el asistente de inteligencia artificial de Oltomatic. ¿En qué te puedo ayudar hoy?'
            : "Hi there! I'm Otto, Oltomatic's AI assistant. What can I help you with today?",
        },
      },
    });
  }, [loaded, lang]);

  return null;
}
