import PropTypes from 'prop-types';
import css from './Contact.module.css';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };
  return (
    <div className={css.contactBox}>
      <div>
        <p className={css.text}>
          <FaUser className={css.icon} size={12} />
          {name}
        </p>

        <p>
          <FaPhoneAlt className={css.icon} size={12} />
          {number}
        </p>
      </div>
      <button
        className={css.deleteBtn}
        type="button"
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};
export default Contact;

Contact.proptypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
