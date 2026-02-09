import { Footer } from "../footer";
import { Header } from "../header";
import { Inter, PT_Sans_Caption } from "next/font/google";

type LayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});
const ptSansCaption = PT_Sans_Caption({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-sans",
});

export function Layout({ children }: LayoutProps) {
  return (
    <div
      className={`${inter.className} ${ptSansCaption.className} font-inter relative flex min-h-screen flex-col bg-gray-700`}
    >
      <Header />

      <main className="mt-10 mb-12 flex flex-1 flex-col">{children}</main>

      <Footer />
    </div>
  );
}
