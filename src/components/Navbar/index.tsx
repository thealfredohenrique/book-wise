import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import {
  Binoculars,
  ChartLineUp,
  SignIn,
  SignOut,
  User,
} from "@phosphor-icons/react";
import logo from "@/assets/logo.svg";
import {
  NavbarAvatar,
  NavbarEllipse,
  NavbarFooter,
  NavbarMenu,
  NavbarMenuItem,
  NavbarSignInOut,
  NavbarWrapper,
} from "./styles";

export default function Navbar() {
  const router = useRouter();
  const session = useSession();
  const isSignedIn = session.status === "authenticated";

  async function handleSignOut() {
    await signOut();
  }

  async function handleSignIn() {
    await router.push("/");
  }

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
        {isSignedIn && (
          <NavbarMenuItem isSelected={router.route === "/profile"}>
            <Link href="/profile">
              <User size={24} />
              Perfil
            </Link>
          </NavbarMenuItem>
        )}
      </NavbarMenu>

      <NavbarFooter>
        {isSignedIn ? (
          <NavbarSignInOut onClick={handleSignOut}>
            <NavbarAvatar>
              <Image
                src={session.data.user.avatar_url}
                alt="Profile picture"
                width={32}
                height={32}
              />
            </NavbarAvatar>
            {session.data.user.name.split(" ")[0]}
            <SignOut size={20} weight="bold" color="#F75A68" />
          </NavbarSignInOut>
        ) : (
          <NavbarSignInOut onClick={handleSignIn}>
            Fazer login
            <SignIn size={20} weight="bold" color="#F8F9FC" />
          </NavbarSignInOut>
        )}
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
