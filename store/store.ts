import { DictionaryState } from "@/lib/types";
import { create } from "zustand";

const useDictionaryStore = create<DictionaryState>((set) => ({
  loading: false,
  meaning: null,
  error: null,
  setDefinition: (meaning) => set(() => ({ meaning })),
  setError: (error) => set(() => ({ error })),
  setLoading: (loading) => set(() => ({ loading })),
}));

export default useDictionaryStore;
