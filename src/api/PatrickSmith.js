import axios from "axios";

const api = axios.create({
   baseURL: "http://localhost:3010"
});


export function listPatrick() {
   return api.get("/images")
   .then(res => {
      return res.data;
   });
}
