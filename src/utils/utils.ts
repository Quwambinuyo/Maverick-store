export const getSavedUserData = (id: string) => {
  const LSData = localStorage.getItem(`user-${id}`);
  const SSData = sessionStorage.getItem(`user-${id}`) as string;

  if (LSData) {
    return { userData: JSON.parse(LSData), context: "local" };
  } else {
    return { userData: JSON.parse(SSData), context: "session" };
  }
};

export const saveUserData = (id: string, context: string, data: any) => {
  if (context === "local") {
    return localStorage.setItem(`user-${id}`, JSON.stringify(data));
  } else {
    return sessionStorage.setItem(`user-${id}`, JSON.stringify(data));
  }
};
