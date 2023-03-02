import { StyledLabel } from "../CurrencyExchangeForm/styles";
import { StyledSelect } from "./styles";

type Props<Value> = {
  value?: Value;
  onChange?: (newValue: Value) => void;
  options: readonly Value[];
  register: any; // todo
  name: string;
  label?: string;
};

export default function Select<T extends string | number | readonly string[]>({
  value,
  onChange,
  options,
  register,
  name,
  label,
}: Props<T>) {
  return (
    <>
      <StyledLabel>{label}</StyledLabel>
      <StyledSelect
        value={value}
        onChange={(e) => {
          if (onChange) onChange(e.target.value as T);
        }}
        {...register(name)}
      >
        {options.map((value, idx) => (
          <option value={value} key={idx}>
            {value}
          </option>
        ))}
      </StyledSelect>
    </>
  );
}
