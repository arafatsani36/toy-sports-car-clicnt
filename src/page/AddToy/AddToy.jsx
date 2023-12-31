import { useForm } from "react-hook-form"
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet} from 'react-helmet-async';

// img hosting imagebb key
// const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddToy = () => {
    const {register,  reset, handleSubmit,formState: { errors },} = useForm()

    // img hosting imagebb 
    // const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`

    const [axiosSecure] = useAxiosSecure();

    const onSubmit = (data) => {
        const newToy = {
            picture: data.picture,
            toyname: data.toyname,
            sellerName: data.sellerName,
            email: data.email,
            category: data.category,
            price: parseFloat(data.price),
            rating: data.rating,
            quantity: parseFloat(data.quantity),
            description: data.description,
            status: 'pending',
            
        }

        axiosSecure.post('/toys', newToy).then((data) => {
            console.log('posting new class', data.data);
            if (data.data.insertedId) {
                reset();
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Class added for approval admin',
                    showConfirmButton: false,
                    timer: 1500
                  })
              }
        })

        
    }
   
    
    return (
        <div className="add-toy overflow-x-auto p-10 mb-10">

            <Helmet>
              <title>ToyShop | Added Toys</title>
            </Helmet>

            <h2 className="text-center font-bold mb-2 text-2xl">Added Toys</h2>


            <form onSubmit={handleSubmit(onSubmit)} className="">
                     
                <div className="card-body">
                <div className="grid md:grid-cols-2 lg:grid-cols-2  gap-4">
                    <div className="form-control">
                         <label className="label">
                         <span className="label-text">Picture URL</span>
                        </label>
                        <input type="text" placeholder="Picture URL" className="input input-bordered" {...register("picture", { required: true })}/>
                        {errors.picture && <span className=" text-rose-700">This field is required</span>}
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Toy Name</span>
                    </label>
                    <input type="text" placeholder="Toy Name" className="input input-bordered" {...register("toyname" , { required: true })}/>
                    {errors.toyname && <span className=" text-rose-700">This field is required</span>}
                    </div>
                </div>


                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div className="form-control">
                         <label className="label">
                         <span className="label-text">seller name</span>
                        </label>
                        <input type="text" placeholder="seller name" className="input input-bordered" {...register("sellerName" , { required: true })}/>
                        {errors.sellerName && <span className=" text-rose-700">This field is required</span>}
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller email</span>
                    </label>
                    <input type="text" placeholder="Seller email" className="input input-bordered" {...register("email" , { required: true })}/>
                    {errors.email && <span className=" text-rose-700">This field is required</span>}
                    </div>
                </div>


                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div className="form-control">
                         <label className="label">
                         <span className="label-text">Sub category</span>
                        </label>
                        <input type="text" placeholder="Sub category" className="input input-bordered" {...register("category" , { required: true })}/>
                        {errors.category && <span className=" text-rose-700">This field is required</span>}
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                     <input type="number" placeholder="Price" className="input input-bordered" {...register("price" , { required: true })}/>
                     {errors.price && <span className=" text-rose-700">This field is required</span>}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div className="form-control">
                         <label className="label">
                         <span className="label-text">Rating</span>
                        </label>
                        <input type="number" placeholder="Rating" className="input input-bordered" {...register("rating" , { required: true })}/>
                        {errors.rating && <span className=" text-rose-700">This field is required</span>}
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available quantity</span>
                    </label>
                     <input type="number" placeholder="Available quantity" className="input input-bordered" {...register("quantity" , { required: true })}/>
                     {errors.quantity && <span className=" text-rose-700">This field is required</span>}
                    </div>
                </div>
                <div className="form-control">
                      <textarea className="p-2 feedback-textarea" placeholder="Detail Description" cols="15" rows="5" {...register("description" , { required: true })}></textarea>
                      {errors.description && <span className=" text-rose-700">This field is required</span>}
                </div>
                    
                    <div className="form-control mt-6">
                        <input className="all-btn w-full" type="submit" value="Add Toy" />
                    </div>
                </div>
                
            
            </form>

        </div>
    );
};

export default AddToy;