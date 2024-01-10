import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET") return res.status(405).end();

  const books = await prisma.book.findMany();
  const ratings = await prisma.rating.groupBy({
    by: ["book_id"],
    _avg: {
      rate: true,
    },
  });

  const response = books.map((book) => ({
    id: book.id,
    title: book.title,
    author: book.author,
    coverURL: book.cover_url,
    rate: ratings.find((rating) => rating.book_id === book.id)?._avg.rate,
  }));

  return res.json(response);
}
