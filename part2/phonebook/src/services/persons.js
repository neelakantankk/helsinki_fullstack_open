import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (newPerson) => {
    const request = axios.post(baseUrl,newPerson)
    return request.then(response => response.data)
}

const deleteEntry = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => 
        response.status === 200
        ?true
        :false
    )
}

const update = (id, changedPerson) => {
    const request = axios.put(`${baseUrl}/${id}`,
                                changedPerson)

    return request.then(response => response.data)
}

export default {
    getAll,
    create,
    deleteEntry,
    update
}
