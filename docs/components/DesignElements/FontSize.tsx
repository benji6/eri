import CodeSnippet from "../Components/_CodeSnippet";

interface IProps {
  varName:
    | "--font-size-0"
    | "--font-size-1"
    | "--font-size-2"
    | "--font-size-3"
    | "--font-size-4";
}

export default function FontSize({ varName }: IProps) {
  return (
    <>
      <span style={{ fontSize: `var(${varName})` }}>Lorem ipsum</span>
      <CodeSnippet language="css">{varName}</CodeSnippet>
    </>
  );
}
