"use client"
import { CartProvider as ProviderCart } from "react-use-cart";

type Props = {
  children: React.ReactNode;
};

export default function CartProviders({ children }: Props) {
  return <ProviderCart>{children}</ProviderCart>;
}
