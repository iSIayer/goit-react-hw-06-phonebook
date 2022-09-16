import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, getItemsValue, getFilterValue } from 'redux/contacts';
import PropTypes from 'prop-types';
import {
  ContactsListItem,
  ContactsListButton,
  ContactsListIcon,
} from './ContactsList.styled';

export const ContactsList = () => {
  const filter = useSelector(getFilterValue);
  const items = useSelector(getItemsValue);
  const dispatch = useDispatch();

  const normalizedValue = filter.toLowerCase();
  const filteredArray = items.filter(option =>
    option.name.toLowerCase().includes(normalizedValue)
  );

  const onClickDelete = contactId => {
    dispatch(deleteItem(contactId));
  };

  return (
    <ul>
      {filteredArray.map(({ id, name, number }) => {
        return (
          <ContactsListItem key={id}>
            {name}: {number}
            <ContactsListButton
              onClick={() => {
                onClickDelete(id);
              }}
            >
              <ContactsListIcon />
              Delete
            </ContactsListButton>
          </ContactsListItem>
        );
      })}
    </ul>
  );
};

// export const ContactsList = ({ value, options, onClickDelete }) => {
//   const normalizedValue = value.toLowerCase();
//   const filteredArray = options.filter(option =>
//     option.name.toLowerCase().includes(normalizedValue)
//   );

//   return (
//     <ul>
//       {filteredArray.map(({ id, name, number }) => {
//         return (
//           <ContactsListItem key={id}>
//             {name}: {number}
//             <ContactsListButton
//               onClick={() => {
//                 onClickDelete(id);
//               }}
//             >
//               <ContactsListIcon />
//               Delete
//             </ContactsListButton>
//           </ContactsListItem>
//         );
//       })}
//     </ul>
//   );
// };

ContactsList.propTypes = {
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onClickDelete: PropTypes.func.isRequired,
};
