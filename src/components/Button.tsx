

type Props = {
    placeBet: any
}

function Button({placeBet}: Props) {
  return (
    <button onClick={placeBet} className="transition-all duration-300 border border-black w-full mt-4 py-12 px-4 rounded-xl hover:bg-indigo-600 bg-indigo-500 text-white">Place Bet!</button>
  )
}

export default Button