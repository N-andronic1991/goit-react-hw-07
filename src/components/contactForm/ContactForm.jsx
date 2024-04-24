import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import css from './ContactForm.module.css';

const ContactSchema = Yup.object().shape({
  userName: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phoneNumber: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const ContactForm = () => {
  const initialValues = {
    userName: '',
    phoneNumber: '',
  };

  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(addContact({ name: values.userName, number: values.phoneNumber }));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.wrapper}>
          <label>
            Name
            <Field className={css.field} type="text" name="userName" />
          </label>
          <ErrorMessage
            name="userName"
            component="span"
            className={css.error}
          />
        </div>
        <div className={css.wrapper}>
          <label>
            Numbers
            <Field className={css.field} type="text" name="phoneNumber" />
            <ErrorMessage
              name="phoneNumber"
              component="span"
              className={css.error}
            />
          </label>
        </div>

        <button className={css.submitBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
