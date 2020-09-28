// import Axios from 'axios';
// import { omitBy, isNil } from 'lodash';

// const axios = Axios.create({
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json'
//   }
// });

// export default class HTTPService {

//   static get({ url, headers = {}, params = {}, data = {} }) {
//     return axios.get(url, {
//       headers: {
//         ...headers
//       },
//       params: {
//         ...params
//       },
//       data: data
//     })
//   }

//   static post({ url, headers = {}, data = {} }) {
//     data = omitBy(data, isNil);
//     return axios.post(url, data, {
//       headers: {
//         ...headers
//       }
//     })
//   }

//   static put({ url, headers = {}, data = {} }) {
//     data = omitBy(data, isNil);
//     return axios.put(url, data, {
//       headers: {
//         ...headers
//       }
//     })
//   }

//   static delete({ url, headers = {} }) {
//     return axios.delete(url, {
//       headers: {
//         ...headers
//       }
//     })
//   }

// }