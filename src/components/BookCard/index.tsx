import { Star } from "@phosphor-icons/react";
import {
  BookCardCover,
  BookCardDetails,
  BookCardRating,
  BookCardTitle,
  BookCardWrapper,
} from "./styles";

interface BookCardProps {
  title: string;
  author: string;
  coverURL: string;
  rate: number;
  size: "md" | "lg";
}

export default function BookCard({
  title,
  author,
  coverURL,
  rate,
  size,
}: BookCardProps) {
  return (
    <BookCardWrapper>
      <BookCardCover
        src={coverURL}
        alt="Foto da capa do livro"
        height={152}
        width={108}
        size={size}
      />

      <BookCardDetails>
        <BookCardTitle>
          <strong>{title}</strong>
          <span>{author}</span>
        </BookCardTitle>

        <BookCardRating>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={16} weight={i < rate ? "fill" : "regular"} />
          ))}
        </BookCardRating>
      </BookCardDetails>
    </BookCardWrapper>
  );
}
