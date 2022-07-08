import ChannelBar from "./components/ChannelBar";
import Feed from "./components/Feed";
import Header from "./components/Header";
import InputBar from "./components/InputBar";
import ServerBar from "./components/ServerBar";
import UserBar from "./components/UserBar";

export default function App() {
    return (
        <div className="w-full h-[100vh] bg-light flex">
            <ServerBar />
            <ChannelBar />
            <div className="flex flex-col h-screen w-full">
                <Header />
                <div className="flex gap-1 overflow-hidden justify-end">
                    <div className="flex flex-col">
                        <Feed />
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
