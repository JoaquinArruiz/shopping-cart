export interface ItemInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    image: string;
  };
  images: string[];
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
