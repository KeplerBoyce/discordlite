import { UserType } from "../util/types";

export default function UserBar(props: {users: UserType[]}) {
    const {users} = props;

    return (
        <div className="flex flex-col p-2 bg-medium w-72">
            {users.map(u =>
                <button className="flex flex-col hover:bg-light text-gray-400 hover:text-gray-300 px-2 py-1 rounded-lg leading-5">
                    <p>{u.name}</p>
                    <p className="text-xs text-gray-400">{u.status}</p>
                </button>
            )}
        </div>
    )
}
