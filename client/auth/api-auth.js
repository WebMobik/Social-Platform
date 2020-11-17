const signin = async (user) => {
    try {
        const response = await fetch('/api/signin/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(user)
        })
        return await response.json()
    } catch (e) {
        console.log(e)
    }
}

const signout = async () => {
    try {
        const response = await fetch('/api/signout/', { method: 'GET' })
        return await response.json()
    } catch (e) {
        console.log(e)
    }
}

export {signin, signout}
