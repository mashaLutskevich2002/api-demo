export const getData = async (url) => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        return json
    }catch (error){
        console.log(error)
    }
}


export const postData = async (data, url, getToken, formData) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData(),
            headers: {
                'Token': await getToken().then((a)=>a.toString() )
        }});
        const json = await response.json();
        return json
    }catch (error){
        console.log(error)
    }
}

