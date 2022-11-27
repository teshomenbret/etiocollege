const create = async (department) => {
    try {
        let response = await fetch('http://localhost:3000/api/departments', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + department.t
            },
            body: JSON.stringify(department)
      })
        return await response.json()
    } catch(err) {
        console.log(err)
    }
}  


const list = async () => {
    try {
        let response = await fetch('http://localhost:3000/api/departments', {
        method: 'GET',
        // signal: signal,
        })
        return await response.json()
    } catch(err) {
        console.log(err)
    }
}


const read = async (params, credentials, signal) => {
    try {
        let response = await fetch('http://localhost:3000/api/departments/' + params.departmentId, {
        method: 'GET',
        signal: signal,
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


const update = async (params, credentials, department) => {
    try {
        let response = await fetch('http://localhost:3000/api/departments/' + params.departmentId, {
        method: 'PUT',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
        },
        body: JSON.stringify(department)
        })
        return await response.json()
    } catch(err) {
        console.log(err)
    }
}


const remove = async (params, credentials) => {
    try {
        let response = await fetch('http://localhost:3000/api/departments/' + params.departmentId, {
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

   
   
          
   