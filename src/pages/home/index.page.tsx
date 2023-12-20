import type { ReactElement } from "react";
import Link from "next/link";
import { CaretRight, ChartLineUp } from "@phosphor-icons/react";
import type { NextPageWithLayout } from "../_app.page";
import Layout from "@/components/Layout";
import Article from "./components/Article";
import BookCard from "./components/BookCard";
import {
  HomeAside,
  HomeAsideHeader,
  HomeContent,
  HomeMain,
  HomeTitle,
  HomeWrapper,
} from "./styles";

const Home: NextPageWithLayout = () => {
  return (
    <HomeWrapper>
      <HomeMain>
        <HomeTitle>
          <ChartLineUp size={32} />
          <h1>Início</h1>
        </HomeTitle>

        <HomeContent>
          <p>Avaliações mais recentes</p>

          <Article />
          <Article />
          <Article />
        </HomeContent>
      </HomeMain>

      <HomeAside>
        <HomeAsideHeader>
          <p>Livros populares</p>

          <Link href="/explore">
            Ver todos
            <CaretRight size={16} />
          </Link>
        </HomeAsideHeader>

        <BookCard />
        <BookCard />
        <BookCard />
      </HomeAside>
    </HomeWrapper>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
