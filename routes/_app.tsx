import { asset, Head } from "$fresh/runtime.ts";
import { defineApp } from "$fresh/server.ts";
import { Context } from "deco/deco.ts";
import Theme from "../sections/Theme/Theme.tsx";

export default defineApp(async (_req, ctx) => {
  const revision = await Context.active().release?.revision();

  return (
    <>
      {/* Include default fonts and css vars */}
      <Theme colorScheme="any" />

      {/* Include Icons and manifest */}
      <Head>
        {/* Enable View Transitions API */}
        <style
          dangerouslySetInnerHTML={{
            __html: `@view-transition { navigation: auto; }`,
          }}
        />

        {/* Tailwind v3 CSS file */}
        <link
          href={asset(`/styles.css?revision=${revision}`)}
          rel="stylesheet"
        />

        {/* Web Manifest */}
        <link rel="manifest" href={asset("/site.webmanifest")} />
      </Head>

      {/* Rest of Preact tree */}
      <ctx.Component />

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @font-face {
              font-family: 'warnock-pro';
              src: url(${asset('/fonts/warnock-pro.woff')}) format('woff');
              font-style: normal;
              font-weight: 300;
              font-display: swap;
              font-stretch: normal;
            };
            @font-face {
              font-family: 'warnock-pro';
              src: url(${asset('/fonts/warnock-pro-i.woff')}) format('woff');
              font-style: italic;
              font-weight: 300;
              font-display: swap;
              font-stretch: normal;
            };
            @font-face {
              font-family: tablet-gothic-condensed;
              src: url(https://use.typekit.net/af/e6a1d5/00000000000000007735a1ee/30/d?subset_id=2&fvd=n7&v=3) format("woff");
              font-weight: 700;
              font-style: normal;
              font-stretch: normal;
              font-display: auto;
            }

            @font-face {
              font-family: tablet-gothic-condensed;
              src: url(https://use.typekit.net/af/7f85e2/00000000000000007735a1f3/30/d?subset_id=2&fvd=n8&v=3) format("woff");
              font-weight: 800;
              font-style: normal;
              font-stretch: normal;
              font-display: auto;
            }

            @font-face {
              font-family: tablet-gothic-condensed;
              src: url(https://use.typekit.net/af/b684d7/00000000000000007735a217/30/d?subset_id=2&fvd=i7&v=3) format("woff");
              font-weight: 700;
              font-style: italic;
              font-stretch: normal;
              font-display: auto;
            }

            @font-face {
              font-family: tablet-gothic-condensed;
              src: url(https://use.typekit.net/af/4e719b/00000000000000007735a21a/30/d?subset_id=2&fvd=i8&v=3) format("woff");
              font-weight: 800;
              font-style: italic;
              font-stretch: normal;
              font-display: auto;
            }

            @font-face {
              font-family: tablet-gothic;
              src: url(${asset('/fonts/tablet-gothic3.woff')}) format("woff");
              font-weight: 400;
              font-style: normal;
              font-stretch: normal;
              font-display: auto;
            }

            @font-face {
              font-family: tablet-gothic;
              src: url(${asset('/fonts/tablet-gothic2.woff')}) format("woff");
              font-weight: 600;
              font-style: normal;
              font-stretch: normal;
              font-display: auto;
            }

            @font-face {
              font-family: tablet-gothic;
              src: url(${asset('/fonts/tablet-gothic.woff')}) format("woff");
              font-weight: 700;
              font-style: normal;
              font-stretch: normal;
              font-display: auto;
            }

            @font-face {
              font-family: tablet-gothic;
              src: url(${asset('/fonts/tablet-gothic2-i.woff')}) format("woff");
              font-weight: 600;
              font-style: italic;
              font-stretch: normal;
              font-display: auto;
            }

            @font-face {
              font-family: tablet-gothic;
              src: url(https://use.typekit.net/af/f4ca7b/00000000000000007735a204/30/l?subset_id=2&fvd=i7&v=3) format("woff2"), url(https://use.typekit.net/af/f4ca7b/00000000000000007735a204/30/d?subset_id=2&fvd=i7&v=3) format("woff"), url(https://use.typekit.net/af/f4ca7b/00000000000000007735a204/30/a?subset_id=2&fvd=i7&v=3) format("opentype");
              font-weight: 700;
              font-style: italic;
              font-stretch: normal;
              font-display: auto;
            }

            @font-face {
              font-family: 'tablet-gothic-condensed';
              font-style: normal;
              font-weight: 400, 600, 700;
              font-display: swap;
              font-stretch: normal;
              src: url(${asset("/fonts/tablet-gothic-condensed2.woff")}) format('woff');
            };

            @font-face {
              font-family: 'tablet-gothic-condensed';
              font-style: normal;
              font-weight: 800;
              font-display: swap;
              font-stretch: normal;
              src: url(${asset("/fonts/tablet-gothic-condensed.woff")}) format('woff');
            };
          `
        }}
      />
    </>
  );
});
