import type { ReactNode } from "react";
import Navbar from "../Navbar";
import { LayoutWrapper } from "./styles";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <LayoutWrapper>
      <Navbar />
      {children}
    </LayoutWrapper>
  );
}
