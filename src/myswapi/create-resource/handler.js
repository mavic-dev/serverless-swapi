
import { MySwapiService } from "../myswapiService/myswapiService.js";

export const createResource = async (event) => {
    return await MySwapiService.createResource(event);
}

