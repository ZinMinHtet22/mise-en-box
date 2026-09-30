import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import type { CartLine } from '../types'

interface CartContextValue {
  lines: CartLine[]
  count: number
  total: number
  isOpen: boolean
  add: (line: Omit<CartLine, 'quantity'>) => void
  increment: (id: string) => void
  decrement: (id: string) => void
  remove: (id: string) => void
  clear: () => void
  open: () => void
  close: () => void
}

const STORAGE_KEY = 'inabox.cart.v1'

const CartContext = createContext<CartContextValue | null>(null)

const readStored = (): CartLine[] => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter(
      (item): item is CartLine =>
        typeof item === 'object' &&
        item !== null &&
        'id' in item &&
        'quantity' in item &&
        typeof (item as CartLine).id === 'string',
    )
  } catch {
    return []
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>(() => readStored())
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
  }, [lines])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const add = useCallback((line: Omit<CartLine, 'quantity'>) => {
    setLines((current) => {
      const existing = current.find((item) => item.id === line.id)
      if (existing) {
        return current.map((item) =>
          item.id === line.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }
      return [...current, { ...line, quantity: 1 }]
    })
    setIsOpen(true)
  }, [])

  const increment = useCallback((id: string) => {
    setLines((current) =>
      current.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)),
    )
  }, [])

  const decrement = useCallback((id: string) => {
    setLines((current) =>
      current
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0),
    )
  }, [])

  const remove = useCallback((id: string) => {
    setLines((current) => current.filter((item) => item.id !== id))
  }, [])

  const clear = useCallback(() => setLines([]), [])

  const value = useMemo<CartContextValue>(() => {
    const count = lines.reduce((sum, line) => sum + line.quantity, 0)
    const total = lines.reduce((sum, line) => sum + line.quantity * line.price, 0)
    return {
      lines,
      count,
      total,
      isOpen,
      add,
      increment,
      decrement,
      remove,
      clear,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }
  }, [lines, isOpen, add, increment, decrement, remove, clear])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used inside CartProvider')
  }
  return context
}
