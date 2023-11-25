import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import React, { useContext, useEffect, useState } from "react";
// import { useCookies } from "react-cookie";
// import { Navigate } from "react-router-dom";
// import axios from "axios";

// import { IPost } from "../../../../server/src/models/post";
// import { useGetposts } from "../../hooks/useGetProducts";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Divider,
} from "@nextui-org/react";
import CurrentArrayContext from "@/shared/currentArrayContext";

type Props = {};

const Cardsevents = (props: Props) => {
  const { currentArray } = useContext(CurrentArrayContext);

  // const [cookies, _] = useCookies(["access_token"]);

  // const { posts } = useGetposts();

  // if (!cookies.access_token) {
  //   return <Navigate to="/" />;
  // }

  // Función para formatear la fecha
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
  const itemsPerPage = 4;

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
  const itemsToShow = currentArray.slice(startIndex, endIndex);

  // Calcular el número total de páginas
  const totalPages = Math.ceil(currentArray.length / itemsPerPage);

  // Determinar si el botón "Siguiente" debe estar habilitado o deshabilitado
  const isNextButtonDisabled = currentPage >= totalPages;

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center">
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:w-[89%]">
          {itemsToShow.map((item, index) => (
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
        <div className="my-10 flex h-10 w-[40%] justify-between">
          <button
            onClick={prevPage}
            className="w-24 rounded-xl bg-secondary-500 hover:bg-primary-500 hover:text-white"
          >
            Anterior
          </button>
          <button
            onClick={nextPage}
            className={`w-24 rounded-xl bg-secondary-500 hover:bg-primary-500 hover:text-white ${
              isNextButtonDisabled
                ? "cursor-not-allowed bg-gray-200 text-gray-500"
                : ""
            }`}
            disabled={isNextButtonDisabled}
          >
            Siguiente
          </button>
        </div>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl" className="bg-gray-300">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col items-center gap-1 text-3xl">
                {selectedItem?.title}
              </ModalHeader>
              <ModalBody className="flex flex-row">
                <div className="w-[40%] mr-3">
                  <img
                    src={selectedItem?.image_url}
                    alt={selectedItem?.title}
                    className="mb-6 h-[200px] rounded-lg border-black"
                  />
                  <p>
                    <b>Creador: </b>
                    Diego Leandro Rodríguez
                  </p>
                </div>
                <div><Divider orientation="vertical" className="h-full w-[1.5px]"/></div>
                <div className="w-[50%] ml-3">
                  <p className="mb-2">
                    <b>Descripción: </b>
                    {selectedItem?.description}
                    Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                  dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                  Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                  </p>
                  <p className="mb-2">
                    <b>Ubicación: </b>
                    {selectedItem?.place}
                  </p>
                  <p className="mb-2">
                    <b>Fecha: </b>
                    {selectedItem?.date}
                    7 de noviembre de 2023
                  </p>
                  <p className="mb-2">
                    <b>Nivel de dificultad: </b>
                    Intermedio
                  </p>
                  <p>
                    <b>Número de integrantes: </b>
                    {selectedItem?.num_inte}
                  </p>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary" onPress={onClose}>
                  Unirse
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Cardsevents;
