export default async function handler(event) {
  const data = await event.json()
  console.log(data);
  return new Response('Hello World');
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
  };
  try {
    if (event.httpMethod === "OPTIONS") {
      return {
        headers,
        statusCode: 200,
        //  body: ""
      }
    }
    console.log("event.httpMethod", event.httpMethod)
    // const subject = event.queryStringParameters.name || 'World'
    return {
      statusCode: 200,
      // body: JSON.stringify({ message: `Hello ${subject}` })
      headers
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: 'error' }
  }
}
