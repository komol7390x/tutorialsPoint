function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
  
  const user = {
    id: 1,
    name: "Komol",
    email: "komol@example.com"
  };
  
  const userName = getProperty(user, "name"); // "Komol"
  