import "./style.css";
import CodeSnippet from "../../Components/_CodeSnippet";

interface IProps {
  varName:
    | "--border-width-0"
    | "--border-width-1"
    | "--border-width-2"
    | "--space-0"
    | "--space-1"
    | "--space-2"
    | "--space-3"
    | "--space-4";
}

export default function Space({ varName }: IProps) {
  return (
    <>
      <div
        className="d-space__visual br-0"
        style={{ width: `var(${varName})` }}
      />
      <CodeSnippet language="css">{varName}</CodeSnippet>
    </>
  );
}
