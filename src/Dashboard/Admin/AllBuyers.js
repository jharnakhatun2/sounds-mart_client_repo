import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Authentication/AuthProvider/AuthProvider';

const AllBuyers = () => {
    const {user} = useContext(AuthContext);

    const {data: buyers = []} = useQuery({
        queryKey: ['buyers','bookings', user?.email],
        queryFn:async () =>{
            const res = await fetch(`https://sounds-mart-server-jharna203.vercel.app/bookings?email=${user?.email}`,{
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className="p-7">
      <h3 className="text-3xl py-3 font-semibold">All Buyers :</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email </th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {
                buyers.map((buyer,i)=><tr key={buyer._id}>
              <th>{i + 1}</th>              
              <td>{buyer.name}</td> 
              <td>{buyer.phone}</td> 
              <td>{buyer.email}</td> 
              <td>{buyer.location}</td> 
            </tr>) 
            }            
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default AllBuyers;