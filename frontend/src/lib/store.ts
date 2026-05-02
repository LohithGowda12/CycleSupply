import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Product = {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

interface CartState {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addToCart: (product) => {
        set((state) => {
          const existingItem = state.items.find((item) => item.product.id === product.id);
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.product.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }
          return { items: [...state.items, { product, quantity: 1 }] };
        });
      },
      removeFromCart: (productId) => {
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== productId),
        }));
      },
      clearCart: () => set({ items: [] }),
      getCartTotal: () => {
        const { items } = get();
        return items.reduce((total, item) => {
          // Parse price from "$100.00" to 100
          const numericPrice = parseFloat(item.product.price.replace(/[^0-9.-]+/g, ""));
          return total + numericPrice * item.quantity;
        }, 0);
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);
