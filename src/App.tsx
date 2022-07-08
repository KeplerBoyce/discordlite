import { useState } from "react";
import ChannelBar from "./components/ChannelBar";
import Feed from "./components/Feed";
import Header from "./components/Header";
import InputBar from "./components/InputBar";
import ServerBar from "./components/ServerBar";
import UserBar from "./components/UserBar";
import { ChannelType } from "./util/types";

export default function App() {
    const [chosenChannel, setChosenChannel] = useState({} as ChannelType);

    return (
        <div className="w-full h-[100vh] bg-light flex">
            <ServerBar />
            <ChannelBar chosenChannel={chosenChannel} callback={channel => setChosenChannel(channel)} />
            <div className="flex flex-col h-screen w-full">
                <Header chosenChannel={chosenChannel} />
                <div className="flex gap-1 overflow-hidden h-full">
                    <div className="flex flex-col grow">
                        <Feed chosenChannel={chosenChannel} />
                        <InputBar />
                    </div>
                    <UserBar users={[
                        {id: "0", name: "keplerboyce", status: "what is poppin"},
                        {id: "0", name: "keplerboyce", status: "what is poppin"},
                        {id: "0", name: "keplerboyce", status: "what is poppin"}
                    ]} />
                </div>
            </div>
        </div>
    );
}
