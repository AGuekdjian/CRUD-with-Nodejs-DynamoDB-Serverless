const { v4 } = require('uuid')
const AWS = require('aws-sdk')

const createTask = async event => {

    const dynamoDB = new AWS.DynamoDB.DocumentClient()

    const { title, description, done } = JSON.parse(event.body)
    const createdAt = new Date()
    const id = v4()

    const newTask = {
        id,
        title,
        description,
        done,
        createdAt
    }

    await dynamoDB.put({
        TableName: 'tableTask',
        Item: newTask
    }).promise()

    return {
        status: 200,
        body: newTask
    }
}

module.exports = {
    createTask,
}