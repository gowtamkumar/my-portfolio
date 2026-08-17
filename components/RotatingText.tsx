"use client";

import { useEffect, useState } from "react";

export default function RotatingText({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2400);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <span className="text-signal" key={words[index]}>
      {words[index]}
    </span>
  );
}
