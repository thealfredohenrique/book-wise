import { ReactElement, useState } from "react";
import { GetServerSideProps } from "next";
import { Binoculars, MagnifyingGlass } from "@phosphor-icons/react";
import { NextPageWithLayout } from "../_app.page";
import { api } from "@/lib/axios";
import BookCard from "@/components/BookCard";
import Layout from "@/components/Layout";
import {
  ExploreBooks,
  ExploreCategories,
  ExploreCategory,
  ExploreHeader,
  ExploreSearch,
  ExploreTitle,
  ExploreWrapper,
} from "./styles";

interface Book {
  id: string;
  title: string;
  author: string;
  coverURL: string;
  categories: string[];
  rate: number;
}

interface Category {
  id: string;
  name: string;
}

interface ExploreProps {
  books: Book[];
  categories: Category[];
}

const Explore: NextPageWithLayout<ExploreProps> = ({ books, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  function handleChangeSelectedCategory(value: string | null) {
    setSelectedCategory(value);
  }

  const filteredBooks = selectedCategory
    ? books.filter((book) => book.categories.includes(selectedCategory))
    : books;

  return (
    <ExploreWrapper>
      <ExploreHeader>
        <ExploreTitle>
          <Binoculars size={32} />
          <h1>Explorar</h1>
        </ExploreTitle>

        <ExploreSearch>
          <input type="search" placeholder="Buscar livro ou autor" />
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
            isSelected={category.id === selectedCategory}
          >
            <button onClick={() => handleChangeSelectedCategory(category.id)}>
              {category.name}
            </button>
          </ExploreCategory>
        ))}
      </ExploreCategories>

      <ExploreBooks>
        {filteredBooks.map((book) => (
          <BookCard key={book.id} {...book} size="lg" />
        ))}
      </ExploreBooks>
    </ExploreWrapper>
  );
};

Explore.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const [books, categories] = await Promise.all([
    api.get("/books"),
    api.get("/categories"),
  ]);

  return {
    props: {
      books: books.data,
      categories: categories.data,
    },
  };
};

export default Explore;
