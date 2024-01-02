import Image from "next/image";
import { Star } from "@phosphor-icons/react";
import {
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
}

export default function BookCard({
  title,
  author,
  coverURL,
  rate,
}: BookCardProps) {
  return (
    <BookCardWrapper>
      <Image src={coverURL} alt="Book cover picture" height={94} width={64} />

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
