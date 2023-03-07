class LocalStorageService {
  setObject = (key, obj) => {
    localStorage.setItem(key, JSON.stringify(obj));
  };

  setItem = (key, str) => {
    localStorage.setItem(key, str);
  };

  getObject = (key) => {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.error(`Couldn't parse JSON: ${e} ${localStorage.getItem(key)}`);
      return {};
    }
  };

  getItem = (key) => localStorage.getItem(key);

  removeItem = (key) => localStorage.removeItem(key);
}

export default new LocalStorageService();
