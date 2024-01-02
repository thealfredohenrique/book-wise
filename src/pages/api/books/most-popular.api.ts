import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET") return res.status(405).end();

  const ratings = await prisma.rating.groupBy({
    by: ["book_id"],
    _avg: {
      rate: true,
    },
    orderBy: {
      _avg: {
        rate: "desc",
      },
    },
    take: 3,
  });

  const books = await prisma.book.findMany({
    select: {
      id: true,
      title: true,
      author: true,
      cover_url: true,
    },
    where: {
      id: {
        in: ratings.map((rating) => rating.book_id),
      },
    },
  });

  const response = books.map((book) => ({
    id: book.id,
    title: book.title,
    author: book.author,
    coverURL: book.cover_url,
    rate: ratings.find(({ book_id }) => book_id === book.id)?._avg.rate,
  }));

  return res.json(response);
}
