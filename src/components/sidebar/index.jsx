import { Link } from 'react-router-dom';
import styles from './sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.sidebarul}>
        <li className={styles.sidebarli}>
          <Link to="/dashboard" className={styles.sidebarli}>
            Home
          </Link>
        </li>
        <li className={styles.sidebarli}>
          <Link to="/tours" className={styles.sidebarli}>
            Tours
          </Link>
        </li>
        <li className={styles.sidebarli}>
          <Link to="/events" className={styles.sidebarli}>
            Events
          </Link>
        </li>
        <li className={styles.sidebarli}>
          <Link to="/admins" className={styles.sidebarli}>
            Admins
          </Link>
        </li>
        <li className={styles.sidebarli}>
          <Link to="/" className={styles.sidebarli}>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
