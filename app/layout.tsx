import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Prasanth V — GIS & Geoinformatics Engineer",
  description:
    "Portfolio of Prasanth V — GIS professional specialising in Remote Sensing, Spatial Analysis, and Environmental Hazard Mapping. M.Tech Geological Technology & Geoinformatics, Bharathidasan University.",
  metadataBase: new URL("https://prasanthv.dev"),
  keywords: ["GIS","Remote Sensing","Geoinformatics","Flood Mapping","ArcGIS","QGIS","Python","Spatial Analysis"],
  authors: [{ name: "Prasanth V" }],
  openGraph: {
    title: "Prasanth V — GIS & Geoinformatics Engineer",
    description: "Decoding the Earth — one spatial dataset at a time.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <div className="noise-overlay" aria-hidden="true" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
