interface InputProps {
  type?: string;
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

export default function InputBox({
  type = "text",
  value,
  onChange,
}: InputProps) {
  return <input type={type} value={value} onChange={onChange} />;
}
