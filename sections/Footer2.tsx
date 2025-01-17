import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import TextFade from "site/islands/TextFade.tsx";
import ImageFade from "site/islands/ImageFade.tsx";

export interface Props {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  title: string
  email: string
}

export default function Footer2({
  logo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt: "Logo",
  },
  title,
  email
}: Props) {
  return (
    <div class="bg-[--background-footer] text-[--text-footer] py-8">
      <div class="2xl:container 2xl:mx-auto mx-4 px-4 lg:px-[3vw] flex flex-col gap-4"
        data-testid="Footer2Section"
      >
        <TextFade
          text={title}
          className="text-[40px] font-semibold"
          dataSalDelay="700"
          tagDataTestid="Footer2Section"
        />
        <TextFade
          text={email}
          className="warnock-pro"
          dataSalDelay="700"
          tagDataTestid="Footer2Section"
        />
        { !logo?.src ? null : (
          <ImageFade
            src={logo.src}
            alt={logo?.alt ?? 'Logo by redswan'}
            dataSalDelay="700"
            tagDataTestid="Footer2Section"
            width="30"
            height="30"
          />
        ) }
      </div>
    </div>
  );
}
