import { create } from 'zustand'

interface TestState {
  count: number
  message: string
  items: string[]
  incrementCount: () => void
  decrementCount: () => void
  resetCount: () => void
  updateMessage: (newMessage: string) => void
  addItem: (item: string) => void
  removeItem: (index: number) => void
  clearItems: () => void
}

export const useTestStore = create<TestState>((set) => ({
  // Initial state
  count: 0,
  message: 'Zustand is working! 🎉',
  items: ['React', 'Vite', 'Zustand'],

  // Actions
  incrementCount: () => set((state) => ({ count: state.count + 1 })),
  decrementCount: () => set((state) => ({ count: state.count - 1 })),
  resetCount: () => set({ count: 0 }),
  
  updateMessage: (newMessage: string) => set({ message: newMessage }),
  
  addItem: (item: string) => set((state) => ({ 
    items: [...state.items, item] 
  })),
  
  removeItem: (index: number) => set((state) => ({ 
    items: state.items.filter((_, i) => i !== index) 
  })),
  
  clearItems: () => set({ items: [] }),
}))

