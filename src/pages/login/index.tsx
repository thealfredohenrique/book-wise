import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { signIn } from "next-auth/react";
import { authOptions } from "../api/auth/[...nextauth].api";
import heroImage from "@/assets/hero.png";
import logo from "@/assets/logo.svg";
import githubIcon from "@/assets/github-icon.svg";
import googleIcon from "@/assets/google-icon.svg";
import rocketIcon from "@/assets/rocket-icon.svg";
import {
  LoginAuth,
  LoginAuthButton,
  LoginAuthOptions,
  LoginAuthWelcome,
  LoginHero,
  LoginWrapper,
} from "./styles";

export default function Login() {
  const router = useRouter();

  async function handleNavigateToHome() {
    await router.push("/home");
  }

  async function handleSignIn(provider: "google" | "github") {
    await signIn(provider);
  }

  return (
    <LoginWrapper>
      <LoginHero>
        <Image
          src={heroImage}
          alt=""
          width={598}
          height={912}
          quality={100}
          priority
        />
        <Image
          src={logo}
          alt="BookWise logo"
          width={232}
          height={58}
          quality={100}
          priority
        />
      </LoginHero>

      <LoginAuth>
        <LoginAuthWelcome>
          <h1>Boas vindas!</h1>
          <p>Faça seu login ou acesse como visitante.</p>
        </LoginAuthWelcome>

        <LoginAuthOptions>
          <LoginAuthButton onClick={() => handleSignIn("google")}>
            <Image
              src={googleIcon}
              alt=""
              width={24}
              height={24}
              quality={100}
            />
            Entrar com Google
          </LoginAuthButton>
          <LoginAuthButton onClick={() => handleSignIn("github")}>
            <Image
              src={githubIcon}
              alt=""
              width={24}
              height={24}
              quality={100}
            />
            Entrar com GitHub
          </LoginAuthButton>
          <LoginAuthButton onClick={handleNavigateToHome}>
            <Image
              src={rocketIcon}
              alt=""
              width={24}
              height={24}
              quality={100}
            />
            Acessar como visitante
          </LoginAuthButton>
        </LoginAuthOptions>
      </LoginAuth>
    </LoginWrapper>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    return {
      redirect: {
        destination: "/home",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
