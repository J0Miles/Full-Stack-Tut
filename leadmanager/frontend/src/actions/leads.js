import axios from 'axios';

import { GET_LEADS, DELETE_LEAD } from './types';

// Get Leads
export const getLeads = () => dispatch => {
  axios.get('/api/leads/')
  .then(res => {
    dispatch({
      type: GET_LEADS,
      payload: res.data
    });
  }).catch(err => console.log(err));
};

// Delete Lead
export const deleteLead = (id) => dispatch => {
  axios.get(`/api/leads/${id}/`)
  .then(res => {
    dispatch({
      type: DELETE_LEAD,
      payload: id
    });
  }).catch(err => console.log(err));
};
