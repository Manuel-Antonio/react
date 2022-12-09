import { useEffect, useState } from "react";
import Header from "./Componentes/Header";
import Formulario from "./Componentes/Formulario";
import ListadoPacientes from "./Componentes/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [pacienteEditar, setPacienteEditar] = useState({});

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(p => (p.id !== id) && p);
    setPacientes(pacientesActualizados);
  }

  return (
    <div className="w-10/12 h-screen m-auto">
      <Header />
      <div className="md:flex mt-10 gap-4">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          pacienteEditar={pacienteEditar}
          setPacienteEditar={setPacienteEditar}

        />
        <ListadoPacientes
          pacientes={pacientes}
          eliminarPaciente={eliminarPaciente}
          setPacienteEditar={setPacienteEditar}
        />
      </div>

    </div>
  )
}

export default App
