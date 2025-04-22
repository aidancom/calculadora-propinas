import type { MenuItem } from "../types"

type Item = {
  item: MenuItem
  addItem: (item: MenuItem) => void;
}

const MenuItem = ({item, addItem}: Item) => {
  const {price, name} = item
  return (
    <button onClick={() => addItem(item)} className="w-full border-3 rounded-[10px] border-teal-400 flex justify-between p-3 cursor-pointer hover:bg-teal-200">
      <p className="font-medium">{name}</p>
      <p className="font-black">{price}€</p>
    </button>
  )
}

export default MenuItem
