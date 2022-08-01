import { OptionStyled, SelectStyled } from './styled';

const Select = ({ sortOptions, title, ...props }) => {
  return (
    <SelectStyled {...props}>
      <OptionStyled value="">{title}</OptionStyled>
      {sortOptions.map((option) => (
        <OptionStyled value={option.id} key={option.id}>
          {option.name}
        </OptionStyled>
      ))}
    </SelectStyled>
  );
};

export default Select;
