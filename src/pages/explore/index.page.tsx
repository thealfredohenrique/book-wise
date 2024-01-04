import { ReactElement } from "react";
import { Binoculars, MagnifyingGlass } from "@phosphor-icons/react";
import { NextPageWithLayout } from "../_app.page";
import Layout from "@/components/Layout";
import {
  ExploreHeader,
  ExploreSearch,
  ExploreTitle,
  ExploreWrapper,
} from "./styles";

const Explore: NextPageWithLayout = () => {
  return (
    <ExploreWrapper>
      <ExploreHeader>
        <ExploreTitle>
          <Binoculars size={32} />
          <h1>Explorar</h1>
        </ExploreTitle>

        <ExploreSearch>
          <input type="text" placeholder="Buscar livro ou autor" />
          <MagnifyingGlass size={20} />
        </ExploreSearch>
      </ExploreHeader>
    </ExploreWrapper>
  );
};

Explore.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Explore;
