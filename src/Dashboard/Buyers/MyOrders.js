import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Authentication/AuthProvider/AuthProvider';

const MyOrders = () => {
    const {user} = useContext(AuthContext);

    const {data: bookings = []} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn:async () =>{
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
      <h3 className="text-3xl py-3">My Orders :</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Products</th>
              <th>Price </th>
              <th>Location </th>
            </tr>
          </thead>
          <tbody>
            {
             bookings.map((booking,i)=><tr key={booking._id}>
              <th>{i + 1}</th>
              <td>{booking.name}</td>
              <td>{booking.product_name}</td>
              <td>${booking.price} </td>
              <td> {booking.location} </td>
            </tr>) 
            }            
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default MyOrders;