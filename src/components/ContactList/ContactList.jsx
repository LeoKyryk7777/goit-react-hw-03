import Contact from "./Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <div className={css.contactsList}>
      {contacts.map((contact) => (
        <div className={css.contactItem} key={contact.id}>
          <Contact data={contact} onDelete={onDelete} />
        </div>
      ))}
    </div>
  );
}
