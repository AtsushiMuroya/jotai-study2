import { useAtom } from 'jotai'
import { discountAtom } from './useAtom'

export const Test = () => {
  const [price,discountPrice] = useAtom(discountAtom)
  return (
    <div>
      <div>{price}円</div>
      <button type='button' onClick={() => discountPrice(100)}>-100yen</button>
    </div>
  )
}