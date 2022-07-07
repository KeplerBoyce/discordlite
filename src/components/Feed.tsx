import Message from "./Message";

export default function Feed() {
    return (
        <div className="flex flex-col gap-2 w-full bg-light p-2 text-white">
            <Message user={{id:"a", name:"keplerboyce"}} msg="what is poppin" timestamp="Yesterday" />
        </div>
    )
}
