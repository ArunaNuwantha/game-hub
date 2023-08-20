import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8c2d4b20366c4248ab82e42faa1d0b2d",
  },
});


// class APIClient<T> {
//   endpoint: string;

//   constructor(endpoint: string) {
//     this.endpoint = endpoint;
//   }

//   getAll = () => {
//     axiosInstance.get<T[]>(this.endpoint).then(res => res.data);
//   }
// }

// export default APIClient;