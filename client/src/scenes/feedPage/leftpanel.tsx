import React, { useState } from "react";
import {
    ListBulletIcon,
    TrophyIcon,
    StarIcon,
    UsersIcon,
    GlobeAmericasIcon
  } from "@heroicons/react/24/solid";

type Props = {};

const Leftpanel = (props: Props) => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Comunidades", src: <GlobeAmericasIcon className="h-8 w-8 rounded-full ring-black text-black"/> },
    { title: "Eventos", src:<TrophyIcon className="h-8 w-8 rounded-full ring-2 ring-black text-black"/>},
    { title: "Rating", src: <ListBulletIcon className="h-8 w-8 rounded-full ring-2 ring-black text-black"/> },
    { title: "Categorias", src: <StarIcon className="h-8 w-8 rounded-full ring-2 ring-black text-black"/> },
    { title: "Amigos", src: <UsersIcon className="h-8 w-8 rounded-full ring-2 ring-black text-black"/> },
  ];

  const [selected, setSelected] = useState(1);

  return (
      <div className="relative h-screen md:w-full w-[80px] p-5 pt-8 duration-300 ml-3">
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
                index === selected ? 'bg-gray-100' : 'hover:bg-gray-100'
              } flex cursor-pointer items-center gap-x-10 rounded-md p-2 text-2xl mt-5`}
              onClick={() => setSelected(index)}
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
