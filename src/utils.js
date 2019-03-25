import get from "lodash.get";

export const capitalize = s => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const getIdFromURL = url => {
  if (url === undefined) return "";
  if (url[url.length - 1] !== "/") return "";
  let newUrl = url.split("/");
  return newUrl[newUrl.length - 2];
};

export const arrayToList = (array, path) => {
  if (array && array.length) {
    return array.map(e => capitalize(get(e, path))).join(", ");
  }
};
