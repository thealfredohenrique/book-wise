import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET") return res.status(405).end();

  const books = await prisma.book.findMany({
    include: {
      categories: true,
      ratings: true,
    },
  });

  const response = books.map((book) => {
    const { categories, ratings } = book;

    return {
      id: book.id,
      title: book.title,
      author: book.author,
      coverURL: book.cover_url,
      categories: categories.map((category) => category.category_id),
      rate: ratings.reduce((sum, e) => sum + e.rate, 0) / ratings.length,
    };
  });

  return res.json(response);
}
