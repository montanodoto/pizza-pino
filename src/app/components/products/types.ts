import { ReactNode } from "react";

export type ProductItem = {
  calorie_text: { line: any };
  d_image: string;
  description: string;
  dm_image: {};
  free_items: string;
  long_desc: string;
  m_image: {};
  price: string;
  product_id: string;
  tag: {};
  topping_price: string;
  avail_sizes: {
    description: string;
    free_items: string;
    long_desc: string;
    price: string;
    product_id: string;
    size: string;
    topping_price: string;
  }[];
};

export type ProductProps = {
  opened_dropdown_index: number;
  // products: {
  //   subgroup: {
  //     name: string;
  //     d_image: string;
  //     m_image: string;
  //     items: { item: ProductItem[] };
  //   };
  // };
  products: { [idx: string]: any }[];
};

export type ProductItemProps = {
  title: string;
  description: string;
  price?: ReactNode;
  imageUrl: string;
  altText: string;
};
