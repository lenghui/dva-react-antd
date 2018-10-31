import request from '../utils/request'

export function fetch(value){
    console.log('service')
    return request("/api/users")
}