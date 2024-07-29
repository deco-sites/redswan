import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../ui/Icon.tsx";
import { JSX } from "preact/jsx-runtime";
import ButtonFade from "site/islands/ButtonFade.tsx";
import LinkClient from "site/islands/LinkClient.tsx";

export interface HeaderProps {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  navigation?: {
    links: {
      label?: string;
      url?: string;
    }[];
  };
  children: JSX.Element
}

export default function Header({
  logo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt: "Logo",
  },
  navigation = {
    links: [
      { label: "Our Family", url: "/home#OurFamily" },
      { label: "Team", url: "/home#Team" },
      { label: "Get in Touch", url: "/home#GetInTouch" },
    ],
  },
  children
}: HeaderProps) {
  return (
    <>
      <div class="h-[70px] md:h-[0px]" />
      <header
        class="tweak-global-animations-animation-type-flex bg-[--background-header] text-[--text-header] fixed top-0 w-full z-30"
      >
        <div class="flex justify-between 2xl:container 2xl:mx-auto px-2 md:mx-4 py-8 px-4 lg:px-[3vw]">
          <div class="opacity-transition showInDisplay-transition">
            <a href="/" data-event='no effect'>
              <Image src={logo.src || ""} width={154} height={44} alt={logo.alt} />
            </a>
          </div>
          <div class="drawer drawer-end w-[60px] md:hidden">
            <input id="mobile-drawer-nav" type="checkbox" class="drawer-toggle" />
            {/* main content */}
            <div class="drawer-content container lg:px-0 md:px-4 flex gap-8 items-center justify-between py-4 w-[50px] md:w-auto">
              <label
                htmlFor="mobile-drawer-nav"
                class="flex md:hidden btn btn-ghost drawer-button"
              >
                <Icon id="Bars3" size={24} strokeWidth={0.1} />
              </label>
            </div>

            {/* sidebar */}
            <aside class="drawer-side z-50">
              {/* Close when clicking on overlay */}
              <label
                htmlFor="mobile-drawer-nav"
                aria-label="close sidebar"
                class="drawer-overlay"
              />

              <div class="flex flex-col gap-8 min-h-full w-80 bg-[--background-footer] text-[--text-footer]">
                <a class="p-4" href="/">
                  <Image
                    src={logo.src || ""}
                    width={100}
                    height={28}
                    alt={logo.alt}
                  />
                </a>

                <ul class="menu text-[30px]">
                  {navigation?.links.map((link) => (
                    <li>
                      <a href={link.url} aria-label={link.label}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
          <div class="hidden items-center justify-between md:flex pt-4">
            <ul class="flex gap-8">
              {navigation.links.map((link) => (
                <li>
                  <LinkClient 
                    text={link.label ?? ''}
                    class="evento_de_borda_corra no-underline pt-4 font-semibold font-size-navigation"
                    url={link.url ?? ''}
                    insertClass='retrair-para-direita'
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        {children}
      </header>
    </>
  );
}
