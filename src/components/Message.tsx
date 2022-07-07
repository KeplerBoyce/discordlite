import { User } from "../util/types"

export default function Message(props: {user: User, msg: string, timestamp: string}) {
    const {user, msg, timestamp} = props

    return (
        <div className="flex flex-col">
            <div className="flex gap-2 items-end">
                <p className="text-white">{user.name}</p>
                <p className="text-sm text-gray-400">{timestamp}</p>
            </div>
            <p className="font-light text-white">{msg}</p>
        </div>
    )
}
