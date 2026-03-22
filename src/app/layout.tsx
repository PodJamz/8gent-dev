import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://8gent.dev"),
  title: "8gent Code - Developer Resources",
  description:
    "I tested 39 coding benchmarks on free local models. 8 scored above 90. Open source autonomous coding agent - docs, installation, benchmarks.",
  openGraph: {
    title: "8gent Code - Developer Resources",
    description:
      "39 benchmarks, 8 domains scoring 90+, running on free local models. Open source autonomous coding agent.",
    url: "https://8gent.dev",
    siteName: "8gent Code",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "8gent Code - Developer Resources",
    description:
      "39 benchmarks, 8 domains scoring 90+, running on free local models.",
    creator: "@8gentapp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700;9..144,800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
