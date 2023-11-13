import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

let dynamoDBClientParams = {}
if (process.env.IS_OFFLINE) {
    dynamoDBClientParams = {
        region: 'localhost',
        endpoint: 'http://localhost:8000',
        accessKeyId: 'DUMMY',
        secretAccessKey: 'DUMMY'
    }
}

const client = new DynamoDBClient(dynamoDBClientParams);
export const docClient = DynamoDBDocumentClient.from(client);
