//domain/.netlify/functions/hello
const items =[
    {id}
]

exports.handler = async function(event,contetex){
    return {
        statusCode:200,
        body:'hello world'
    }
}