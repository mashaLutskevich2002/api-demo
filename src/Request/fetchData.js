export const getData = async (url, ) => {
    try {
        const response = await fetch(url);
        return await response.json()
    }catch (error){
        console.log(error)
    }
}

export const addErrorBLock = (id, text) => {
    const blockElement = document.getElementById(`${id}`)
    blockElement.style.display = 'block'
    blockElement.style.color='red'
    blockElement.style.fontSize='20px'
    blockElement.innerText = text ;
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
        addErrorBLock('error', 'Not all fields selected! Please fill in all the fields')

    }
}
