const AWS = require('aws-sdk')

const deleteTask = async event => {

    const dynamoDB = new AWS.DynamoDB.DocumentClient()
    const { id } = event.pathParameters

    await dynamoDB.delete({
        TableName: 'tableTask',
        Key: { id },
    }).promise()

    return {
        status: 200,
        body: {
            message: 'Task has been deleted successfully'
        }
    }
}

module.exports = {
    deleteTask
}