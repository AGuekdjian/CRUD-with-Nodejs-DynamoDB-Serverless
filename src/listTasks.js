const AWS = require('aws-sdk')

const listTasks = async event => {
    
    const dynamoDB = new AWS.DynamoDB.DocumentClient()

    const result = await dynamoDB.scan({
        TableName: "tableTask"
    }).promise()

    const tasks = result.Items

    return {
        status: 200,
        body: tasks
    }
}

module.exports = {
    listTasks
}