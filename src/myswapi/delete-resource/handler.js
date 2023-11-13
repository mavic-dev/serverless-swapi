import { MySwapiService } from "../myswapiService/myswapiService.js";

export const deleteResource = async (event) => {
    return await MySwapiService.deleteResource(event);
}

