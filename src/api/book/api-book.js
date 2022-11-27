const create = async (book, credentials) => {
    try {
        let response = await fetch('http://localhost:3000/api/books', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + credentials.t
        },
            body: JSON.stringify(book)
      })
        return await response.json()
    } catch(err) {
        console.log(err)
    }
}  


const list = async () => {
    try {
        let response = await fetch('http://localhost:3000/api/books', {
        method: 'GET',
        // signal: signal,
        })
        return await response.json()
    } catch(err) {
        console.log(err)
    }
}


const read = async (params, credentials) => {
    try {
        let response = await fetch('http://localhost:3000/api/books/' + params.bookId, {
        method: 'GET',
        // signal: signal,
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
        }
        })
        return await response.json()
    } catch(err) {
        console.log(err)
    }
}


const update = async (params, credentials, book) => {
    try {
        let response = await fetch('http://localhost:3000/api/books/' + params.bookId, {
        method: 'PUT',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
        },
        body: JSON.stringify(book)
        })
        return await response.json()
    } catch(err) {
        console.log(err)
    }
}


const remove = async (params, credentials) => {
    try {
        let response = await fetch('http://localhost:3000/api/books/' + params.bookId, {
        method: 'DELETE',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
        }
        })
        return await response.json()
    } catch(err) {
        console.log(err)
    }
}


export { create, list, read, update, remove }

   
   
          
   