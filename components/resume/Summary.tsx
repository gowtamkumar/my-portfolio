
import { resumeDocument } from "@/lib/resume";

export default function Summary() {
  return (
    <section className="my-2">
      <h2 className="text-xl font-semibold border-b my-1">Summary</h2>
      <p className="text-sm">
        {resumeDocument.summary}
      </p>
    </section>
  );
}
