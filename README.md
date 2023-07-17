# Serverless Nodejs Rest API with TypeScript And PostgreSQL

This is simple REST API example for AWS Lambda By Serverless framwork with TypeScript and PostgreSQL.

## Use Cases

- REST API with typescript
- Multi-environment management under Serverless
- Mocha unit tests and lambda-tester interface test
- AWS lambda function log view

## Invoke the function locally

```bash
serverless invoke local --function find
```

Which should result in:

```bash
Serverless: Compiling with Typescript...
Serverless: Using local tsconfig.json
Serverless: Typescript compiled.

{
    "statusCode": 200,
    "body": "{\"code\":0,\"message\":\"success\",\"data\":[{\"matricula\":16,\"status\":\"ativo\",\"nome\":\"nome\",\"email\":\"email@gmail.com\",\"email_do_gestor\":\"email@gmail.com\",\"data_de_admissao\":\"2020-04-25T03:00:00.000Z\",\"data_de_rescisao\":null,\"cargo\":\"Gerente\"}]}",
}
```

## Deploy

### To run localhost

- Run `npm install` to install all the necessary dependencies.
- Run `npm run dev` use serverless offline to test locally.

### Deploy on AWS, simply run:

```
$ npm run deploy

# or

$ serverless deploy
```

The expected result should be similar to:

```
Serverless: Compiling with Typescript...
Serverless: Using local tsconfig.json
Serverless: Typescript compiled.
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service aws-node-rest-api-typescript.zip file to S3 (731.68 kB)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
......................................
Serverless: Stack update finished...
Service Information
service: aws-node-rest-api-typescript
stage: dev
region: us-east-1
stack: aws-node-rest-api-typescript-dev
resources: 32
api keys:
  None
endpoints:
  GET - https://xxxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/employees
  GET - https://xxxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/employees/headcount/{manager}
  GET - https://xxxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/employees/turnover/{manager}
functions:
  find: aws-node-rest-api-dev-find
  headcount: aws-node-rest-api-dev-headcount
  turnover: aws-node-rest-api-dev-turnover
layers:
  None
Serverless: Removing old service artifacts from S3...
Serverless: Run the "serverless" command to setup monitoring, troubleshooting and testing.
```

### Testing

```
$ npm run test

# or

$ npm test
```
