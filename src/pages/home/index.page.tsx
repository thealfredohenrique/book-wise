import type { ReactElement } from "react";
import type { GetServerSideProps } from "next";
import Link from "next/link";
import { CaretRight, ChartLineUp } from "@phosphor-icons/react";
import type { NextPageWithLayout } from "../_app.page";
import { api } from "@/lib/axios";
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

interface HomeProps {
  ratings: {
    id: string;
    rate: number;
    description: string;
    createdAt: string;
    book: {
      title: string;
      author: string;
      coverURL: string;
    };
    user: {
      name: string;
      avatarURL: string;
    };
  }[];
}

const Home: NextPageWithLayout<HomeProps> = ({ ratings }) => {
  return (
    <HomeWrapper>
      <HomeMain>
        <HomeTitle>
          <ChartLineUp size={32} />
          <h1>Início</h1>
        </HomeTitle>

        <HomeContent>
          <p>Avaliações mais recentes</p>

          {ratings.map((rating) => (
            <Article
              key={rating.id}
              rate={rating.rate}
              description={rating.description}
              createdAt={rating.createdAt}
              book={rating.book}
              user={rating.user}
            />
          ))}
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

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get("/ratings");

  return {
    props: {
      ratings: response.data,
    },
  };
};

export default Home;
