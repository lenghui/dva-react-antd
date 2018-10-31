import request from '../utils/request';

export function upload() {
  return request('/api/users');
}


export function uploadEntry(values){
  return request(`/service/upload/up`, {
    method: 'POST',
    headers: {
      mimeType: 'multipart/form-data',
      contentType: false
    },
    body: values
  });
}
