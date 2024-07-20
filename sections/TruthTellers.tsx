import TextFade from "site/islands/TextFade.tsx";

export interface TruthTellersProps {
  title: string,
}

export default function TruthTellers({ title }: TruthTellersProps) {
  return (
    <section class="bg-[--background-section-truth-tellers] text-[--text-truth-tellers]">
      <div class="w-full lg:container lg:mx-auto mx-4">
        <TextFade text={title} className="font-size-responsive-title" dataSalDelay="2000" />
      </div>
    </section>
  )
}