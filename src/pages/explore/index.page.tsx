import { ReactElement, useState } from "react";
import { GetServerSideProps } from "next";
import { Binoculars, MagnifyingGlass } from "@phosphor-icons/react";
import { NextPageWithLayout } from "../_app.page";
import { api } from "@/lib/axios";
import Layout from "@/components/Layout";
import {
  ExploreCategories,
  ExploreCategory,
  ExploreHeader,
  ExploreSearch,
  ExploreTitle,
  ExploreWrapper,
} from "./styles";

interface Category {
  id: string;
  name: string;
}

interface ExploreProps {
  categories: Category[];
}

const Explore: NextPageWithLayout<ExploreProps> = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );

  function handleChangeSelectedCategory(value: Category | null) {
    setSelectedCategory(value);
  }

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

      <ExploreCategories>
        <ExploreCategory isSelected={!selectedCategory}>
          <button onClick={() => handleChangeSelectedCategory(null)}>
            Tudo
          </button>
        </ExploreCategory>

        {categories.map((category) => (
          <ExploreCategory
            key={category.id}
            isSelected={category.id === selectedCategory?.id}
          >
            <button onClick={() => handleChangeSelectedCategory(category)}>
              {category.name}
            </button>
          </ExploreCategory>
        ))}
      </ExploreCategories>
    </ExploreWrapper>
  );
};

Explore.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const categories = await api.get("/categories");

  return {
    props: {
      categories: categories.data,
    },
  };
};

export default Explore;
