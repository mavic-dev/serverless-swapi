import { GetCommand, PutCommand, DeleteCommand } from "@aws-sdk/lib-dynamodb";
import { isValidResource } from "../utils/tipos-recursos.js";
import { requestInvalido } from '../utils/validar-request.js';
import { responseAPI } from "../utils/response.js";
import { docClient } from "../utils/dynamodb.js";

export class MySwapiService {
    static createResource = async (event) => {
        const { id: userId, resource } = event.pathParameters;
        if (!isValidResource(resource)) {
            return {
                statusCode: 404,
                body: JSON.stringify({
                    message: `ruta invalida '/${resource}' no existe .rutas permitidas : "/peliculas/{id}","/personajes/{id}","planetas/{id}","especies/{id}","naves-estelares/{id}","vehiculos/{id}`,
                }),
            };
        }
        let userBody = JSON.parse(event.body);
        console.log(userBody)
        const invalidateKey = requestInvalido(resource, userBody);
        if (invalidateKey) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    message: `Bad request ${invalidateKey} no permitida`
                })
            }
        }

        const url = `/dev/myswapi/${resource}/${userId}`;
        const commandGet = new GetCommand({
            TableName: `tabla-${resource}`,
            Key: {
                'url': url
            }
        });

        const response = await docClient.send(commandGet);
        console.log(response)
        if (response.$metadata.httpStatusCode === 200 && response.Item) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    message: `Ya existe ${resource} con este id ${url}`
                })
            }
        }

        userBody.url = `/dev/myswapi/${resource}/${userId}`;
        userBody.creado = new Date().toISOString;
        const params = {
            TableName: `tabla-${resource}`,
            Item: userBody,
        }

        const command = new PutCommand(params);

        await docClient.send(command);

        return responseAPI(200, params.Item);
    }

    static getResource = async (event) => {
        const { id: userId, resource } = event.pathParameters;
        if (!isValidResource(resource)) {
            return {
                statusCode: 404,
                body: JSON.stringify({
                    message: `ruta invalida '/${resource}' no existe .rutas permitidas : "/peliculas/{id}","/personajes/{id}","planetas/{id}","especies/{id}","naves-estelares/{id}","vehiculos/{id}`,
                }),
            };
        }

        const url = `/dev/myswapi/${resource}/${userId}`;
        console.log(url)
        const command = new GetCommand({
            TableName: `tabla-${resource}`,
            Key: {
                'url': url
            }
        });

        const { Item } = await docClient.send(command);
        console.log(Item);
        return responseAPI(200, Item);

    }

    static deleteResource = async (event) => {
        const { id: userId, resource } = event.pathParameters;
        if (!isValidResource(resource)) {
            return {
                statusCode: 404,
                body: JSON.stringify({
                    message: `ruta invalida '/${resource}' no existe.rutas permitidas : "/peliculas/{id}","/personajes/{id}","planetas/{id}","especies/{id}","naves-estelares/{id}","vehiculos/{id}"`,
                }),
            };
        }

        const url = `/dev/myswapi/${resource}/${userId}`;
        const commandGet = new GetCommand({
            TableName: `tabla-${resource}`,
            Key: {
                'url': url
            }
        });

        const responseGet = await docClient.send(commandGet);
        console.log(responseGet);
        if (responseGet.$metadata.httpStatusCode !== 200 || !responseGet.Item) {
            return {
                statusCode: 404,
                body: JSON.stringify({
                    message: `No existe ${resource} con este id ${url}`
                })
            }
        }

        const command = new DeleteCommand({
            TableName: `tabla-${resource}`,
            Key: {
                'url': url
            }
        });

        const response = await docClient.send(command);
        console.log(response);
        return responseAPI(200, { message: `${url} eliminado` });
    }
}
