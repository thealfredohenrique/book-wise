import { prisma } from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET") return res.status(405).end();

  const ratings = await prisma.rating.findMany({
    orderBy: {
      created_at: "desc",
    },
    include: {
      book: true,
      user: true,
    },
  });

  const response = ratings.map((rating) => ({
    id: rating.id,
    rate: rating.rate,
    description: rating.description,
    createdAt: rating.created_at,
    book: {
      title: rating.book.title,
      author: rating.book.author,
      coverURL: rating.book.cover_url,
    },
    user: {
      name: rating.user.name,
      avatarURL: rating.user.avatar_url,
    },
  }));

  return res.json(response);
}
