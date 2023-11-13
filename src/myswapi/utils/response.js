export const responseAPI = (code, body) => ({
    statusCode: code,
    body: JSON.stringify(body)
});