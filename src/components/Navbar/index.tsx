import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { Binoculars, ChartLineUp, SignIn } from "@phosphor-icons/react";
import logo from "@/assets/logo.svg";
import {
  NavbarEllipse,
  NavbarFooter,
  NavbarMenu,
  NavbarMenuItem,
  NavbarWrapper,
} from "./styles";

export default function Navbar() {
  const router = useRouter();

  return (
    <NavbarWrapper>
      <Image
        src={logo}
        alt="BookWise logo"
        width={128}
        height={32}
        quality={100}
        priority
      />

      <NavbarMenu>
        <NavbarMenuItem isSelected={router.route === "/home"}>
          <Link href="/home">
            <ChartLineUp size={24} />
            Início
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem isSelected={router.route === "/explore"}>
          <Link href="/explore">
            <Binoculars size={24} />
            Explorar
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>

      <NavbarFooter>
        <Link href="/">
          Fazer login
          <SignIn size={20} weight="bold" />
        </Link>
      </NavbarFooter>

      <NavbarBackground />
    </NavbarWrapper>
  );
}

function NavbarBackground() {
  return (
    <>
      <NavbarEllipse color="purple" size="lg" css={{ left: 64, top: 265 }} />
      <NavbarEllipse
        color="green"
        size="lg"
        css={{ left: -106, bottom: -48 }}
      />
      <NavbarEllipse color="purple" size="sm" css={{ left: 106, top: -120 }} />
      <NavbarEllipse color="green" size="sm" css={{ left: -90, top: -120 }} />
    </>
  );
}
