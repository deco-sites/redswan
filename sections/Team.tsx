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
  name: string,
  role: string
  following: IFollowing[]
  imagePeople: {
    src: ImageWidget,
    alt: string
  }

  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  infoExtra: string
}
export interface TeamProps {
  title: string,
  peoples: IPeople[]
}

export default function Team({ peoples, title }: TeamProps) {
  return (
    <section class="bg-[#FFF]">
      <div class="w-full lg:container lg:mx-auto mx-4 flex flex-col">
        <TextFade text={title} className="font-size-responsive-title" dataSalDelay="2000" />
        <div class='flex gap-4 flex-wrap'>
          { peoples.map(({ imagePeople, following, infoExtra, name, role }, index) => (
            <div class="flex flex-col gap-4">
              <ImageFade
                src={imagePeople?.src}
                alt={imagePeople?.alt}
                dataSalDelay={`${2000 + (60 * index)}`}
              />
              <TextFade text={role} className="text-[--text-dark-team]" />
              <div class="flex">
                { following.map(({ href, socialName }, indexFollowing) => (
                  <>
                    <ButtonFade
                      text={socialName}
                      class="border-none bg-transparent text-[--text-red-team]"
                      link={href}
                      dataSalDelay={`${2000 + (60 * index)}`}
                    />
                    { indexFollowing > 0 && indexFollowing < following.length -1 ? ' . ' : null }
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
