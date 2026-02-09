import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevMaster AI - Transform Your Full Stack Development Business",
  description: "Build your development business to enterprise level with AI-powered image and video generation, AI automation, and advanced features. Dark theme UI with modern design.",
  keywords: ["AI", "Full Stack Developer", "Image Generator", "Video Generator", "AI Automation", "Web App"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
