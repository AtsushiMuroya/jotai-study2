import { atom } from 'jotai'

const priceAtom = atom(1000);

export const discountAtom = atom(
  (get) => get(priceAtom),
  (get, set, discount:number) => {
    set(priceAtom,get(priceAtom) - discount)
  },
)