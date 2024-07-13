import { SxProps, Theme } from "@mui/material";

export type MySxProps = {
    [key: string]: SxProps<Theme>;
  };
  
export interface Product {
  id: number
  name: string
  description: string
  images: string[]
}

export interface ProductsData{
  path: string
  products: Product[]
}