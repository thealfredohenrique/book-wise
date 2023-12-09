import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { Binoculars, ChartLineUp, SignIn } from "@phosphor-icons/react";
import logo from "@/assets/logo.svg";
import {
  SidebarEllipse,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarWrapper,
} from "./styles";

export default function Sidebar() {
  const router = useRouter();

  return (
    <SidebarWrapper>
      <Image
        src={logo}
        alt="BookWise logo"
        width={128}
        height={32}
        quality={100}
        priority
      />

      <SidebarMenu>
        <SidebarMenuItem isSelected={router.route === "/home"}>
          <Link href="/home">
            <ChartLineUp size={24} />
            Início
          </Link>
        </SidebarMenuItem>
        <SidebarMenuItem isSelected={router.route === "/explore"}>
          <Link href="/explore">
            <Binoculars size={24} />
            Explorar
          </Link>
        </SidebarMenuItem>
      </SidebarMenu>

      <SidebarFooter>
        <Link href="/">
          Fazer login
          <SignIn size={20} weight="bold" />
        </Link>
      </SidebarFooter>

      <SidebarBackground />
    </SidebarWrapper>
  );
}

function SidebarBackground() {
  return (
    <>
      <SidebarEllipse color="purple" size="lg" css={{ left: 64, top: 265 }} />
      <SidebarEllipse
        color="green"
        size="lg"
        css={{ left: -106, bottom: -48 }}
      />
      <SidebarEllipse color="purple" size="sm" css={{ left: 106, top: -120 }} />
      <SidebarEllipse color="green" size="sm" css={{ left: -90, top: -120 }} />
    </>
  );
}
