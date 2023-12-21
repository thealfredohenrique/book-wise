import Image from "next/image";
import { Star } from "@phosphor-icons/react";
import dayjs from "dayjs";
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

interface ArticleProps {
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
}

export default function Article({
  rate,
  description,
  createdAt,
  book,
  user,
}: ArticleProps) {
  return (
    <ArticleWrapper>
      <ArticleHeader>
        <ArticleAvatar>
          <Image
            src={user.avatarURL}
            alt="Reviewer profile picture"
            height={40}
            width={40}
          />
        </ArticleAvatar>

        <ArticleInfo>
          <strong>{user.name}</strong>
          <span>{dayjs(createdAt).fromNow()}</span>
        </ArticleInfo>

        <ArticleRating>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={16} weight={i < rate ? "fill" : "regular"} />
          ))}
        </ArticleRating>
      </ArticleHeader>

      <ArticleContent>
        <Image
          src={book.coverURL}
          alt="Book cover picture"
          height={152}
          width={108}
        />
        <ArticleContentData>
          <ArticleContentHeader>
            <strong>{book.title}</strong>
            <span>{book.author}</span>
          </ArticleContentHeader>

          <ArticleContentDescription>{description}</ArticleContentDescription>
        </ArticleContentData>
      </ArticleContent>
    </ArticleWrapper>
  );
}
