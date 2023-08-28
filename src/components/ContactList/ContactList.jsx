import ContactListItem from 'components/ContactList/ContactListItem';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        ></ContactListItem>
      ))}
    </ul>
  );
};

export default ContactList;
