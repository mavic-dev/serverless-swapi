const ResourceType = {
    Peliculas: "peliculas",
    Personajes: "personajes",
    Planetas: "planetas",
    Especies: "especies",
    NavesEstelares: "naves-estelares",
    Vehiculos: "vehiculos",
}

export const isValidResource = (dato) => {
    return (
        dato === ResourceType.Peliculas ||
        dato === ResourceType.Personajes ||
        dato === ResourceType.Planetas ||
        dato === ResourceType.Especies ||
        dato === ResourceType.NavesEstelares ||
        dato === ResourceType.Vehiculos
    );
};
