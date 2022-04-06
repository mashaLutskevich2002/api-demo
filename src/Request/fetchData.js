export const getData = async (url, ) => {
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
        const errorMessage = document.getElementById('error')
        errorMessage.style.display = 'block'
        const p = document.createElement('p');
        p.style.color='red'
        p.style.fontSize='20px'
        p.innerText = 'Not all fields selected! Please fill in all the fields' ;
        errorMessage.append(p);
    }
}
