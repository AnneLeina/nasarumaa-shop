import { create } from 'zustand';

export const useCartStore = create((set) => ({
  items: [],
  
  addToCart: (product, quantity = 1) => {
    set((state) => {
      const existing = state.items.find(item => item.id === product.id);
      if (existing) {
        return {
          items: state.items.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
          )
        };
      }
      return { items: [...state.items, { ...product, quantity }] };
    });
  },
  
  updateQuantity: (productId, quantity) => {
    set((state) => ({
      items: quantity <= 0
        ? state.items.filter(item => item.id !== productId)
        : state.items.map(item => item.id === productId ? { ...item, quantity } : item)
    }));
  },
  
  removeFromCart: (productId) => {
    set((state) => ({ items: state.items.filter(item => item.id !== productId) }));
  },
  
  clearCart: () => set({ items: [] })
}));