import { Definition } from "@/lib/types";

interface IDefinition {
  definitions: Definition;
}

const Definition: React.FC<IDefinition> = ({ definitions }) => {
  const { definition } = definitions;

  return <li>{definition}</li>;
};

export default Definition;
