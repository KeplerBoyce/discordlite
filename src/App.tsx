import ChannelBar from "./components/ChannelBar";
import Feed from "./components/Feed";
import Header from "./components/Header";
import ServerBar from "./components/ServerBar";
import UserBar from "./components/UserBar";

export default function App() {
    return (
        <div className="w-full h-[100vh] bg-light flex">
            <ServerBar />
            <ChannelBar />
            <div className="flex flex-col w-full">
                <Header />
                <div className="flex h-full">
                    <Feed />
                    <UserBar />
                </div>
            </div>
        </div>
    );
}
