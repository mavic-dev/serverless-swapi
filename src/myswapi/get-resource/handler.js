import { MySwapiService } from "../myswapiService/myswapiService.js";

export const getResource = async (event) => {
    return await MySwapiService.getResource(event);
}

