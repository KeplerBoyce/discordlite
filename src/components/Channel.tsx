import { ChannelType } from "../util/types";

export default function Channel(props: {channel: ChannelType, chosenChannel: ChannelType, callback: (channel: ChannelType) => void}) {
    const {channel, chosenChannel, callback} = props;

    return (
        <button onClick={() => {callback(channel)}} className={channel.id === chosenChannel.id ? (
            "flex items-center gap-1.5 text-left text-white px-2 py-1 bg-bright rounded-lg w-full"
        ) : (
            "flex items-center gap-1.5 text-left text-gray-400 px-2 py-1 hover:bg-light hover:text-gray-300 rounded-lg w-full"
        )}>
            <p className="italic">#</p>
            <p>{channel.name}</p>
        </button>
    )
}