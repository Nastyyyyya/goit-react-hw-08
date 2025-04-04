import styles from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = ({ id, name, number, onDelete, onEdit }) => {
  const handleDelete = () => {
    const confirmDelete = window.confirm(
      `Are you sure that you want to delete contact "${name}"?`
    );
    if (confirmDelete) {
      onDelete();
    }
  };

  const handleEdit = () => {
    onEdit(id);
  };

  return (
    <li className={styles.contactItem}>
      <div className={styles.contactDetails}>
        <p className={styles.icons}>
          <IoPersonSharp />
          {name}
        </p>
        <p className={styles.icons}>
          <BsFillTelephoneFill />
          {number}
        </p>
      </div>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </li>
  );
};

export default Contact;
