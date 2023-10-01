import { getPhonetic } from "@/lib/utils";
import { PlayIcon } from "@heroicons/react/24/solid";
import { DictionaryResponse, Phonetic } from "@/lib/types";
import { useRef } from "react";

interface IDescription {
  meaning: DictionaryResponse | null;
  error: string | null;
}

const Description: React.FC<IDescription> = ({ meaning, error }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const defaultPhonetic: Phonetic = {
    text: meaning?.phonetic,
    audio: "",
  };

  const phonetic: Phonetic | null =
    getPhonetic(meaning?.phonetics) ?? defaultPhonetic;

  const playSound = () => {
    if (audioRef.current && phonetic.audio) {
      audioRef.current.src = phonetic.audio;
      audioRef.current.play();
    }
  };

  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="font-bold text-2xl">{meaning?.word}</h1>
            <p className="text-sm text-violet-700 dark:text-violet-400">
              {phonetic?.text}
            </p>
          </div>
          {phonetic.audio && (
            <>
              <PlayIcon
                className="h-10 w-10 p-2 bg-violet-500 text-white rounded-full cursor-pointer hover:bg-violet-600 transition-all duration-75 ease-linear text-center"
                onClick={playSound}
              />
              <audio ref={audioRef}>
                <source src={phonetic.audio} />
              </audio>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Description;
