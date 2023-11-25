import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cardsevents from "./cardsevents";
import Leftpanel from "./leftpanel";
import color from "@/assets/color.png";
import Rightpanel from './rightpanel';

import CurrentArrayContext from '../../shared/currentArrayContext';


type Props = {};

const Content = (props: Props) => {
    const navigate = useNavigate();

    const handleDivClick = () => {
      navigate('/creareventos');
    };

    const [currentArray, setCurrentArray] = useState([]);
  
  return (
    <CurrentArrayContext.Provider value={{ currentArray, setCurrentArray }}>
    <section className="flex h-full  overflow-visible bg-gray-20">
      <div className="fixed w-1/4 shadow-md">
        <Leftpanel post={undefined} />
      </div>
      <div className="ml-[25%] flex w-1/2 flex-col items-center justify-center">
        <div className="relative my-3 h-40 w-[85%]">
          <div className="absolute bottom-[20%] top-[20%] flex w-full cursor-pointer items-center rounded-lg bg-gray-50 shadow-md hover:shadow-xl" onClick={handleDivClick}>
            <b className="ml-60 mr-20 text-3xl">
              ¡Haz click aquí para crear un evento!
            </b>
          </div>
          <img
            className="absolute left-16 top-1/2 w-[110px] -translate-y-1/2 transform"
            src={color}
            alt="Trofeo"
          />
        </div>

        <Cardsevents />
      </div>
      <div className="fixed right-0 w-1/4 shadow-md">
        <Rightpanel />
      </div>
    </section>
    </CurrentArrayContext.Provider>
  );
};

export default Content;
