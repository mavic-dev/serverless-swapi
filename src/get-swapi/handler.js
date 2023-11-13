import { isValidResource } from "./utils/resource-type.js";
import { translateResponse } from "./utils/translateResponse.js";

export const getSwapi = async (event) => {
    const { id: userId, resource } = event.pathParameters;
    if (!isValidResource(resource)) {
        return {
            statusCode: 404,
            body: JSON.stringify({
                message: `path invalid '/${resource}' don't exist. Valid path: "/films/{id}","/people/{id}","planets/{id}","species/{id}","starships/{id}","vehicles/{id}"`,
            }),
        };
    }
    const url = `https://swapi.py4e.com/api/${resource}/${userId}`;
    try {
        const res = await fetch(url);
        const response = await res.json();
        const body = translateResponse(response);

        return {
            statusCode: res.status,
            body: JSON.stringify(body),
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: "some error happened",
            }),
        };
    }
};
