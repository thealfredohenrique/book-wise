import Image from "next/image";
import { signIn } from "next-auth/react";
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
          <LoginAuthButton onClick={() => signIn("google")}>
            <Image
              src={googleIcon}
              alt=""
              width={24}
              height={24}
              quality={100}
            />
            Entrar com Google
          </LoginAuthButton>
          <LoginAuthButton onClick={() => signIn("github")}>
            <Image
              src={githubIcon}
              alt=""
              width={24}
              height={24}
              quality={100}
            />
            Entrar com GitHub
          </LoginAuthButton>
          <LoginAuthButton>
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
