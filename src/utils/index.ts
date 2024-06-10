import { ProductDTO } from "../@types/productDTO";

export const totalItemsValues = (items: ProductDTO[]) => {
  let totalValue = 0

  for(let i = 0; i < items.length; i++) {
    totalValue = totalValue + Number(items[i].price)
  }

  return totalValue;
}