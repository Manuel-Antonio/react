import { useEffect } from "react";
import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, eliminarPaciente, setPacienteEditar }) => {

  return (
    <div className="md:w-3/5 md:mt-0 mt-12">
      {pacientes.length ?
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="font-bold text-center text-lg mt-5">
            Administra tus {""}
            <span className="text-indigo-600">Pacientes y Citas</span>
          </p>
        </>
        :
        <>
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
          <p className="font-bold text-center text-lg mt-5">
            Comienza agregando pacientes y {""}
            <span className="text-indigo-600">aparecerán en este lugar</span>
          </p>
        </>
      }




      <div className="mt-10 h-screen md:overflow-y-scroll flex flex-col gap-3">
        {pacientes.map(paciente => (
          <Paciente
            key={paciente.id}
            paciente={paciente}
            eliminarPaciente={eliminarPaciente}
            setPacienteEditar={setPacienteEditar}
          />
        ))}

      </div>
    </div>
  )
}

export default ListadoPacientes