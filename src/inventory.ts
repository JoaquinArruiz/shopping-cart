export interface ItemInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category?: {
    id: number;
    name: string;
    image: string;
  };
}

export const inventory = [
  {
    id: 0,
    title: "Calza",
    price: 10,
    description: "etc",
    category: {
      id: 0,
      name: "calza",
      image: "",
    },
    images: [""],
  },
];
