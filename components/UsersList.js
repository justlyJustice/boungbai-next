const UsersList = ({ users }) => {
  return (
    <div className="users-list">
      {users &&
        users.length > 0 &&
        users.map((user) => (
          <div className="user-item" key={user._id}>
            <p>{user.name}</p>

            <button className="dl-btn">
              <i className="fa-solid text-white fa-trash"></i> Delete
            </button>
          </div>
        ))}
    </div>
  );
};

export default UsersList;
