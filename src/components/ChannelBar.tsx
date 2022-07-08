import { ChannelType } from "../util/types";
import ChannelGroup from "./ChannelGroup";

export default function ChannelBar(props: {chosenChannel: ChannelType, callback: (channel: ChannelType) => void}) {
    return (
        <div className="w-96 h-full bg-medium">
            <div className="border-b-2 p-2 border-dark">
                <p className="pl-1 font-bold text-white">Server</p>
            </div>
            <div className="flex flex-col gap-2 p-2">
                <ChannelGroup name="text channels" channels={[{id: "992642173835149325", name:"general"}, {id: "995038519561031840", name:"test"}]} {...props} />
                <ChannelGroup name="voice channels" channels={[{id: "992642174283956366", name:"general"}]} {...props} />
            </div>
        </div>
    )
}
