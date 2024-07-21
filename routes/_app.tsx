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
              src: url(${asset('/fonts/warnock-pro-i.woff')}) format('woff');
              font-style: italic;
              font-weight: 300;
              font-display: swap;
            };
            @font-face {
              font-family: 'warnock-pro';
              src: url(${asset('/fonts/warnock-pro.woff')}) format('woff');
              font-style: normal;
              font-weight: 300;
              font-display: swap;
            };
            @font-face {
              font-family: 'tablet-gothic';
              src: url(${asset('/fonts/tablet-gothic3.woff')}) format('woff');
              font-style: normal;
              font-weight: 400;
              font-display: swap;
            };
            @font-face {
              font-family: 'tablet-gothic';
              src: url(${asset('/fonts/tablet-gothic2.woff')}) format('woff');
              font-style: normal;
              font-weight: 600;
              font-display: swap;
            };
            @font-face {
              font-family: 'tablet-gothic';
              src: url(${asset('/fonts/tablet-gothic.woff')}) format('woff'), url(${asset('/fonts/tablet-gothic2.woff')}) format('woff');
              font-style: normal;
              font-weight: 700;
              font-display: swap;
            };


            @font-face {
              font-family: 'tablet-gothic-condensed';
              font-style: normal;
              font-weight: 400, 600, 700;
              font-display: swap;
              src: url(${asset("/fonts/tablet-gothic-condensed2.woff")}) format('woff');
            };

            @font-face {
              font-family: 'tablet-gothic-condensed';
              font-style: normal;
              font-weight: 800;
              font-display: swap;
              src: url(${asset("/fonts/tablet-gothic-condensed.woff")}) format('woff');
            };
          `
        }}
      />
    </>
  );
});
