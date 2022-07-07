import { UserType } from "../util/types"

export default function Message(props: {user: UserType, msg: string, timestamp: string}) {
    const {user, msg, timestamp} = props

    return (
        <div className="flex flex-col hover:bg-medium-light px-2">
            <div className="flex gap-2 items-end">
                <button className="text-white hover:underline">{user.name}</button>
                <p className="pb-0.5 text-xs text-gray-400">{timestamp}</p>
            </div>
            <p className="font-light text-white">{msg}</p>
        </div>
    )
}
