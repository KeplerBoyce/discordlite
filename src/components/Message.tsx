import { MessageType } from "../util/types"

export default function Message(props: MessageType) {
    const {user, msg, timestamp} = props

    return (
        <div className="flex flex-col hover:bg-medium-light px-4 py-1.5">
            <div className="flex gap-2 items-end">
                <button className="text-white hover:underline">{user.name}</button>
                <p className="pb-0.5 text-xs text-gray-400">{timestamp}</p>
            </div>
            <p className="font-light text-white">{msg}</p>
        </div>
    )
}
