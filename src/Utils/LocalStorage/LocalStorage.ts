export namespace LocalStorage {
  export const clear = (): void => {
    localStorage.clear();
  };

  export const get = (key: string): any => {
    const type = getType(key) || "Object";

    if (type !== Object(type)) {
      return getItem(key);
    }

    return Object.assign(Object(type), getItem(key));
  };

  export const set = (key: string, value: any): void => {
    setType(key, value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  export const remove = (key: string): void => {
    localStorage.removeItem(key);
    removeType(key);
  };

  const getItem = (key: string): any => {
    return JSON.parse(localStorage.getItem(key) || "{}");
  };

  const removeType = (key: string): void => {
    let keyMap = getItem("keymap");
    delete keyMap[key];
    localStorage.setItem("keymap", JSON.stringify(keyMap));
  };

  const getType = (key: string): string | undefined => {
    let keyMap = getItem("keymap");
    return keyMap[key];
  };

  const setType = (key: string, value: any): void => {
    let keyMap = getItem("keymap");
    keyMap[key] = typeof value;
    localStorage.setItem("keymap", JSON.stringify(keyMap));
  };
}
