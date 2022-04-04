export const getData = async (url) => {
    try {
        const response = await fetch(url);
        return await response.json()
    }catch (error){
        console.log(error)
    }
}

export const postData = async (data, url, token, formData) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData,
            headers: {
                'Token': token
        }});
        return await response.json()
    }catch (error){
        console.log(error)
    }
}

