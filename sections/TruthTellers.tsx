import TextFade from "site/islands/TextFade.tsx";

export interface TruthTellersProps {
  title: string,
}

export default function TruthTellers({ title }: TruthTellersProps) {
  return (
    <section class="bg-[--background-section-truth-tellers] text-[--text-truth-tellers] lg:container lg:mx-auto mx-4">
      <div class="w-full">
        <TextFade text={title} className="font-size-responsive-title" dataSalDelay="2000" />
      </div>
    </section>
  )
}
