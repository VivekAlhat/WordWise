import { Phonetic } from "./types";

export const getPhonetic = (phonetics: Phonetic[] | undefined) => {
  const phonetic = phonetics?.filter((item) => {
    if (item.text && item.audio) return item;
  });

  if (phonetic) {
    return phonetic[0];
  }
  return null;
};
