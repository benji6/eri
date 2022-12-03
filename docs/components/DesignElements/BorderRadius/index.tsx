import "./style.css";
import CodeSnippet from "../../Components/_CodeSnippet";

interface IProps {
  varName: "--border-radius-0" | "--border-radius-1";
}

export default function BorderRadius({ varName }: IProps) {
  return (
    <>
      <div
        className="d-border-radius__visual"
        style={{ borderRadius: `var(${varName})` }}
      />
      <CodeSnippet language="css">{varName}</CodeSnippet>
    </>
  );
}
