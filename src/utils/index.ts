import { ProductDTO } from "../@types/productDTO";

export const totalItemsValues = (items: ProductDTO[]) => {
  let totalValue = 0

  for(let i = 0; i < items.length; i++) {
    totalValue = totalValue + Number(items[i].price)
  }

  return totalValue;
}

export const searchProducts = (items: ProductDTO[], term: string): ProductDTO[] => {
  term = term.toLowerCase();

  const result = items.filter(item => item.name.toLowerCase().includes(term));
  return result;
}