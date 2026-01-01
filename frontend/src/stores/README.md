# Zustand Store

This directory contains Zustand stores for global state management.

## Test Store (`testStore.ts`)

A demonstration store to verify Zustand is working correctly. It includes:

### State
- `count`: number - A counter value
- `message`: string - A message string
- `items`: string[] - An array of items

### Actions
- `incrementCount()` - Increases count by 1
- `decrementCount()` - Decreases count by 1
- `resetCount()` - Resets count to 0
- `updateMessage(newMessage)` - Updates the message
- `addItem(item)` - Adds an item to the items array
- `removeItem(index)` - Removes an item at the specified index
- `clearItems()` - Clears all items

## Usage Example

```typescript
import { useTestStore } from './stores/testStore'

function MyComponent() {
  // Subscribe to specific state
  const count = useTestStore((state) => state.count)
  const incrementCount = useTestStore((state) => state.incrementCount)
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  )
}
```

## Creating New Stores

Follow this pattern for creating new Zustand stores:

```typescript
import { create } from 'zustand'

interface YourState {
  // Define your state
  value: number
  
  // Define your actions
  updateValue: (newValue: number) => void
}

export const useYourStore = create<YourState>((set) => ({
  // Initial state
  value: 0,
  
  // Actions
  updateValue: (newValue) => set({ value: newValue }),
}))
```

## Resources

- [Zustand Documentation](https://zustand-demo.pmnd.rs/)
- [Zustand GitHub](https://github.com/pmndrs/zustand)

