const ResourceType = {
  Films: "films",
  People: "people",
  Planets: "planets",
  Species: "species",
  Starships: "starships",
  Vehicles: "vehicles",
}

export const isValidResource = (dato) => {
  return (
    dato === ResourceType.Films ||
    dato === ResourceType.People ||
    dato === ResourceType.Planets ||
    dato === ResourceType.Species ||
    dato === ResourceType.Starships ||
    dato === ResourceType.Vehicles
  );
};
