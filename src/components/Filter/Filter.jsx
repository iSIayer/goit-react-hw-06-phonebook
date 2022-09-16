import { useSelector, useDispatch } from 'react-redux';
import { getFilterValue, filterItems } from 'redux/contacts';
import PropTypes from 'prop-types';
import { Input } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const handleItemsFilter = e => {
    dispatch(filterItems(e.target.value));
  };
  return (
    <Input
      placeholder="Type name..."
      type="text"
      name="name"
      onChange={handleItemsFilter}
      value={filter}
    />
  );
};

// export const Filter = ({ value, onChange }) => {
//   return (
//     <Input
//       placeholder="Type name..."
//       type="text"
//       name="name"
//       onChange={onChange}
//       value={value}
//     />
//   );
// };

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
