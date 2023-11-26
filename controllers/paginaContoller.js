import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/Testimonialaes.js";

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

const paginaTestimoniales = async (req, res) => {

    try {
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        });  
    } catch (error) {
        console.log(error);
    }

    
}

// Muestra un viaje por slug
const paginaDetalleViaje = async (req, res) => {

    const { slug } = req.params;

    try {
      const viaje = await Viaje.findOne({ where : { slug } });  

      res.render('viaje', {
        pagina: 'Información Viaje',
        viaje
      })
    } catch (error) {
        console.log(error);
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}