import { ImageWidget } from "apps/admin/widgets.ts";
import TextFade from "site/islands/TextFade.tsx";
import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";
import ButtonFade from "site/islands/ButtonFade.tsx";
import ImageFade from "site/islands/ImageFade.tsx";

export type IFollowing = {
  socialName: string,
  href: string
}

export type IPeople = {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
  */
  infoExtra?: string
  name: string,
  role: string
  following: IFollowing[]
  imagePeople: {
    src: ImageWidget,
    alt: string
  }
}
export interface TeamProps {
  title: string,
  peoples: IPeople[]
}

export default function Team({ peoples, title }: TeamProps) {
  return (
    <section class="bg-[#FFF] py-[5vmax]">
      <div class="w-full lg:container lg:mx-auto mx-4 flex flex-col">
        <TextFade text={title} className="font-size-responsive-title" dataSalDelay="2000" />
        <div class='flex gap-4 flex-wrap'>
          { peoples.map(({ imagePeople, following, infoExtra, name, role }, index) => (
            <div class="flex flex-col gap-4 items-center justify-center">
              <ImageFade
                src={imagePeople?.src}
                alt={imagePeople?.alt}
                dataSalDelay={`${2000 + (60 * index)}`}
                class="px-4 pb-4 rounded-full"
              />
              <TextFade text={role} className="text-[--text-dark-team] font-size-responsive-subtitle" />
              <div class="flex gap-2">
                { following.map(({ href, socialName }, indexFollowing) => (
                  <>
                    <ButtonFade
                      text={socialName}
                      class="border-none bg-transparent text-[--text-red-team]"
                      link={href}
                      dataSalDelay={`${2000 + (60 * index)}`}
                    />
                    { indexFollowing > 0 && indexFollowing < following.length -1 ? (
                      <span class="text-[--text-dark-team]">{' . '}</span> 
                    ) : null }
                  </>
                ))}
              </div>
              { !infoExtra ? null : (
                <HTMLRenderer 
                  html={infoExtra}
                />
              ) }
            </div>
          )) }
        </div>
      </div>
    </section>
  )
}
