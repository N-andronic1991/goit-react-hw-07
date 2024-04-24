import css from './App.module.css';
import ContactForm from './contactForm/ContactForm';
import SearchBox from './searchBox/SearchBox';
import ContactList from './contactList/ContactList';
import Loader from './loader/Loader';
import ErrorMessage from './errorMessage/ErrorMessage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contactsOps';
import {
  selectLoading,
  selectError,
  selectContacts,
} from '../redux/contactsSlice';

const App = () => {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {contacts && <ContactList />}
    </div>
  );
};

export default App;
