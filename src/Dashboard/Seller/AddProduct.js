import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const {register,handleSubmit,formState: { errors }} = useForm();
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  console.log(imageHostKey);
  const navigate = useNavigate();


  const handleAddProduct = data => {
    const image = data.img[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
    fetch(url, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(imgData =>{
      if(imgData.success){
        const product ={
          product_name: data.name,
          image: imgData.data.url,
          price: data.price,
          condition: data.condition,
          mobile_no: data.mobile,
          location: data.location,
          description: data.description,
          use_year: data.year
        }

        // save product info to database
        fetch(`https://sounds-mart-server-jharna203.vercel.app/sellerproduct`,{
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          },
          body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(result =>{
          console.log(result);
          toast.success(`$data.name is added successfully`);
          navigate('/dashboard/myproducts');
          
        })
      }
    })
  };


    return (
        <div className="w-96 p-7 ml-5">
      <h3 className="text-3xl">Add A Product</h3>
      <form onSubmit={handleSubmit(handleAddProduct)}>

        <div className="form-control w-full my-2">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            {...register("name", {
              required: "Name is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.name && <p className="text-error">{errors.name?.message}</p>}
        </div>

        <div className="form-control w-full my-2">
          <label className="label">
            <span className="label-text">Product Image</span>
          </label>
          <input
            type="file"
            {...register("img", {
              required: "Photo is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.img && <p className="text-error">{errors.img?.message}</p>}
        </div>

        <div className="form-control w-full my-2">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            {...register("price", {
              required: "Price is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.price && <p className="text-error">{errors.price?.message}</p>}
        </div>
        
        <div className="form-control w-full my-2">
          <label className="label">
            <span className="label-text">Condition Type</span>
          </label>
          <select {...register("condition", {
              required: "Condition is required",
            })} className="select input-bordered select-ghost w-full max-w-xs">
            <option  selected>Excellent</option>
            <option >Good</option>
            <option >Fair</option>
          </select>
          {errors.condition && <p className="text-error">{errors.condition?.message}</p>}
        </div>

        <div className="form-control w-full my-2">
          <label className="label">
            <span className="label-text">Mobile No</span>
          </label>
          <input
            type="text"
            {...register("mobile", {
              required: "Mobile Number is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.mobile && <p className="text-error">{errors.mobile?.message}</p>}
        </div>

        <div className="form-control w-full my-2">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <select {...register("location", {
              required: "Location is required",
            })} className="select input-bordered select-ghost w-full max-w-xs">
            <option  selected>Dhaka</option>
            <option >Barishal</option>
            <option >Chittagong</option>
            <option >Cumilla</option>
            <option >Cox's Bazar</option>
            <option >Noakhali</option>
            <option >Gazipur</option>
            <option >Rajshahi</option>
          </select>
          {errors.location && <p className="text-error">{errors.location?.message}</p>}
        </div>
        
        <div className="form-control w-full my-2">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            type="text"
            {...register("description", {
              required: "Description is required",
            })}
            className="textarea textarea-bordered w-full max-w-xs"
          />
          {errors.description && <p className="text-error">{errors.description?.message}</p>}
        </div>

        <div className="form-control w-full my-2">
          <label className="label">
            <span className="label-text">Year of Purchase</span>
          </label>
          <input
            type="text"
            {...register("year", {
              required: "Year of Purchase is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.year && <p className="text-error">{errors.year?.message}</p>}
        </div>
        
        <input
          type="submit"
          className="btn btn-accent w-full"
          value="ADD PRODUCT"
        />
      </form>
    </div>
    );
};

export default AddProduct;

