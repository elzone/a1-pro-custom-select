import "@/lib/styles/global.css";
import { ReactNode } from "react";
import { Sofia_Sans } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { cn } from "@/lib/utils/utils";

const sofiaSans = Sofia_Sans({
  preload: true,
  display: "swap",
  subsets: ["latin"],
  style: ["normal"],
  weight: ["600"],
  variable: "--font-sofiaSans",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={cn("bg-black800 font-sans antialiased", sofiaSans.variable)}
      >
        <NextTopLoader color={"#fdc127"} showSpinner={false} />
        <div className={`flex justify-center h-screen items-center`}>
          {children}
        </div>
        <div id={`portals`} />
      </body>
    </html>
  );
}
