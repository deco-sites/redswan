import { ImageWidget } from "apps/admin/widgets.ts";
import TextFade from "site/islands/TextFade.tsx";
import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";
import ButtonFade from "site/islands/ButtonFade.tsx";
import ImageFade from "site/islands/ImageFade.tsx";
import { HTML } from "deco-sites/std/components/types.ts";

export type IFollowing = {
  socialName: string,
  href: string
}

export interface IPeople {
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
  peoples: Array<IPeople & {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
  */
  infoExtra?: HTML
  }>
}

export default function Team({ peoples, title }: TeamProps) {
  return (
    <section class="bg-[#FFF] py-[5vmax]">
      <div class="w-full 2xl:container 2xl:mx-auto mx-4 lg:px-[3vw] flex flex-col gap-4 md:gap-8 lg:gap-12"
        data-testid={'TeamSection'}
      >
        <TextFade
          text={title}
          className="font-size-responsive-title text-[--text-red-team]"
          dataSalDelay="2000"
          tagDataTestid="TeamSection"
        />
        <div class='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          { peoples.map(({ imagePeople, following, infoExtra, name, role }, index) => (
            <div class="flex flex-col gap-4 items-center">
              <ImageFade
                src={imagePeople?.src}
                alt={imagePeople?.alt}
                dataSalDelay={`${2000 + (60 * index)}`}
                class="px-4 pb-4 rounded-full"
                tagDataTestid="TeamSection"
              />
              <TextFade
                text={name}
                className="text-[--text-red-team] font-size-responsive-subtitle font-bold"
                tagDataTestid="TeamSection"
              />
              <TextFade
                text={role}
                className="text-[--text-dark-team] font-size-responsive-body warnock-pro font-thin not-italic"
                tagDataTestid="TeamSection"
              />
              <div class="flex gap-2">
                { following.map(({ href, socialName }, indexFollowing) => (
                  <>
                    <ButtonFade
                      text={socialName}
                      class="border-none bg-transparent text-[--text-red-team] warnock-pro font-thin not-italic"
                      link={href}
                      dataSalDelay={`${2000 + (60 * index)}`}
                      tagDataTestid="TeamSection"
                    />
                    { indexFollowing < following.length -1 ? (
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
