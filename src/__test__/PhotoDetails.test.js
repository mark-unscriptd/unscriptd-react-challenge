import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

it('testing no headers', () => {
  return axios.get('http://localhost:3010/images/928305966')
        .then( res => {
          console.log(res.data.artist);
        }
      )
});
