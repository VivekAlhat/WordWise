import Link from "next/link";
import Definition from "./Definition";
import API_BASE_URL from "@/lib/api";
import useDictionaryStore from "@/store/store";
import { DictionaryResponse, Meaning } from "../lib/types";

interface IMeaning {
  meanings: Meaning;
}

const Meaning: React.FC<IMeaning> = ({ meanings }) => {
  const { partOfSpeech, definitions, synonyms } = meanings;
  const { setLoading, setError, setDefinition } = useDictionaryStore();

  const searchWord = async (word: string) => {
    try {
      setLoading(true);
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
    }
  };

  return (
    <div className="mt-12">
      <div className="flex items-center space-x-6">
        <p className="text-xl">{partOfSpeech}</p>
        <hr className="w-full border border-gray-200" />
      </div>
      <ul className="space-y-2 my-4 list-disc">
        {definitions.map((item, _idx) => (
          <Definition key={_idx} definitions={item} />
        ))}
      </ul>
      {synonyms.length > 0 && (
        <div className="flex gap-4">
          <p>Synonyms:</p>
          <ul className="flex flex-wrap items-center gap-4">
            {synonyms.map((item, _idx) => (
              <Link
                key={_idx}
                href="#"
                onClick={() => searchWord(item)}
                className="text-violet-700 dark:text-violet-400 hover:underline"
              >
                {item}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Meaning;
