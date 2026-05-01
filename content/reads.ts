export type Read = {
  title: string;
  author: string;
  kind: "book" | "article";
  note?: string;
  href?: string;
};

export const reads: Read[] = [
  // TODO: add favorite books and articles
  // Example:
  // {
  //   title: "The Hard Thing About Hard Things",
  //   author: "Ben Horowitz",
  //   kind: "book",
  //   note: "The chapter on demoting a friend is required reading.",
  //   href: "https://www.benhorowitz.com/the-hard-thing-about-hard-things",
  // },
];
