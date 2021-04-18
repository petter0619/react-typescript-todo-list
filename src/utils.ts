export const addToLocalStorage = (key: string, value: string) => localStorage.setItem(key, value);

export const getFromLocalStorage = (key: string) => {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : null;
};
