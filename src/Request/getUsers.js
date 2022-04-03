export const getUsers = (url,data) => {
    fetch(url,)
        .then(response => {
            if(!response.ok){
                throw new Error(response.statusText)
            }
            return response
        })
        .then(response => response.json())
        .then((response) => data.push(response.users))

        // .then(()=>console.log(data))
    // console.log(data)
    // try {
    //     const response = await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?&count=${limit}`);
    //     const json = await response.json();
    //     // setData(json.users)
    // }catch (error){
    //     console.log(error)
    // }
}
