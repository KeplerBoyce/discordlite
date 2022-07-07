import Message from "./Message";

export default function Feed() {
    return (
        <div className="flex flex-col gap-2 w-full bg-light text-white">
            <Message user={{id: "a", name: "keplerboyce", status: "what is poppin"}} msg="what is poppin" timestamp="Yesterday" />
            <Message user={{id: "a", name: "keplerboyce", status: "what is poppin"}} msg="what is poppin" timestamp="Yesterday" />
            <Message user={{id: "a", name: "keplerboyce", status: "what is poppin"}} msg="what is poppin" timestamp="Yesterday" />
        </div>
    )
}
