import { useState } from "react";
import { Channel } from "../util/types";

export default function ChannelGroup(props: {name: string, channels: Channel[]}) {
    const {name, channels} = props;
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
                        <button className="flex items-center gap-1.5 text-left text-gray-400 px-2 py-1 hover:bg-light hover:text-gray-300 rounded-lg w-full">
                            <p className="italic">#</p>
                            <p>{c.name}</p>
                        </button>
                    )}
                </div>
            )}
        </div>
    )
}