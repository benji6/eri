import { IProps } from "../TextField";
import { TextField } from "../..";

export default function DateField(props: Omit<IProps, "type">) {
  return <TextField {...props} type="date" />;
}
