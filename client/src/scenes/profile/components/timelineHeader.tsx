import DownArrow from "../icons/downArrow";
import Phone from "../icons/phone";
import Friend from "../icons/friend";
import More from "../icons/more";

import { UserContext } from "@/shared/usercontext";
import { useContext, useEffect } from "react";

export default function TimelineHeader() {
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    const storedUser = window.localStorage.getItem("user");
    if (storedUser && !user) {
      setUser(JSON.parse(storedUser));
    }
  }, [user, setUser]);

  if (!user) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="mt-4 px-44 shadow">
      <div className="relative flex h-80 justify-center rounded-b">
        <img
          src="https://picsum.photos/id/1018/3000"
          className="h-full w-full rounded-lg object-cover"
          alt="cover"
        />
        <div className="absolute -bottom-8">
          <img
            src="https://picsum.photos/id/1005/1000"
            className="h-40 w-40 rounded-full border-4 border-white object-cover"
            alt="cover"
          />
        </div>
      </div>
      <div className="text-fBlack mt-10 text-center text-3xl font-bold">
        {user.user.name}
      </div>
      <div className="border-fGrey mt-6 border border-opacity-10" />
      <div className="flex justify-between px-8">
        <div className="flex items-center">
          <div className="text-fBlue border-fBlue border-b-4 px-4 py-5">
            Posts
          </div>
          <div className="text-fGrey px-4 py-5">
            Amigos <span className="ml-1 text-sm">{user.user.friends.length}</span>
          </div>
          <div className="text-fGrey px-4 py-5">Fotos</div>
          <div className="text-fGrey px-4 py-5">Videos</div>
          <div className="text-fGrey flex items-center px-4 py-5">
            Más
            <span className="ml-1">
              <DownArrow borderColor="#606770" />
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="bg-fButton flex h-9 w-12 items-center justify-center rounded focus:outline-none">
            <Phone />
          </button>
          <button className="bg-fButton flex h-9 w-12 items-center justify-center rounded focus:outline-none">
            <Friend />
          </button>
          <button className="bg-fButton flex h-9 w-12 items-center justify-center rounded focus:outline-none">
            <More />
          </button>
        </div>
      </div>
    </div>
  );
}
