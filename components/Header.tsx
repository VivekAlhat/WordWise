import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="flex items-center justify-between">
      <h1 className="text-2xl font-semibold">WordWise</h1>
      <div className="flex items-center gap-4">
        {theme === "dark" ? (
          <SunIcon
            className="h-6 w-6 cursor-pointer"
            onClick={() => setTheme("light")}
          />
        ) : (
          <MoonIcon
            className="h-6 w-6 cursor-pointer"
            onClick={() => setTheme("dark")}
          />
        )}
      </div>
    </nav>
  );
};

export default Header;
