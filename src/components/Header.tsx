import { ChannelType } from "../util/types";

export default function Header(props: {chosenChannel: ChannelType}) {
    const {chosenChannel} = props;

    return (
        <div className="flex gap-2 p-2 pl-3 border-b-2 border-medium">
            <button className="flex items-center gap-1.5 font-bold text-white">
                <p className="italic">#</p>
                <p>{chosenChannel.name}</p>
            </button>
        </div>
    )
}
