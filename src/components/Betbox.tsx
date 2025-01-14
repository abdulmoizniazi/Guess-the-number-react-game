import BetButton from "./BetButton"

type Props = {
  betDirection: string;
  setBetDirection: any;
  isLoading: boolean;
  wonbet: boolean;
  valueStored: number
}

function Betbox({ betDirection, setBetDirection, isLoading, wonbet, valueStored }: Props) {
  return (
    <div className="mt-5">
      <div className="py-4 border bg-gray-800 text-white text-right pr-5">
        {isLoading ? "Loading..." : `The number is: ${valueStored}`}
      </div>
      <div className="flex flex-row justify-around py-2 border">
        <BetButton direction="up" betDirection={betDirection} setBetDirection={setBetDirection} />
        <BetButton direction="down" betDirection={betDirection} setBetDirection={setBetDirection} />
      </div>
      <div className="py-2 border bg-gray-200 text-center text-4xl font-light">
        {valueStored !== 0 && (
          <div className={wonbet ? "text-green-500" : "text-red-500"}>
            {wonbet ? "Yipiee!...Winner" : "Better luck next time"}
          </div>
        )}
      </div>
    </div>
  );
}


export default Betbox