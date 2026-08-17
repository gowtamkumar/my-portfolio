"use client";

export default function PrintCvButton() {
  const handlePrint = () => {
    const previous = document.title;
    document.title = " ";
    const restore = () => {
      document.title = previous;
      window.removeEventListener("afterprint", restore);
    };
    window.addEventListener("afterprint", restore);
    window.print();
  };

  return (
    <button
      type="button"
      onClick={handlePrint}
      className="rounded-full border border-signal/40 px-4 py-2 text-sm font-semibold text-signal hover:bg-signal hover:text-ink"
    >
      Print / Save PDF
    </button>
  );
}
