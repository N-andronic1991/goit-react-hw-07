import Contact from '../contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);
  return (
    <ul className={css.list}>
      {visibleContacts.map(contact => {
        return (
          <li key={contact.id} className={css.item}>
            <Contact {...contact} />
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
