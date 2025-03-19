import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClass = isOnline ? styles.online : styles.offline;
  const statusText = isOnline ? 'Online' : 'Offline';

  return (
    <li className={styles.item}>
      <img className={styles.avatar} src={avatar} alt={`${name} avatar`} />
      <p className={styles.name}>{name}</p>
      <p className={`${styles.status} ${statusClass}`}>{statusText}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
