const keyPersonajes = [
    "nombre",
    "altura",
    "peso",
    "color_cabello",
    "color_piel",
    "color_ojos",
    "año_nacimiento",
    "genero",
    "mundo_natal",
    "peliculas",
    "especies",
    "vehiculos",
    "naves_estelares",
    "creado",
    "editado",
    "url",
]

const keyPeliculas = [
    "titulo",
    "id_episodio",
    "rastreo_apertura",
    "director",
    "productor",
    "fecha_lanzamiento",
    "personajes",
    "planetas",
    "naves_estelares",
    "vehiculos",
    "especies",
    "creado",
    "editado",
    "url"
]

const keyNavesEstelares = [
    "nombre",
    "modelo",
    "fabricante",
    "costo_en_creditos",
    "longitud",
    "velocidad_atmosferica_maxima",
    "tripulacion",
    "pasajeros",
    "capacidad_carga",
    "consumible",
    "calificacion_hiperimpulsor",
    "MGLT",
    "clase_nave_estelar",
    "pilotos",
    "peliculas",
    "creado",
    "editado",
    "url"
]

const keyVehiculos = [
    "nombre",
    "modelo",
    "fabricante",
    "costo_en_creditos",
    "longitud",
    "velocidad_atmosferica_maxima",
    "tripulacion",
    "pasajeros",
    "capacidad_carga",
    "consumible",
    "clase_vehiculo",
    "pilotos",
    "peliculas",
    "creado",
    "editado",
    "url"
]
const keyEspecies = [
    "nombre",
    "clasificacion",
    "designacion",
    "altura_promedio",
    "colores_piel",
    "colores_cabellos",
    "colores_ojos",
    "vida_promedio",
    "mundo_natal",
    "lenguaje",
    "personaje",
    "peliculas",
    "creado",
    "editado",
    "url"
]

const keyPlanetas = [

    "nombre",
    "periodo_rotacion",
    "periodo_orbital",
    "diametro",
    "clima",
    "gravedad",
    "terreno",
    "superficie_agua",
    "poblacion",
    "residentes",
    "peliculas",
    "creado",
    "editado",
    "url"

]
const listResources = {
    personajes: keyPersonajes,
    peliculas: keyPeliculas,
    "naves-estelares": keyNavesEstelares,
    vehiculos: keyVehiculos,
    especies: keyEspecies,
    planetas: keyPlanetas,
}

export const requestInvalido = (resource, userBody) => {
    const keys = Object.keys(userBody);
    for (let k of keys) {
        if (!listResources[resource]?.includes(k)) {
            return k;
        }
    }
    return null;
};

