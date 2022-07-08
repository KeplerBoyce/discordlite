import { useEffect, useState } from 'react';
import Message from "./Message";
import { MessageType } from "../util/types"
import { getMessages } from '../util/api';

export default function Feed() {
    const [messages, setMessages] = useState<MessageType[]>();

    useEffect(() => {
        getMessages("928554105323016195")
            .then(res => setMessages(res.reverse().map((m: {author: any, content: string, timestamp: string}) => {
                return {
                    user: {id: m.author.id, name: m.author.username},
                    msg: m.content,
                    timestamp: m.timestamp,
                }
            })));
    }, []);

    return (
        <div className="flex flex-col gap-3 py-2 w-full bg-light h-full text-white overflow-y-auto scrollbar">
            {messages && messages.map(m =>
                <Message {...m} />
            )}
        </div>
    )
}
