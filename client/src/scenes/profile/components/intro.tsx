import SuitCase from '../icons/suitCase';
import RSS from '../icons/rss';
import Pin from '../icons/pin';
import HomeAlt from '../icons/homeAlt';
import Hat from '../icons/hat';
import { useContext, useEffect } from "react";
import { UserContext } from "@/shared/usercontext";

export default function Intro() {
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
    <div className="shadow-fb rounded-xl w-full bg-white p-4">
      <div className="text-xl font-bold text-fBlack">Intro</div>
      <div className="mt-4 flex items-center">
        <SuitCase />
        <span className="ml-2">
          {user.user.Age}{' '}
        </span>
      </div>
      <div className="mt-4 flex items-center">
        <Hat />
        <span className="ml-2">{user.user.workAt}</span>
      </div>
      <div className="mt-4 flex items-center">
        <Hat />
        <span className="ml-2">{user.user.studiedAt} </span>
      </div>
      <div className="mt-4 flex items-center">
        <HomeAlt />
        <span className="ml-2">
          Vive en <b>{user.user.city}</b>{' '}
        </span>
      </div>
      <div className="mt-4 flex items-center">
        <Pin />
        <span className="ml-2">
          De <b>{user.user.city}</b>{' '}
        </span>
      </div>
      <div className="mt-4 flex items-center">
        <RSS />
        <span className="ml-2">
          Seguido por <b>{user.user.num_followers}</b>{' '}
        </span>
      </div>
    </div>
  );
}
