import { Button } from './ContactListItem.styled';

const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li>
      {name}: {number}
      <Button onClick={() => onDeleteContact(id)}>Delete</Button>
    </li>
  );
};

export default ContactListItem;
