import localFont from "next/font/local";

export const satoshi = localFont({
  src: [
    { path: "/fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "/fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-satoshi",
});

export const zodiak = localFont({
  src: [
    { path: "/fonts/Zodiak-Bold.woff2", weight: "700", style: "normal" },
    { path: "/fonts/Zodiak-Regular.woff2", weight: "400", style: "normal" },
  ],
  variable: "--font-zodiak",
});
