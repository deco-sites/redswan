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
    <section class="bg-[--background-section-truth-tellers] text-[--text-truth-tellers] py-[10vmax] w-full">
      <div class="w-full 2xl:container 2xl:mx-auto px-4 lg:px-[3vw] spacing-1px w-full flex justify-center md:justify-start"
        data-testid={'TruthTellersSection'}
      >
        <TextFade
          text={title}
          className="font-semibold font-size-responsive-principal -spacing-2px w-full md:w-[80%]"
          classNameContainer="w-full md:w-[80%]"
          dataSalDelay="2000"
          tagDataTestid="TruthTellersSection"
          event={{
            status: true,
            class: 'retrair-para-direita-container'
          }}
        />
      </div>
    </section>
  )
}
