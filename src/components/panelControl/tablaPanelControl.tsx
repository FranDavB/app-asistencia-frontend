import { formatearFecha } from "@/services/fechasService"
import { useEffect, useState } from "react"
import { FaRegClock } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoPersonCircleOutline } from "react-icons/io5";

export default function TablaControlComponent({ users }: { users: any[] }) {

	const [fecha, setFecha] = useState<FechaTablaControl>({
		dia: "",
		numeroDia: "",
		mes: ""
	})

	const headersTablaControl: any[] = [
		{
			id: 1,
			nombre: "Día",
			funcion: ""
		},
		{
			id: 2,
			nombre: "Horario",
			funcion: ""
		},
		{
			id: 3,
			nombre: "Empleado/a",
			funcion: ""
		},
		{
			id: 4,
			nombre: "Empresa",
			funcion: ""
		},
		{
			id: 5,
			nombre: "Acciones",
			funcion: ""
		}
	]

	useEffect(() => {
		let fecha = new Date()
		setFecha(prevState => formatearFecha(fecha))

	}, [])

	return (
		<div className="p-4 space-y-5">
			{/* Headers de la tabla */}
			<div className="grid grid-cols-5">
				{
					headersTablaControl.map(header => (
						<div className="text-center" key={header.id}>
							{header.nombre}
						</div>
					))
				}
			</div>
			{/* Datos de usuarios */}
			<div className="space-y-2 h-96 overflow-auto">
				{users.map((user) => (
					<div key={user.id} className="grid grid-cols-5 py-2 items-center text-sm">
						<div className="flex flex-col text-center text-orange-500 font-semibold  border-r-2 border-neutral-200">
							<span>{fecha.dia}</span>
							<span className="text-3xl">{fecha.numeroDia}</span>
							<span>{fecha.mes}</span>
						</div>
						<div className="text-xs justify-center space-y-4">
							<p className="flex justify-center space-x-2">
								<FaRegClock size={15} className="text-neutral-700" />
								<span>{user.horarioInicio} - {user.horarioFin}</span>
								<span></span>
							</p>
							<p className="flex justify-center space-x-2">
								<FaLocationDot size={15} className="text-neutral-700" />
								<span>{user.sitioTrabajo}</span>
							</p>
						</div>
						<div className="flex items-center space-x-4">
							<IoPersonCircleOutline size={35} />
							<div className="flex flex-col space-y-4">
								<b className="font-semibold">{user.nombre}</b>
								<span className="flex items-center space-x-2">
									<div className="h-3 w-3 bg-green-600 rounded-full" />
									<span>Activo</span>
								</span>
							</div>
						</div>
						<div className="flex flex-col space-y-4 text-center">
							<span className="font-semibold">{user.empresa}</span>
							<i className="text-xs">{user.cargo}</i>
						</div>
					</div>
				))}

			</div>
		</div>
	)
}