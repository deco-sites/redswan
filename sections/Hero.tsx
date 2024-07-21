import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Props {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  /**
   * @default This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.
   */
  description?: string;
  image?: ImageWidget;
  placement?: "left" | "right";
  cta?: CTA[];
}

const PLACEMENT = {
  left: "flex-col text-left lg:flex-row-reverse",
  right: "flex-col text-left lg:flex-row",
};

export default function HeroFlats({
  title = "Click here to tweak this text however you want.",
  description,
  image,
  placement = "left",
  cta = [],
}: Props) {
  return (
    <div class="bg-[--background-hero] py-[10vmax]">
      <nav class="2xl:container 2xl:mx-auto mx-4 lg:px-[3vw] tweak-global-animations-animation-type-flex">
      <div class="flex flex-col items-center gap-8 showInDisplay-transition">
        <div
          class={`flex w-full xl:container xl:mx-auto py-20 mx-5 md:mx-10 z-10 ${
            image
              ? PLACEMENT[placement]
              : "flex-col items-start justify-center"
          } lg:py-36 gap-12 md:gap-20 items-center`}
        >
          {image && (
            <Image
              width={640}
              class="w-full lg:w-1/2 object-fit"
              sizes="(max-width: 640px) 100vw, 30vw"
              src={image}
              alt={image}
              decoding="async"
              loading="lazy"
            />
          )}
          <div
            class={`mx-6 lg:w-full space-y-4 gap-4 text-[--text-hero] ${
              image
                ? "lg:w-1/2 lg:max-w-xl"
                : ""
            }`}
          >
            <div
              class="inline-block font-size-responsive-title font-normal"
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            >
            </div>
            { !description ? null : (
              <p class="text-lg md:text-md leading-[150%]">
                {description}
              </p>
            ) }
            { !cta?.length ? null : (
              <div class="flex items-center gap-3">
                {cta?.map((item) => (
                  <a
                    key={item?.id}
                    id={item?.id}
                    href={item?.href}
                    target={item?.href.includes("http") ? "_blank" : "_self"}
                    class={`font-normal btn btn-primary ${
                      item.outline && "btn-outline"
                    }`}
                  >
                    {item?.text}
                  </a>
                ))}
              </div>
            ) }
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
}
