import { Viaje } from "../models/Viaje.js";

const paginaInicio = (req, res) => {
    res.render('inicio', {
        pagina: 'Inicio'
    });
}

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (req, res) => {
    // Consultar db
    const viajes = await Viaje.findAll();

    console.log(viajes);

    res.render('viajes', {
        pagina: 'Próximos viajes',
        viajes,
    });
}

const paginaTestimoniales = (req, res) => {
    res.render('testimoniales', {
        pagina: 'Testimoniales'
    });
}

// Muestra un viaje por slug
const paginaDetalleViaje = (req, res) => {

    console.log(req.params.viaje);
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}