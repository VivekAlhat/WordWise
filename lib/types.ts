type DictionaryResponse = {
  phonetic: string;
  phonetics: Phonetic[];
  word: string;
  sourceUrls: string[];
  meanings: Meaning[];
};

type Phonetic = {
  text?: string;
  audio?: string;
};

type Meaning = {
  partOfSpeech: string;
  antonyms: string[];
  synonyms: string[];
  definitions: Definition[];
};

type Definition = {
  antonyms: string[];
  synonyms: string[];
  definition: string;
};

interface DictionaryState {
  loading: boolean;
  meaning: DictionaryResponse | null;
  error: string | null;
  setDefinition: (meaning: DictionaryResponse | null) => void;
  setError: (error: string | null) => void;
  setLoading: (loading: boolean) => void;
}

export type {
  DictionaryResponse,
  Phonetic,
  Meaning,
  Definition,
  DictionaryState,
};
