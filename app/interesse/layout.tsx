import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  alternates: {
    canonical: "/interesse",
  },
};

export default function InteresseLayout({ children }: { children: ReactNode }) {
  return children;
}
