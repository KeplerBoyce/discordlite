import { useState } from "react";
import { ChannelType } from "../util/types";
import Channel from "./Channel";

export default function ChannelGroup(props: {name: string, channels: ChannelType[], chosenChannel: ChannelType, callback: (channel: ChannelType) => void}) {
    const {name, channels, chosenChannel, callback} = props;
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button
                className="flex items-center gap-1 text-left font-bold text-gray-400 uppercase hover:text-gray-200 w-full"
                onClick={() => setOpen(!open)}
            >
                <p className={open ? "-translate-y-1" : "-translate-x-1 -rotate-90"}>⌄</p>
                <p className="text-xs">{name}</p>
            </button>
            {open && (
                <div className="flex flex-col">
                    {channels.map(c =>
                        <Channel channel={{...c}} chosenChannel={chosenChannel} callback={callback} />
                    )}
                </div>
            )}
        </div>
    )
}