import Link from "next/link";

interface IAlternatives {
  alternatives: string[];
  name: string;
  searchWord: (word: string) => Promise<void>;
}

const Alternatives: React.FC<IAlternatives> = ({
  alternatives,
  name,
  searchWord,
}) => {
  return (
    <div>
      {alternatives.length > 0 && (
        <div className="flex gap-4">
          <p>{name}:</p>
          <ul className="flex flex-wrap items-center gap-4">
            {alternatives.map((item, _idx) => (
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

export default Alternatives;
