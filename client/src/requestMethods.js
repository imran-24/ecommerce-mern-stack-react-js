import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api/'
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTllMzA1MGM3OTVhN2FkZGRkYTE0NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MjQyNjIxMCwiZXhwIjoxNjc1MDE4MjEwfQ.lwNCfzeF9O9S-McnVKAevad7vvMxhZwDZ-8rBEGgLx8'
export const publicRequest = axios.create({
    baseUrl: BASE_URL
})

export const userRequest = axios.create({
    baseUrl: BASE_URL,
    header: {token: `Beared ${TOKEN}`}
})