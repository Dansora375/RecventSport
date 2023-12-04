import More from "../icons/more";
import SLike from "../icons/likesmall";
import CommentButton from "../icons/lovesmall";
import { Tabs, Tab, Chip, useDisclosure } from "@nextui-org/react";

import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

import { IPost } from "../../../../../server/src/models/post";
import { useGetposts } from "../../../hooks/useGetProducts";

import {Mapgene } from "@/structures/HastTable";


interface Props {
  post: IPost;
}


    

export default function MainPost() {
  const [cookies, _] = useCookies(["access_token"]);

  const { posts } = useGetposts();
  const map = new Mapgene<string, IPost>();

  for(const element of posts){
    map.add(element._id, element)
    //console.log(element);
  }
  console.log(map.get("656cf388ef1b1505fa36bd7"));

  ////

  if (!cookies.access_token) {
    return <Navigate to="/" />;
  }

  const formatDate = (fechaJson: string) => {
    const fecha = new Date(fechaJson);
    return fecha.toLocaleString("es-ES", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  // Estado para la página actual
  const [currentPage, setCurrentPage] = useState(1);

  // Número de elementos por página
  const itemsPerPage = 6;

  // Función para cambiar a la página siguiente
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // Función para cambiar a la página anterior
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Calcular los elementos a mostrar en la página actual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = posts.slice(startIndex, endIndex);

  // Calcular el número total de páginas
  const totalPages = Math.ceil(posts.length / itemsPerPage);

  // Determinar si el botón "Siguiente" debe estar habilitado o deshabilitado
  const isNextButtonDisabled = currentPage >= totalPages;

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [selectedItem, setSelectedItem] = useState(null);

  let tabs = [
    {
      id: "asistidos",
      label: "Asistidos",
      array: [],
    },
    {
      id: "espera",
      label: "En Espera",
      array: [],
    },
    {
      id: "creado",
      label: "Creados",
      array: itemsToShow,
    },
  ];

  return (
    <div className="shadow-fb flex w-full flex-col rounded-xl bg-white p-4">
      <Tabs
        aria-label="Dynamic tabs"
        items={tabs}
        variant="bordered"
        classNames={{
          tabList: "gap-4 relative rounded-xl p-0 border-b border-divider ml-2",
          cursor: "w-full bg-gray-50",
          tab: "max-w-fit px-0 h-12",
          tabContent: "group-data-[selected=true]:text-black",
        }}
      >
        {(item) => (
          <Tab
            key={item.id}
            title={
              <div className="flex items-center space-x-2 p-3">
                <b>{item.label}</b>
                <Chip size="sm" variant="shadow" color="primary">
                  {item.array.length}
                </Chip>
              </div>
            }
            className="flex flex-col items-center"
          >
            {item.array.length > 0 ? (
              <div className="mt-4 grid w-[80%] grid-cols-1 items-center gap-6 sm:grid-cols-2 md:w-full">
                {item.array.map((item, index) => (
                  <Card
                    shadow="sm"
                    key={index}
                    isPressable
                    onPress={() => {
                      setSelectedItem(item);
                      onOpen();
                    }}
                    className=" hover:shadow-lg"
                  >
                    <CardBody className="overflow-visible p-0">
                      <Image
                        shadow="sm"
                        radius="lg"
                        width="100%"
                        alt={item.title}
                        className="h-[200px] w-full object-cover"
                        src={item.image_url}
                      />
                    </CardBody>
                    <CardFooter className="flex flex-col items-start text-small">
                      <b className=" text-xl">{item.title}</b>
                      <p className="text-default-500">{item.price}</p>
                      <p>{formatDate(item.date)}</p>{" "}
                      {/* Usar la función para mostrar la fecha formateada */}
                      <div className="mt-2 flex h-[35px] w-full items-center text-left">
                        <div className="flex w-[80%] items-center">
                          <img
                            className="inline-block h-6 w-6 rounded-full ring-2"
                            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt={item.title}
                          />
                          <p className="ml-5 text-default-500">
                            {item.num_inte} participantes
                          </p>
                        </div>
                        <div className="h-full w-[30%]">
                          <button className="h-full w-full rounded bg-secondary-500 hover:bg-primary-500 hover:text-white">
                            Unirse
                          </button>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <>
                <p className=" my-20 w-[80%] text-center text-4xl">
                  {item.id === "asistidos"
                    ? "Aún no has asistido a ningún evento"
                    : item.id === "espera"
                    ? "En el momento no haces parte de ningún evento"
                    : "Aún no has creado ningún evento"}
                </p>
                <b className=" hover:text-light-blue-700 hover:underline">
                  {item.id === "asistidos" ? (
                    <Link to="/eventos">Haz click aquí para asistir a uno!</Link>
                  ) : item.id === "espera" ? (
                    <Link to="/eventos">Haz click aquí para asistir a uno!</Link>
                  ) : (
                    <Link to="/creareventos">
                      Haz click aquí para crear tu propio evento ahora mismo!
                    </Link>
                  )}
                </b>
              </>
            )}
          </Tab>
        )}
      </Tabs>
    </div>
  );
}
