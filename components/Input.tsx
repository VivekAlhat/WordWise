import API_BASE_URL from "@/lib/api";
import useDictionaryStore from "@/store/store";
import { DictionaryResponse } from "@/lib/types";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ChangeEvent, FormEvent, useState } from "react";

const Input: React.FC = () => {
  const { setDefinition, setError, setLoading } = useDictionaryStore();
  const [word, setWord] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
  };

  const searchWord = async (e: FormEvent) => {
    try {
      e.preventDefault();
      setLoading(true);
      if (word.length <= 0) return;
      const response = await fetch(`${API_BASE_URL}/${word}`);
      const dictionaryResponse = await response.json();

      if (response.status === 200) {
        const meaning: DictionaryResponse = dictionaryResponse[0];
        setDefinition(meaning);
        setError(null);
      } else {
        setError(
          "Sorry pal, we couldn't find definitions for the word you were looking for."
        );
        setDefinition(null);
      }
    } catch (error) {
      setError(
        "Sorry pal, something went wrong during you request, try again."
      );
    } finally {
      setLoading(false);
      setWord("");
    }
  };

  return (
    <form
      className="flex items-center rounded-md relative"
      onSubmit={searchWord}
    >
      <input
        name="word"
        className="bg-gray-200 text-black dark:text-white w-full h-12 rounded-md pl-4 pr-12 dark:bg-gray-700 dark:placeholder-white focus:outline-none"
        placeholder="eg: Stoic"
        value={word}
        onChange={handleChange}
      />
      <button className="absolute right-4" type="submit">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-500 dark:text-white" />
      </button>
    </form>
  );
};

export default Input;
