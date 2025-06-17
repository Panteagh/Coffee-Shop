export interface Children {
  children: React.ReactNode;
}

export interface Product {
  price: number;
  name: string;
  image: string;
  description: string;
  category?: string;
  id?: string;
}
