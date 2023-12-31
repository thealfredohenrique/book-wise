import { Category } from "./categories";

export interface Book {
  id: string;
  title: string;
  author: string;
  summary: string;
  cover_url: string;
  total_pages: number;
  categories: Category[];
}

export const books: Book[] = [
  {
    id: "c8176d86-896a-4c21-9219-6bb28cccaa5f",
    title: "14 Hábitos de Desenvolvedores Altamente Produtivos",
    author: "Zeno Rocha",
    summary:
      "Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget",
    cover_url:
      "/images/books/14-habitos-de-desenvolvedores-altamente-produtivos.png",
    total_pages: 160,
    categories: [
      {
        id: "f1a50507-0aa7-4245-8a5c-0d0de14e9d6d",
        name: "Educação",
      },
      {
        id: "c9f22067-4978-4a24-84a1-7d37f343dfc2",
        name: "Programação",
      },
    ],
  },
  {
    id: "375948a7-bca3-4b59-9f97-bfcde036b4ca",
    title: "O Hobbit",
    author: "J.R.R. Tolkien",
    summary:
      "Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh",
    cover_url: "/images/books/o-hobbit.png",
    total_pages: 360,
    categories: [
      {
        id: "8c4a4a4d-cbc4-4d2c-bb46-e95b0a536e09",
        name: "Ficção",
      },
      {
        id: "e9c6d3f6-f3ec-4c52-ae28-6adcbab6ee67",
        name: "Aventura",
      },
    ],
  },
  {
    id: "86596503-369b-4614-bacf-11c9bb73e779",
    title: "O guia do mochileiro das galáxias",
    author: "Douglas Adams",
    summary:
      "Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget",
    cover_url: "/images/books/o-guia-do-mochileiro-das-galaxias.png",
    total_pages: 250,
    categories: [
      {
        id: "8c4a4a4d-cbc4-4d2c-bb46-e95b0a536e09",
        name: "Ficção",
      },
      {
        id: "2e65c193-325a-40c3-98f3-6c13e9b75b02",
        name: "Geek",
      },
    ],
  },
  {
    id: "d0d70b05-d48f-4d83-b1e8-0b4dd984c97d",
    title: "A revolução dos bichos",
    author: "George Orwell",
    summary:
      "Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget",
    cover_url: "/images/books/a-revolucao-dos-bixos.png",
    total_pages: 350,
    categories: [
      {
        id: "a1d0ee25-9c9a-49c8-84eb-7af1e0dd356d",
        name: "Alegoria",
      },
      {
        id: "997f8a10-21fb-4c80-bd16-17e8b79a31a3",
        name: "Fábula",
      },
    ],
  },
  {
    id: "48b86ac2-014e-401d-bcbb-331ce5f4a457",
    title: "O fim da eternidade",
    author: "Isaac Asimov",
    summary:
      "Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget",
    cover_url: "/images/books/o-fim-da-eternidade.png",
    total_pages: 165,
    categories: [
      {
        id: "8c4a4a4d-cbc4-4d2c-bb46-e95b0a536e09",
        name: "Ficção",
      },
      {
        id: "70efc33d-7d6b-4db4-bab6-524c4c4b2e2c",
        name: "Romance",
      },
    ],
  },
  {
    id: "e688c24f-d14d-4607-a12e-90e6e367398d",
    title: "Entendendo Algoritmos",
    author: "Aditya Y. Bhargava",
    summary:
      "Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget",
    cover_url: "/images/books/entendendo-algoritmos.png",
    total_pages: 165,
    categories: [
      {
        id: "c9f22067-4978-4a24-84a1-7d37f343dfc2",
        name: "Programação",
      },
      {
        id: "f1a50507-0aa7-4245-8a5c-0d0de14e9d6d",
        name: "Educação",
      },
    ],
  },
  {
    id: "0440ad7d-230e-4573-b455-84ca38b5d339",
    title: "Código Limpo",
    author: "Robert C. Martin",
    summary:
      "Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget",
    cover_url: "/images/books/codigo-limpo.png",
    total_pages: 365,
    categories: [
      {
        id: "c9f22067-4978-4a24-84a1-7d37f343dfc2",
        name: "Programação",
      },
      {
        id: "f1a50507-0aa7-4245-8a5c-0d0de14e9d6d",
        name: "Educação",
      },
    ],
  },
  {
    id: "14f410df-b28a-4e72-b1b4-363e26e160dd",
    title: "O poder do hábito",
    author: "Charles Duhigg",
    summary:
      "Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget",
    cover_url: "/images/books/o-poder-do-habito.png",
    total_pages: 288,
    categories: [
      {
        id: "a4d63d4e-f8ad-4a60-b7b9-9d925a2a8a92",
        name: "Autoajuda",
      },
      {
        id: "f1a50507-0aa7-4245-8a5c-0d0de14e9d6d",
        name: "Educação",
      },
    ],
  },
  {
    id: "d2870ad0-3312-4ac2-af9f-76af6565587d",
    title: "Arquitetura limpa",
    author: "Robert C. Martin",
    summary:
      "Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget",
    cover_url: "/images/books/arquitetura-limpa.png",
    total_pages: 288,
    categories: [
      {
        id: "c9f22067-4978-4a24-84a1-7d37f343dfc2",
        name: "Programação",
      },
      {
        id: "f1a50507-0aa7-4245-8a5c-0d0de14e9d6d",
        name: "Educação",
      },
    ],
  },
  {
    id: "4fd2b389-b211-40b5-9797-f78cbb985645",
    title: "Histórias extraordinárias",
    author: "Edgar Allan Poe",
    summary:
      "Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget",
    cover_url: "/images/books/historias-extraordinarias.png",
    total_pages: 332,
    categories: [
      {
        id: "8c4a4a4d-cbc4-4d2c-bb46-e95b0a536e09",
        name: "Ficção",
      },
      {
        id: "7c8dc74a-2e03-4d72-96de-822e332e5530",
        name: "Suspense",
      },
    ],
  },
  {
    id: "6de9f6b8-5ff4-4e06-b9f4-843eca462803",
    title: "Refatoração",
    author: "Martin Fowler",
    summary:
      "Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget",
    cover_url: "/images/books/refatoracao.png",
    total_pages: 332,
    categories: [
      {
        id: "c9f22067-4978-4a24-84a1-7d37f343dfc2",
        name: "Programação",
      },
      {
        id: "f1a50507-0aa7-4245-8a5c-0d0de14e9d6d",
        name: "Educação",
      },
    ],
  },
  {
    id: "d0590f9a-dd89-42fd-9bbb-bf26c2e4dcf9",
    title: "Domain-Driven Design",
    author: "Eric Evans",
    summary:
      "Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget",
    cover_url: "/images/books/domain-driven-design.png",
    total_pages: 288,
    categories: [
      {
        id: "c9f22067-4978-4a24-84a1-7d37f343dfc2",
        name: "Programação",
      },
      {
        id: "a2891eaa-6d9e-48d8-a86a-10aa017d3d3f",
        name: "Arquitetura",
      },
    ],
  },
  {
    id: "1d5cdbdc-b90f-40d5-8fe9-d4923ae12dbd",
    title: "Viagem ao Centro da Terra",
    author: "Julio Verne",
    summary:
      "Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget",
    cover_url: "/images/books/viagem-ao-centro-da-terra.png",
    total_pages: 288,
    categories: [
      {
        id: "70efc33d-7d6b-4db4-bab6-524c4c4b2e2c",
        name: "Romance",
      },
      {
        id: "8c4a4a4d-cbc4-4d2c-bb46-e95b0a536e09",
        name: "Ficção",
      },
    ],
  },
  {
    id: "404e47f8-da53-44fd-ab53-37ed171c3a9f",
    title: "Fragmentos do Horror",
    author: "Junji Ito",
    summary:
      "Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget",
    cover_url: "/images/books/fragmentos-do-horror.png",
    total_pages: 144,
    categories: [
      {
        id: "8c4a4a4d-cbc4-4d2c-bb46-e95b0a536e09",
        name: "Ficção",
      },
      {
        id: "a0a61b53-37d7-48ec-9b92-6db074f6d9c9",
        name: "Terror",
      },
    ],
  },
  {
    id: "66cb0f47-7e20-4492-b640-9c020fcae6f2",
    title: "O Programador Pragmático",
    author: "Andrew Hunt",
    summary:
      "Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget",
    cover_url: "/images/books/o-programador-pragmatico.png",
    total_pages: 205,
    categories: [
      {
        id: "c9f22067-4978-4a24-84a1-7d37f343dfc2",
        name: "Programação",
      },
      {
        id: "f1a50507-0aa7-4245-8a5c-0d0de14e9d6d",
        name: "Educação",
      },
    ],
  },
];
