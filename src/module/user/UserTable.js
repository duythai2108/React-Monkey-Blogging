import { ActionDelete, ActionEdit } from "components/action";
import { Table } from "components/table";
import { db } from "firebase-app/firebase-config";
import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserTable = () => {
  const [userList, setUserList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const colRef = collection(db, "users");
    onSnapshot(colRef, (snapshot) => {
      const results = [];
      snapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setUserList(results);
    });
  }, []);
  const renderUserItem = (user) => (
    <tr key={user.id}>
      <td title={user.id}>{user.id.slice(0, 5) + "..."}</td>
      <td className="whitespace-nowrap">
        <div className="flex items-center gap-x-3">
          <img
            className="w-10 h-10 object-cover rounded-md flex-shrink-0"
            src="https://images.unsplash.com/photo-1516908205727-40afad9449a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
            alt=""
          />
          <div className="flex-1">
            <h3>{user?.fullname}</h3>
            <time className="text-sm text-gray-300">
              {new Date().toLocaleDateString()}
            </time>
          </div>
        </div>
      </td>
      <td>{user?.username}</td>
      <td>{user.email.slice(0, 5) + "..."}</td>
      <td></td>
      <td></td>
      <td>
        <div className="flex items-center gap-x-3">
          <ActionEdit
            onClick={() => navigate(`/manage/update-user?id=${user.id}`)}
          ></ActionEdit>
          <ActionDelete
          // onClick={() => handleDeleteCategory(category.id)}
          ></ActionDelete>
        </div>
      </td>
    </tr>
  );
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Info</th>
            <th>Username</th>
            <th>Email address</th>
            <th>Status</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.length > 0 && userList.map((user) => renderUserItem(user))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserTable;
