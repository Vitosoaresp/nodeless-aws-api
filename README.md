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
    "code": 0,
    "message": "success",
    "data": [
      {
        "matricula": 99,
        "status": "ativo",
        "nome": "nome",
        "email": "email@gmail.com",
        "email_do_gestor": "emaildogestor@gmail.com",
        "data_de_admissao": "2020-04-25T00:00:00.000Z",
        "data_de_rescisao": null,
        "cargo": "Gerente"
      },
    ]
}
```

## Deploy

### To Test It Locally

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
Serverless: Uploading service aws-node-rest-api-typescript.zip file to S3 (1.86 MB)...
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
  POST - https://xxxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/employees
  GET - https://xxxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/employees
functions:
  create: aws-node-rest-api-typescript-dev-create
  find: aws-node-rest-api-typescript-dev-find
layers:
  None
Serverless: Removing old service artifacts from S3...
Serverless: Run the "serverless" command to setup monitoring, troubleshooting and testing.
```

## Scaling

By default, AWS Lambda limits the total concurrent executions across all functions within a given region to 100. The default limit is a safety limit that protects you from costs due to potential runaway or recursive functions during initial development and testing. To increase this limit above the default, follow the steps in [To request a limit increase for concurrent executions](http://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html#increase-concurrent-executions-limit).
