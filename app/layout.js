import "./globals.css";
import { Inter } from "next/font/google";
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ALERNAL — Architecture of Tomorrow",
  description: "Creamos tecnología que une lo imposible con lo necesario.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ReactQueryProvider>
          {/* @ts-expect-error Async import */}
          <ClientShellWrapper>{children}</ClientShellWrapper>
        </ReactQueryProvider>
      </body>
    </html>
  );
}

async function ClientShellWrapper({ children }) {
  const { default: ClientShell } = await import("@/components/ClientShell");
  return <ClientShell>{children}</ClientShell>;
}
