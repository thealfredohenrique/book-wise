import Image from "next/image";
import { Star } from "@phosphor-icons/react";
import {
  BookCardDetails,
  BookCardRating,
  BookCardTitle,
  BookCardWrapper,
} from "./styles";

export default function BookCard() {
  return (
    <BookCardWrapper>
      <Image
        src="/images/books/a-revolucao-dos-bixos.png"
        alt=""
        height={94}
        width={64}
      />

      <BookCardDetails>
        <BookCardTitle>
          <strong>A revolução dos bichos</strong>
          <span>George Orwell</span>
        </BookCardTitle>

        <BookCardRating>
          <Star size={16} weight="fill" />
          <Star size={16} weight="fill" />
          <Star size={16} weight="fill" />
          <Star size={16} weight="fill" />
          <Star size={16} />
        </BookCardRating>
      </BookCardDetails>
    </BookCardWrapper>
  );
}
