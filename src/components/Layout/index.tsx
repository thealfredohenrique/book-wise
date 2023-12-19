import type { ReactNode } from "react";
import Sidebar from "../Sidebar";
import { LayoutWrapper } from "./styles";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <LayoutWrapper>
      <Sidebar />
      {children}
    </LayoutWrapper>
  );
}
