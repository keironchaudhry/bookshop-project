// src/mockData/posts.ts

export interface Post {
  id: number;
  title: string;
  author: string;
  description: string;
}

const mockPosts: Post[] = [
  {
    id: 1,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    description:
      "A classic novel about the experiences of a young man in New York City.",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description:
      "A powerful story of racial injustice and moral growth set in the American South.",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    description:
      "A dystopian novel set in a totalitarian society ruled by a single party that controls everything.",
  },
];

export default mockPosts;
