// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_app from "./routes/_app.tsx";
import * as $AumentoDePadding from "./islands/AumentoDePadding.tsx";
import * as $ButtonFade from "./islands/ButtonFade.tsx";
import * as $Card from "./islands/Card.tsx";
import * as $ImageFade from "./islands/ImageFade.tsx";
import * as $LinkClient from "./islands/LinkClient.tsx";
import * as $TextFade from "./islands/TextFade.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_app.tsx": $_app,
  },
  islands: {
    "./islands/AumentoDePadding.tsx": $AumentoDePadding,
    "./islands/ButtonFade.tsx": $ButtonFade,
    "./islands/Card.tsx": $Card,
    "./islands/ImageFade.tsx": $ImageFade,
    "./islands/LinkClient.tsx": $LinkClient,
    "./islands/TextFade.tsx": $TextFade,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
