import TextFade from "site/islands/TextFade.tsx";

export interface TruthTellersProps {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title: string,
}

export default function TruthTellers({ title }: TruthTellersProps) {
  return (
    <section class="bg-[--background-section-truth-tellers] text-[--text-truth-tellers] py-[10vmax]">
      <div class="w-full 2xl:container 2xl:mx-auto mx-4 lg:px-[3vw]"
        data-testid={'TruthTellersSection'}
      >
        <TextFade
          text={title}
          className="font-size-responsive-title"
          dataSalDelay="2000"
          tagDataTestid="TruthTellersSection"
        />
      </div>
    </section>
  )
}
