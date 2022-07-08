import { useEffect, useState } from 'react';
import Message from "./Message";
import { ChannelType, MessageType } from "../util/types"
import { getMessages } from '../util/api';

export default function Feed(props: {chosenChannel: ChannelType}) {
    const {chosenChannel} = props;
    const [messages, setMessages] = useState<MessageType[]>();

    useEffect(() => {
        //display "Loading messages..." while waiting on fetch
        setMessages([{user: {id: "", name: "Loading messages..."}, msg: "", timestamp: ""}]);
        getMessages(chosenChannel.id)
            .then(res => setMessages(res.map((m: {author: any, content: string, timestamp: string}) => {
                return {//convert from Discord API json format to MessageType objects
                    user: {id: m.author.id, name: m.author.username},
                    msg: m.content,
                    timestamp: m.timestamp,
                }
            })));
    }, [chosenChannel]);

    return (
        //list messages starting at the bottom
        <div className="flex flex-col-reverse w-full bg-light h-full text-white overflow-y-scroll scrollbar">
            {messages ? (messages.map(m =>
                <Message {...m} />
            )) : (
                <p className="px-4">This channel is empty.</p>
            )}
        </div>
    )
}
