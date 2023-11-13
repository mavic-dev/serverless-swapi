# Swapi Serverless

API en Node.js con serverless framework que adapata API SWAPI a español

## Instalacion

1. Clonar el repositorio ejecutar `npm i`

2. Reemplazar en el archivo serverless.yml
   `<nroCuenta>` por el numero de cuenta AWS

```

provider:
  name: aws
  runtime: nodejs18.x
  iam:
    role:
      statements:
        - Effect: Allow
          Action: dynamodb:*
          Resource:
            - "arn:aws:dynamodb:us-east-1:<nroCuenta>:table/tabla-peliculas"
            - "arn:aws:dynamodb:us-east-1:<nroCuenta>:table/tabla-personajes"
            - "arn:aws:dynamodb:us-east-1:<nroCuenta>:table/tabla-planetas"
            - "arn:aws:dynamodb:us-east-1:<nroCuenta>:table/tabla-especies"
            - "arn:aws:dynamodb:us-east-1:<nroCuenta>:table/tabla-naves-estelares"
            - "arn:aws:dynamodb:us-east-1:<nroCuenta>:table/tabla-vehiculos"
```

3. Ejecutar el comando `serverless deploy`

## Documentacion Postman

[documenter getpostman ](https://documenter.getpostman.com/view/29503127/2s9YXmWf5h)
