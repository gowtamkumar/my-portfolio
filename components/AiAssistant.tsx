"use client";

import { answerAssistant, suggestedPrompts } from "@/lib/assistant";
import { site } from "@/lib/site";
import { FormEvent, useRef, useState } from "react";
import { HiOutlineSparkles } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

type Message = { role: "user" | "assistant"; text: string };

export default function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: `I’m ${site.shortName}’s on-site assistant — trained on this portfolio, not a cloud model. Ask about stack, AI automation, projects, or hiring.`,
    },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  const send = (text: string) => {
    const q = text.trim();
    if (!q) return;
    const reply = answerAssistant(q);
    setMessages((prev) => [...prev, { role: "user", text: q }, { role: "assistant", text: reply }]);
    setInput("");
    requestAnimationFrame(() => endRef.current?.scrollIntoView({ behavior: "smooth" }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    send(input);
  };

  return (
    <div className="no-print">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-signal text-ink shadow-glow transition hover:scale-105"
        aria-label="Open AI assistant"
      >
        {open ? <IoClose className="text-2xl" /> : <HiOutlineSparkles className="text-2xl" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-5 z-50 flex h-[28rem] w-[min(22rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-900/95 shadow-glow backdrop-blur-xl">
          <div className="border-b border-white/10 px-4 py-3">
            <p className="font-display text-sm font-semibold">GK assistant</p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-signal">
              Local · portfolio-trained
            </p>
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-3 text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[90%] rounded-2xl px-3 py-2 leading-relaxed ${
                  m.role === "user"
                    ? "ml-auto bg-signal/15 text-[var(--fg)]"
                    : "bg-white/5 text-[var(--muted)]"
                }`}
              >
                {m.text}
              </div>
            ))}
            <div ref={endRef} />
          </div>
          <div className="flex flex-wrap gap-1.5 px-3 pb-2">
            {suggestedPrompts.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => send(p)}
                className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] text-[var(--muted)] hover:border-signal/40 hover:text-signal"
              >
                {p}
              </button>
            ))}
          </div>
          <form onSubmit={onSubmit} className="border-t border-white/10 p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my work…"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-[var(--muted)] focus:border-signal/50"
            />
          </form>
        </div>
      )}
    </div>
  );
}
