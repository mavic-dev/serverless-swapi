import { translations } from "../translate/translations.js";

export const translateResponse = (datos) => {
  return Object.fromEntries(
    Object.entries(datos).map(([attribute, value]) => [
      translations[attribute] || attribute,
      value,
    ])
  );
};
