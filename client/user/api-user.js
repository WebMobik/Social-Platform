const create = async (user) => {
    try {
        const response = await fetch('/api/users/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        return await response.json()
    } catch (e) {
        console.log(e)
    }
}

const list = async (signal) => {
    try {
        const response = await fetch('/api/users/', {
            method: 'GET',
            signal: signal
        })
        return await response.json()
    } catch (e) {
        console.log(e)
    }
}

const read = async (params, credentials, signal) => {
    try {
        const response = await fetch('/api/users/' + params.userId, {
            method: 'GET',
            signal: signal,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer + ${credentials.t}`
            }
        })
        return await response.json()
    } catch (e) {
        console.log(e)
    }
}

const update = async (params, credentials, user) => {
    try {
       const response = await fetch('/api/users/' + params.userId, {
           method: 'PUT',
           headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer + ${credentials.t}`
            },
            body: JSON.stringify(user)
       })
       return await response.json()
    } catch (e) {
        console.log(e)
    }
}

const remove = async (params, credentials) => {
    try {
        const response = await fetch('/api/users/' + params.userId, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer + ${credentials.t}`
            }
        })
        return response.json()
    } catch (e) {
        console.log(e)
    }
}

export {create, list, read, update, remove}
