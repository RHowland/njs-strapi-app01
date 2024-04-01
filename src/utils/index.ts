export const apiUrl = () : string =>{
    const url =  process.env.NEXT_PUBLIC_API_URL;
    const port =  process.env.NEXT_PUBLIC_API_PORT;
    return (`${url}:${port}`)
}