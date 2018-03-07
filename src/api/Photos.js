import axios from "axios";

const api = axios.create({
   baseURL: "http://localhost:3010"
});


export function listPhotos() {
   return api.get("/images")
   .then(res => {
      return res.data;
   });
}

export function updatePhoto(id, data) {
   return api.patch(`/images/${id}`, data)
     .then(res => res.data)
 }
 