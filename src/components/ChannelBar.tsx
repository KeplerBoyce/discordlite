export default function ChannelBar() {
    return (
        <div className="w-72 h-full bg-medium">
            <div className="border-b-2 p-2 border-dark">
                <p className="font-bold text-white">Server</p>
            </div>
            <div className="flex flex-col gap-2 p-2">
                <p className="text-gray-400">#general</p>
                <p className="text-gray-400">#stuff</p>
                <p className="text-gray-400">#channel</p>
            </div>
        </div>
    )
}
