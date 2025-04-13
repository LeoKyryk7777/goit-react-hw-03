import { FaUser, FaPhone } from "react-icons/fa";
import css from "./Contact.module.css";
export default function Contact({ data, onDelete }) {
  return (
    <div className={css.card}>
      <div className={css.info}>
        <p className={css.name}>
          <FaUser className={css.icon} /> {data.name}
        </p>
        <p className={css.phone}>
          <FaPhone className={css.icon} /> {data.number}
        </p>
      </div>

      <button className={css.deleteButton} onClick={() => onDelete(data.id)}>
        Delete
      </button>
    </div>
  );
}
