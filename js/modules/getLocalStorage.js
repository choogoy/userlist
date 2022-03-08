const getLocalStorage = () => JSON.parse(localStorage.getItem('userlist')) || [];

export default getLocalStorage;