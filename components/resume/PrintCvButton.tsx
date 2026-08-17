"use client";

export default function PrintCvButton() {
  const handlePrint = () => {
    const previous = document.title;
    document.title = "Gowtam_Kumar_Full_Stack_Engineer";
    const restore = () => {
      document.title = previous;
      window.removeEventListener("afterprint", restore);
    };
    window.addEventListener("afterprint", restore);
    window.print();
  };

  return (
    <div className="flex flex-col items-start gap-1 sm:items-end">
      <button
        type="button"
        onClick={handlePrint}
        className="rounded-full border border-signal/40 px-4 py-2 text-sm font-semibold text-signal hover:bg-signal hover:text-ink"
      >
        Print / Save PDF
      </button>
      <p className="max-w-[16rem] text-[11px] leading-snug text-[var(--muted)] sm:text-right">
        Destination: Save as PDF. Turn off headers and footers.
      </p>
    </div>
  );
}
