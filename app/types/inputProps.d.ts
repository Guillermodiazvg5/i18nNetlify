export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  htmlFor: string;
  textLabel: string;
  placeholder: string;
  value?: string;
  nameInput: string;
  required?: boolean;
}
