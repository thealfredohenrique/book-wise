import { PrismaClient } from "@prisma/client";
import { books } from "./mockups/books";
import { categories } from "./mockups/categories";
import { ratings } from "./mockups/ratings";
import { users } from "./mockups/users";

const prisma = new PrismaClient();

async function main() {
  await prisma.rating.deleteMany();
  await prisma.user.deleteMany();
  await prisma.categoriesOnBooks.deleteMany();
  await prisma.book.deleteMany();
  await prisma.category.deleteMany();

  const categoriesSeed = categories.map((category) => {
    return prisma.category.create({
      data: {
        id: category.id,
        name: category.name,
      },
    });
  });

  const booksSeed = books.map((book) => {
    return prisma.book.create({
      data: {
        id: book.id,
        title: book.title,
        author: book.author,
        summary: book.summary,
        cover_url: book.cover_url,
        total_pages: book.total_pages,
        categories: {
          create: [
            ...book.categories.map((category) => ({
              category: {
                connect: {
                  id: category.id,
                },
              },
            })),
          ],
        },
      },
    });
  });

  const usersSeed = users.map((user) => {
    return prisma.user.create({
      data: {
        id: user.id,
        name: user.name,
        avatar_url: user.avatar_url,
      },
    });
  });

  const ratingsSeed = ratings.map((rating) => {
    return prisma.rating.create({
      data: {
        id: rating.id,
        rate: rating.rate,
        description: rating.description,
        user: {
          connect: {
            id: rating.user_id,
          },
        },
        book: {
          connect: {
            id: rating.book_id,
          },
        },
      },
    });
  });

  await prisma.$transaction([
    ...categoriesSeed,
    ...booksSeed,
    ...usersSeed,
    ...ratingsSeed,
  ]);
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
