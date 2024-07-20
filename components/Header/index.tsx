import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../ui/Icon.tsx";

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
  children: any
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
    <header class="tweak-global-animations-animation-type-flex bg-[--background-header] text-[--text-header] lg:container lg:mx-auto mx-4">
      {children}
      <div class="flex justify-between">
        <div class="showInDisplay-transition">
          <a href="/" data-event='no effect'>
            <Image src={logo.src || ""} width={100} height={28} alt={logo.alt} />
          </a>
        </div>
        <div class="drawer drawer-end md:hidden">
          <input id="mobile-drawer-nav" type="checkbox" class="drawer-toggle" />
          {/* main content */}
          <div class="drawer-content container lg:px-0 px-4 flex gap-8 items-center justify-between py-4">
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

            <div class="flex flex-col gap-8 min-h-full w-80 bg-base-100 text-base-content">
              <a class="p-4" href="/">
                <Image
                  src={logo.src || ""}
                  width={100}
                  height={28}
                  alt={logo.alt}
                />
              </a>

              <ul class="menu">
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
        <div class="hidden items-center justify-between md:flex w-full">
          <ul class="flex">
            {navigation.links.map((link) => (
              <li>
                <a
                  href={link.url}
                  aria-label={link.label}
                  class="link no-underline hover:underline p-4"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
