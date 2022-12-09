import { useState, useEffect } from 'react';

const Formulario = ({ pacientes, setPacientes, pacienteEditar, setPacienteEditar }) => {

    // Hooks
    const [mascota, setMascota] = useState("");
    const [propietario, setPropietario] = useState("");
    const [email, setEmail] = useState("");
    const [fecha, setFecha] = useState("");
    const [sintomas, setSintomas] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        // Cargar datos del LocalStorage al listado
        const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) || [];
        setPacientes(pacientesLS);
      }, []);
      
    useEffect(() => {
        localStorage.setItem("pacientes", JSON.stringify(pacientes));
    }, [pacientes]);

    // Si hay paciente para editar rellena el formulario
    useEffect(() => {
        if (Object.keys(pacienteEditar).length > 0) {
            setMascota(pacienteEditar.mascota);
            setPropietario(pacienteEditar.propietario);
            setEmail(pacienteEditar.email);
            setFecha(pacienteEditar.fecha);
            setSintomas(pacienteEditar.sintomas);

        }
    }, [pacienteEditar]);


    // Funciones
    const generarNumero = () => {
        const random = Math.random().toString(36).substring(2);
        const tiempo = Date.now().toString(36);
        return random + tiempo;
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (mascota == "" || propietario == "" || email == "" || fecha == "" || sintomas == "") {
            setError(true);
            return;
        }
        // Todos los campos rellenados
        setError(false);

        // Nuevo paciente
        const nuevopaciente = {
            mascota,
            propietario,
            email,
            fecha,
            sintomas
        }

        // Editar o Registrar
        if (pacienteEditar.id) {
            nuevopaciente.id = pacienteEditar.id;
            const pacienteActualizado = pacientes.map(p => p.id != pacienteEditar.id ? p : nuevopaciente);
            setPacientes(pacienteActualizado);
            setPacienteEditar({});
        } else {
            nuevopaciente.id = generarNumero();
            setPacientes([...pacientes, nuevopaciente]);
        }


        // Limpiar Formulario
        setMascota("");
        setPropietario("");
        setEmail("");
        setFecha("");
        setSintomas("");


    };

    function guardarPacientes() {
        localStorage.setItem("pacientes", JSON.stringify([...pacientes]));
    }

    return (
        <div className="md:w-2/5">
            {/* Titulo */}
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            {/* Subtitulo */}
            <p className="font-bold text-center text-lg mt-5">
                Añade Pacientes y {""}
                <span className="text-indigo-600">Administralos</span>
            </p>
            {/* Mensaje de Error */}
            {error &&
                (
                    <div className='alerta bg-red-600 text-white p-3 text-center mt-3 font-bold'>
                        Todos los campos son obligatorios
                    </div>
                )
            }


            {/* Formulario */}
            <form className="py-10 px-5 rounded shadow-md mt-10 bg-white flex flex-col gap-5">
                <div>
                    <label
                        htmlFor="mascota"
                        className="uppercase font-bold"
                    >Nombre mascota</label>
                    <input
                        type="text"
                        id="mascota"
                        placeholder="Nombre de la mascota"
                        className="w-full p-3 mt-2 border-2 placeholder:text-gray-500 border-gray-300 rounded-md"
                        value={mascota}
                        onChange={(e) => setMascota(e.target.value)}
                    />
                </div>
                <div>
                    <label
                        htmlFor="propietario"
                        className="uppercase font-bold"
                    >Nombre propietario</label>
                    <input
                        type="text"
                        id="propietario"
                        placeholder="Nombre del propietario"
                        className="w-full p-3 mt-2 border-2 placeholder:text-gray-500 border-gray-300 rounded-md"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>
                <div>
                    <label
                        htmlFor="email"
                        className="uppercase font-bold"
                    >Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Email contacto propietario"
                        className="w-full p-3 mt-2 border-2 placeholder:text-gray-500 border-gray-300 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label
                        htmlFor="alta"
                        className="uppercase font-bold"
                    >Alta</label>
                    <input
                        type="date"
                        id="alta"
                        className="w-full p-3 mt-2 border-2 placeholder:text-gray-500 border-gray-300 rounded-md"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>
                <div>
                    <label
                        htmlFor="sintomas"
                        className="uppercase font-bold"
                    >Sintomas</label>
                    <textarea
                        id="sintomas"
                        placeholder="Sintomas del paciente"
                        className="w-full p-3 mt-2 border-2 placeholder:text-gray-500 border-gray-300 rounded-md"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 text-white font-bold uppercase rounded transition-all"
                    onClick={handleSubmit}
                >
                    {pacienteEditar.id ? "Editar paciente" : "Registrar paciente"}
                </button>
            </form>
        </div>
    )
}

export default Formulario