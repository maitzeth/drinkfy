import { create } from 'zustand';

interface CartState {
  count: number;
  inc: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));
