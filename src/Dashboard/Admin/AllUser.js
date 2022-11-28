import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConformationModal/ConfirmationModal';

const AllUser = () => {
  const [deletingUser,setDeletingUser] = useState(null);

  const closeModal = () =>{
    setDeletingUser(null);
}

    const {data : users = [],refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/users`);
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteUser = user =>{
      fetch(`http://localhost:5000/users/${user._id}`,{
        method: 'DELETE',
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => res.json())
    .then(data =>{
        if(data.deletedCount > 0){
          refetch();
          toast.success('User deleted successful.')   
        }
    })
    }

    const handleMakeAdmin = id =>{
        fetch(`http://localhost:5000/users/admin/${id}`,{
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount > 0){
                toast.success('Make admin successful.')
                refetch();
            }
        })
    }


    return (
        <div>
      <h3 className="text-3xl">All Users</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Admin</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
             users.map((user,i)=><tr key={user._id}>
              <th>{i + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.users}</td>
              <td>{ user?.role !== 'admin' && <button onClick={()=>handleMakeAdmin(user._id)} className="btn btn-xs btn-primary">Make Admin</button>}</td>
              <td>
              <label onClick ={()=>setDeletingUser(user)}
                    htmlFor="confirmation-modal"
                    className="btn btn-xs btn-error">Delete
                  </label>
              </td>
            </tr>) 
            }            
          </tbody>
        </table>
      </div>
      {
        deletingUser && <ConfirmationModal
            title = {`Are you sure, you want to delete?`}
            message = {`if you delete ${deletingUser.name}. It can't be undone`}
            successAction = {handleDeleteUser}
            successButton = "Delete"
            modalData = {deletingUser}
            closeModal = {closeModal}
            ></ConfirmationModal>
        }
    </div>
    );
};

export default AllUser;