const Paciente = ({ paciente, eliminarPaciente,setPacienteEditar }) => {
    const { mascota,
        propietario,
        email,
        fecha,
        sintomas,
        id } = paciente;


    return (
        <div className="bg-white py-10 px-5 rounded shadow-md flex flex-col gap-1">
            <p className="uppercase font-bold">
                Nombre: {""}
                <span className="font-normal normal-case">{mascota}</span>
            </p>
            <p className="uppercase font-bold">
                Propietario: {""}
                <span className="font-normal normal-case">{propietario}</span>
            </p>
            <p className="uppercase font-bold">
                Email: {""}
                <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="uppercase font-bold">
                fecha alta: {""}
                <span className="font-normal normal-case">{fecha}</span>
            </p>
            <p className="uppercase font-bold">
                Síntomas: {""}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>
            <div className="mt-5 flex gap-10">
                <button
                    type="button"
                    className="bg-indigo-600 font-bold text-white 
                    uppercase py-3 px-10 rounded-md hover:bg-indigo-700 transition-all"
                    onClick = {()=>{setPacienteEditar(paciente)}}
                    >
                    Editar
                </button>
                <button
                    type="button"
                    className="bg-red-600 font-bold text-white 
                    uppercase py-3 px-10 rounded-md hover:bg-red-700 transition-all"
                    onClick={() => {eliminarPaciente(id)}}
                    >
                    Eliminar
                </button>
            </div>
        </div>
    );
}

export default Paciente;