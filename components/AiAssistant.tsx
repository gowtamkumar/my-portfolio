"use client";

import { answerAssistant, suggestedPrompts } from "@/lib/assistant";
import { site } from "@/lib/site";
import { usePathname } from "next/navigation";
import { FormEvent, useRef, useState, type RefObject } from "react";
import { HiOutlineSparkles } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

type Message = { role: "user" | "assistant"; text: string };

const intro: Message = {
  role: "assistant",
  text: `I’m ${site.shortName}’s on-site assistant — trained on this portfolio, not a cloud model. Ask about stack, AI automation, projects, or hiring.`,
};

function useAssistantChat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([intro]);
  const endRef = useRef<HTMLDivElement>(null);

  const send = (text: string) => {
    const q = text.trim();
    if (!q) return;
    const reply = answerAssistant(q);
    setMessages((prev) => [
      ...prev,
      { role: "user", text: q },
      { role: "assistant", text: reply },
    ]);
    setInput("");
    requestAnimationFrame(() =>
      endRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" })
    );
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    send(input);
  };

  return { input, setInput, messages, send, onSubmit, endRef };
}

function ChatTranscript({
  messages,
  endRef,
}: {
  messages: Message[];
  endRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4 text-sm">
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
  );
}

export function AssistantPanel() {
  const { input, setInput, messages, send, onSubmit, endRef } = useAssistantChat();

  return (
    <section id="assistant" className="scroll-mt-28 mx-auto max-w-6xl px-5 py-20 md:px-8">
      <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <div className="flex flex-col justify-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-signal">
            GK assistant
          </p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl">Ask this site about my work</h2>
          <p className="mt-4 max-w-md leading-relaxed text-[var(--muted)]">
            On-site Q&A trained on this portfolio — stack, Cayura, NDIS, resume,
            and how to hire. No cloud model. Pick a prompt or type.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {suggestedPrompts.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => send(p)}
                className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-xs text-[var(--muted)] hover:border-signal/40 hover:text-signal"
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <div className="flex h-[28rem] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[var(--card)] backdrop-blur-md">
          <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-signal/15 text-signal">
              <HiOutlineSparkles className="text-lg" />
            </span>
            <div>
              <p className="font-display text-sm font-semibold">GK assistant</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-signal">
                Local · portfolio-trained
              </p>
            </div>
          </div>
          <ChatTranscript messages={messages} endRef={endRef} />
          <form onSubmit={onSubmit} className="border-t border-white/10 p-4">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my work…"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-[var(--muted)] focus:border-signal/50"
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default function AiAssistant() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { input, setInput, messages, send, onSubmit, endRef } = useAssistantChat();

  if (pathname === "/") return null;

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
          <ChatTranscript messages={messages} endRef={endRef} />
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
