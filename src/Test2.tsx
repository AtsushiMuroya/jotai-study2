import { Provider, atom, createStore, useAtom } from "jotai";

const countAtom = atom(0);

const myStore = createStore();
myStore.set(countAtom, 100);

const Counter = () => {
  const [count, setCount] = useAtom(countAtom)

  return (
    <>
      <div>{count}</div>
      <button type="button" onClick={() => setCount((p) => p + 1)}>+1</button>
    </>
  )
}

export const Test2 = () => (
  <>
    <Provider store={myStore}>
      <h1>Providerで切り分け</h1>
      <Counter />
      <Counter />
    </Provider>
    <h1>グローバルステイト</h1>
    <Counter />
    <Counter />
  </>
)