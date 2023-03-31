<!--
title: 'AWS Simple HTTP Endpoint example in NodeJS'
description: 'This template demonstrates how to make a simple HTTP API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework.'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->

# Serverless Framework Node HTTP API on AWS

This template demonstrates how to make a simple HTTP API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework.

This template include database DynamoDB.

## Usage

### Deployment

```
$ serverless deploy
```

After deploying, you should see output similar to:

```bash
Deploying aws-node-http-api-project to stage dev

✔ Service deployed to stack aws-node-http-api-project-dev

endpoints:
  GET - https://o3ms4aczt6.execute-api.sa-east-1.amazonaws.com/
  POST - https://o3ms4aczt6.execute-api.sa-east-1.amazonaws.com/tasks
  GET - https://o3ms4aczt6.execute-api.sa-east-1.amazonaws.com/tasks
  GET - https://o3ms4aczt6.execute-api.sa-east-1.amazonaws.com/tasks/{id}
  PUT - https://o3ms4aczt6.execute-api.sa-east-1.amazonaws.com/tasks/{id}
  DELETE - https://o3ms4aczt6.execute-api.sa-east-1.amazonaws.com/tasks/{id}
functions:
  hello: crud-with-nodejs-y-dynamodb-dev-hello
  createTask: crud-with-nodejs-y-dynamodb-dev-createTask
  listTasks: crud-with-nodejs-y-dynamodb-dev-listTasks
  getTask: crud-with-nodejs-y-dynamodb-dev-getTask
  updateTask: crud-with-nodejs-y-dynamodb-dev-updateTask
  deleteTask: crud-with-nodejs-y-dynamodb-dev-deleteTask
```

### Local development

You can invoke your function locally by using the following command:

```bash
serverless invoke local --function hello
```

Which should result in response similar to the following:

```
{
  "statusCode": 200,
  "body": "{\n  \"message\": \"Go Serverless v3.0! Your function executed successfully!\",\n  \"input\": \"\"\n}"
}
```