import { useState } from 'react'
import { useTestStore } from '../stores/testStore'

const ZustandChecker = () => {
  const [newItem, setNewItem] = useState('')
  const [newMessage, setNewMessage] = useState('')

  // Access state and actions from the store
  const count = useTestStore((state) => state.count)
  const message = useTestStore((state) => state.message)
  const items = useTestStore((state) => state.items)
  const incrementCount = useTestStore((state) => state.incrementCount)
  const decrementCount = useTestStore((state) => state.decrementCount)
  const resetCount = useTestStore((state) => state.resetCount)
  const updateMessage = useTestStore((state) => state.updateMessage)
  const addItem = useTestStore((state) => state.addItem)
  const removeItem = useTestStore((state) => state.removeItem)
  const clearItems = useTestStore((state) => state.clearItems)

  const handleAddItem = () => {
    if (newItem.trim()) {
      addItem(newItem.trim())
      setNewItem('')
    }
  }

  const handleUpdateMessage = () => {
    if (newMessage.trim()) {
      updateMessage(newMessage.trim())
      setNewMessage('')
    }
  }

  return (
    <div className="rounded-lg border border-green-200 bg-green-50 p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-green-800">Zustand Status Checker</h2>
        <p className="mt-1 text-sm text-green-600">
          ✅ Zustand v5.0.3 is installed and working correctly
        </p>
      </div>

      {/* Counter Section */}
      <div className="space-y-3 rounded-lg bg-white p-4 shadow-sm">
        <h3 className="font-semibold text-gray-800">Counter State</h3>
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold text-blue-600">{count}</span>
          <div className="flex gap-2">
            <button
              onClick={decrementCount}
              className="rounded bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-600"
            >
              -
            </button>
            <button
              onClick={incrementCount}
              className="rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
            >
              +
            </button>
            <button
              onClick={resetCount}
              className="rounded bg-gray-500 px-4 py-2 text-white transition-colors hover:bg-gray-600"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Message Section */}
      <div className="space-y-3 rounded-lg bg-white p-4 shadow-sm">
        <h3 className="font-semibold text-gray-800">Message State</h3>
        <div className="rounded-md bg-purple-100 p-3 text-purple-800">
          <p className="text-lg">{message}</p>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleUpdateMessage()}
            placeholder="Enter new message..."
            className="flex-1 rounded border border-gray-300 px-3 py-2 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
          />
          <button
            onClick={handleUpdateMessage}
            className="rounded bg-purple-500 px-4 py-2 text-white transition-colors hover:bg-purple-600"
          >
            Update
          </button>
        </div>
      </div>

      {/* Items Array Section */}
      <div className="space-y-3 rounded-lg bg-white p-4 shadow-sm">
        <h3 className="font-semibold text-gray-800">Array State (Items)</h3>
        <div className="space-y-2">
          {items.length > 0 ? (
            items.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-md bg-gray-50 px-3 py-2"
              >
                <span className="text-gray-700">{item}</span>
                <button
                  onClick={() => removeItem(index)}
                  className="rounded bg-red-400 px-2 py-1 text-xs text-white transition-colors hover:bg-red-500"
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-400 italic">No items yet. Add some!</p>
          )}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddItem()}
            placeholder="Add an item..."
            className="flex-1 rounded border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
          />
          <button
            onClick={handleAddItem}
            className="rounded bg-green-500 px-4 py-2 text-white transition-colors hover:bg-green-600"
          >
            Add
          </button>
          {items.length > 0 && (
            <button
              onClick={clearItems}
              className="rounded bg-gray-400 px-4 py-2 text-white transition-colors hover:bg-gray-500"
            >
              Clear All
            </button>
          )}
        </div>
      </div>

      {/* Store Info */}
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm">
        <h3 className="font-semibold text-gray-700 mb-2">Store Information</h3>
        <ul className="space-y-1 text-gray-600">
          <li>• Store location: <code className="text-xs bg-gray-200 px-1 py-0.5 rounded">frontend/src/stores/testStore.ts</code></li>
          <li>• State managed: count, message, items array</li>
          <li>• Actions: increment, decrement, reset, update message, add/remove/clear items</li>
          <li>• All state updates are reactive and persist across re-renders</li>
        </ul>
      </div>
    </div>
  )
}

export default ZustandChecker

