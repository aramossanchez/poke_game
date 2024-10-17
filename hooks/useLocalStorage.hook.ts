export default function useLocalStorage() {

  const getDataFromLocalStorage = (itemName: string) => {
    if (localStorage.getItem(itemName)) {
      const data = JSON.parse(localStorage.getItem(itemName) as string);
      return data;
    }
    return null;
  }

  const setDataFromLocalStorage = (itemName: string, newData) => {
    localStorage.setItem(itemName, JSON.stringify(newData));
    return;
  }

  return {
    getDataFromLocalStorage,
    setDataFromLocalStorage,
  }
}