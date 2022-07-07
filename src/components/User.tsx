import { UserType } from "../util/types";

export default function User(props: {user: UserType}) {
    const {user} = props;

    return (
        <button className="flex flex-col hover:bg-light text-gray-400 hover:text-gray-300 px-2 py-1 rounded-lg leading-5">
            <p>{user.name}</p>
            <p className="text-xs text-gray-400">{user.status}</p>
        </button>
    )
}