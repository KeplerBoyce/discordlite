import ChannelGroup from "./ChannelGroup";

export default function ChannelBar() {
    return (
        <div className="w-72 h-full bg-medium">
            <div className="border-b-2 p-2 border-dark">
                <p className="pl-1 font-bold text-white">Server</p>
            </div>
            <div className="flex flex-col gap-2 p-2">
                <ChannelGroup name="text channels" channels={[{id: "0", name:"general"}, {id: "1", name:"things"}]} />
            </div>
        </div>
    )
}
