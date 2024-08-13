"use client"

import TablaControlComponent from "./tablaPanelControl";

export default function PanelControlComponent() {

	let users: any[] = [
		{
			id: 1,
			nombre: "Ana Morales",
			img: "https://example.com/img1.jpg",
			horarioInicio: "08:00",
			horarioFin: "17:00",
			sitioTrabajo: "Sede San Juan",
			empresa: "Innovatech",
			cargo: "Secretaria ejecutiva",
			horaFechadaInicio: "7:55",
			horaFechadaFin: "17:50"
		},
		{
			id: 2,
			nombre: "Carlos Fernández",
			img: "https://example.com/img2.jpg",
			horarioInicio: "10:00",
			horarioFin: "19:00",
			sitioTrabajo: "Sede Central",
			empresa: "TechWorks",
			cargo: "Gerente general",
			horaFechadaInicio: "10:03",
			horaFechadaFin: "Sin fechar"
		},
		{
			id: 3,
			nombre: "Laura Pérez",
			img: "https://example.com/img3.jpg",
			horarioInicio: "09:00",
			horarioFin: "18:00",
			sitioTrabajo: "Sede Masterson",
			empresa: "Creative Labs",
			cargo: "Abogada",
			horaFechadaInicio: "9:25",
			horaFechadaFin: "Sin fechar"
		},
		{
			id: 4,
			nombre: "Javier Rodríguez",
			img: "https://example.com/img4.jpg",
			horarioInicio: "07:30",
			horarioFin: "16:30",
			sitioTrabajo: "Sede Norte",
			empresa: "Green Solutions",
			cargo: "Conserje",
			horaFechadaInicio: "7:25",
			horaFechadaFin: "Sin fechar",
		},
		{
			id: 5,
			nombre: "Javier Rodríguez",
			img: "https://example.com/img4.jpg",
			horarioInicio: "07:30",
			horarioFin: "16:30",
			sitioTrabajo: "Sede Norte",
			empresa: "Green Solutions",
			cargo: "Conserje",
			horaFechadaInicio: "7:25",
			horaFechadaFin: "Sin fechar",
		},
		{
			id: 6,
			nombre: "Javier Rodríguez",
			img: "https://example.com/img4.jpg",
			horarioInicio: "07:30",
			horarioFin: "16:30",
			sitioTrabajo: "Sede Norte",
			empresa: "Green Solutions",
			cargo: "Conserje",
			horaFechadaInicio: "7:25",
			horaFechadaFin: "Sin fechar",
		}
	];

	return (
		<section className="bg-white rounded-lg border-2 border-neutral-300 w-[95%] mx-4">
			{/* Filtros, controles y demás */}
			<div>
				<h6>Panel de control</h6>
			</div>
			{/* Tabla a mostrar */}
			<div className="h-[50%]">
				<TablaControlComponent users={users} />
			</div>
		</section>
	)
}