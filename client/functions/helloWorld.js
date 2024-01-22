// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*', // Allows all origins
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
  };
  try {
    if (event.httpMethod === "OPTIONS") {
      return {
        headers,
        statusCode: 200,
        body: ""
      }
    }
    console.log("event.httpMethod", event.httpMethod)
    const subject = event.queryStringParameters.name || 'World'
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${subject}` }),
      // // more keys you can return:
      headers
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
