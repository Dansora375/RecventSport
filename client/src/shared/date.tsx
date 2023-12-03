import React from 'react';

type FechaProps = {
  fechaJson: string;
};

const Fecha: React.FC<FechaProps> = ({ fechaJson }) => {
  // Crear un objeto Date a partir de la fecha en formato JSON
  const fecha = new Date(fechaJson);

  // Formatear la fecha para mostrar el nombre del mes
  const fechaFormateada = fecha.toLocaleString('es-ES', { month: 'long', day: 'numeric', year: 'numeric' });

  return <div>{fechaFormateada}</div>;
};

export default Fecha;
