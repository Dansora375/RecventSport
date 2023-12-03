import React, { useContext, useEffect, useState } from "react";
import {
  ListBulletIcon,
  TrophyIcon,
  StarIcon,
  UsersIcon,
  GlobeAmericasIcon,
} from "@heroicons/react/24/solid";

import CurrentArrayContext from "@/shared/currentArrayContext";

import { IPost } from "../../../../server/src/models/post";
import { useGetposts } from "../../hooks/useGetProducts";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

interface Props {
  post: IPost;
}

const Leftpanel = (props: Props) => {
  const [open, setOpen] = useState(true);
  const Menus = [
    {
      title: "Comunidades",
      src: (
        <GlobeAmericasIcon className="h-8 w-8 rounded-full text-black ring-black" />
      ),
    },
    {
      title: "Eventos",
      src: (
        <TrophyIcon className="h-8 w-8 rounded-full text-black ring-2 ring-black" />
      ),
    },
    {
      title: "Rating",
      src: (
        <ListBulletIcon className="h-8 w-8 rounded-full text-black ring-2 ring-black" />
      ),
    },
    {
      title: "Categorias",
      src: (
        <StarIcon className="h-8 w-8 rounded-full text-black ring-2 ring-black" />
      ),
    },
    {
      title: "Amigos",
      src: (
        <UsersIcon className="h-8 w-8 rounded-full text-black ring-2 ring-black" />
      ),
    },
  ];

  const [selected, setSelected] = useState(1);

  const [cookies, _] = useCookies(["access_token"]);

  const { posts } = useGetposts();

  if (!cookies.access_token) {
    return <Navigate to="/" />;
  }

  const { setCurrentArray } = useContext(CurrentArrayContext);
  const changeArray = (index) => {
    setSelected(index);
    switch (index) {
      case 0:
        setCurrentArray(posts);
        break;
      case 1:
        setCurrentArray(posts);
        break;
      case 2:
        setCurrentArray(posts);
        break;
      case 3:
        setCurrentArray(posts);
        break;
      case 4:
        setCurrentArray([]);
        break;
    }
  };

  useEffect(() => {
    if (posts.length > 0) {
      changeArray(1);
    }
  }, [posts]);
  
  return (
    <div className="relative ml-3 h-screen w-[80px] p-5 pt-8 duration-300 md:w-full">
      <img
        //   src="https://upload.wikimedia.org/wikipedia/commons/9/96/Circulo_roxo.png"
        alt=""
        className={`border-purple-950 absolute -right-3 top-9 w-7 cursor-pointer
           rounded-full border-2  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />
      <ul className="pt-20">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`${
              index === selected ? "bg-gray-100" : "hover:bg-gray-100"
            } mt-5 flex cursor-pointer items-center gap-x-10 rounded-md p-2 text-2xl`}
            onClick={() => {
              changeArray(index);
            }}
          >
            {Menu.src}
            <b className={`${!open && "hidden"} origin-left duration-200`}>
              {Menu.title}
            </b>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leftpanel;
