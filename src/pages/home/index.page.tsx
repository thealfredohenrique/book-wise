import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app.page";
import { ChartLineUp } from "@phosphor-icons/react";
import Layout from "@/components/Layout";
import Article from "./components/Article";
import {
  HomeAside,
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

      <HomeAside></HomeAside>
    </HomeWrapper>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
