import { Label, Input } from './Filter.styled';
const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Find contact by name
      <Input type="text" value={value} onChange={onChange} />
    </Label>
  );
};

export default Filter;
