const Api = {
  apiUrl: 'https://projeto03-blue.herokuapp.com/acao',
  fetchGetAll: () => fetch(`${Api.apiUrl}/listall`),
  fetchGetById: (id) => fetch(`${Api.apiUrl}/listid/${id}`),
  fetchPost: (acao) => {
    return fetch(`${Api.apiUrl}/create`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(acao),
    });
  },
  fetchPut: (acao, id) => {
    return fetch(`${Api.apiUrl}/update/${id}`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(acao),
    });
  },
  fetchDelete: (id) => {
    return fetch(`${Api.apiUrl}/delete/${id}`, {
      method: 'DELETE',
    });
  },
};

export default Api;
