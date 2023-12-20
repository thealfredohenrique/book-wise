import Image from "next/image";
import { Star } from "@phosphor-icons/react";
import {
  ArticleAvatar,
  ArticleContent,
  ArticleContentData,
  ArticleContentDescription,
  ArticleContentHeader,
  ArticleHeader,
  ArticleInfo,
  ArticleRating,
  ArticleWrapper,
} from "./styles";

export default function Article() {
  return (
    <ArticleWrapper>
      <ArticleHeader>
        <ArticleAvatar>
          <Image
            src="https://github.com/thealfredohenrique.png"
            alt=""
            height={40}
            width={40}
          />
        </ArticleAvatar>

        <ArticleInfo>
          <strong>Alfredo Henrique</strong>
          <span>Hoje</span>
        </ArticleInfo>

        <ArticleRating>
          <Star size={16} weight="fill" />
          <Star size={16} weight="fill" />
          <Star size={16} weight="fill" />
          <Star size={16} weight="fill" />
          <Star size={16} />
        </ArticleRating>
      </ArticleHeader>

      <ArticleContent>
        <Image
          src="/images/books/o-guia-do-mochileiro-das-galaxias.png"
          alt=""
          height={152}
          width={108}
        />
        <ArticleContentData>
          <ArticleContentHeader>
            <strong>O guia do mochileiro das galáxias</strong>
            <span>Douglas Adams</span>
          </ArticleContentHeader>

          <ArticleContentDescription>
            Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
            Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit
            porta eget nec vitae sit vulputate eget
          </ArticleContentDescription>
        </ArticleContentData>
      </ArticleContent>
    </ArticleWrapper>
  );
}
