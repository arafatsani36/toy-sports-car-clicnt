import { useForm} from "react-hook-form"
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const UpdateToy = () => {
    const toy = useLoaderData();
    const {register, reset, handleSubmit,formState: { errors },} = useForm()

    //   const [axiosSecure] = useAxiosSecure();

       const onSubmit = (data) => {
        const updateToy = {
            picture: data.picture,
            toyname: data.toyname,
            sellerName: data.sellerName,
            email: data.email,
            category: data.category,
            price: data.price,
            rating: data.rating,
            quantity: data.quantity,
            description: data.description, 
            
        }
       
        console.log( updateToy)

        fetch(`https://toy-sports-car-server-nine.vercel.app/toys/${toy._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToy)
         })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'success!',
                    text: 'Update Toys successfully',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
            }
        })




    }
    return (
        <div className="overflow-x-auto p-10 mb-10 w-full">
             <h2 className="text-center font-bold mb-2 mt-10 text-2xl">Update Toys</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card-body">
                <div className="grid md:grid-cols-2 lg:grid-cols-2  gap-4">
                    <div className="form-control">
                         <label className="label">
                         <span className="label-text">Picture URL</span>
                        </label>
                        <input type="text" defaultValue={toy.picture} placeholder="Picture URL" className="input input-bordered" {...register("picture", { required: true })}/>
                        {errors.picture && <span className=" text-rose-700">This field is required</span>}
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Toy Name</span>
                    </label>
                    <input type="text" defaultValue={toy.toyname} placeholder="Toy Name" className="input input-bordered" {...register("toyname" , { required: true })}/>
                    {errors.toyname && <span className=" text-rose-700">This field is required</span>}
                    </div>
                </div>


                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div className="form-control">
                         <label className="label">
                         <span className="label-text">seller name</span>
                        </label>
                        <input type="text" defaultValue={toy.sellerName} placeholder="seller name" className="input input-bordered" {...register("sellerName" , { required: true })}/>
                        {errors.sellerName && <span className=" text-rose-700">This field is required</span>}
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller email</span>
                    </label>
                    <input type="text" defaultValue={toy.email} placeholder="Seller email" className="input input-bordered" {...register("email" , { required: true })}/>
                    {errors.email && <span className=" text-rose-700">This field is required</span>}
                    </div>
                </div>


                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div className="form-control">
                         <label className="label">
                         <span className="label-text">Sub category</span>
                        </label>
                        <input type="text" defaultValue={toy.category} placeholder="Sub category" className="input input-bordered" {...register("category" , { required: true })}/>
                        {errors.category && <span className=" text-rose-700">This field is required</span>}
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                     <input type="number" defaultValue={toy.price} placeholder="Price" className="input input-bordered" {...register("price" , { required: true })}/>
                     {errors.price && <span className=" text-rose-700">This field is required</span>}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div className="form-control">
                         <label className="label">
                         <span className="label-text">Rating</span>
                        </label>
                        <input type="number" defaultValue={toy.rating} placeholder="Rating" className="input input-bordered" {...register("rating" , { required: true })}/>
                        {errors.rating && <span className=" text-rose-700">This field is required</span>}
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available quantity</span>
                    </label>
                     <input type="number" defaultValue={toy.quantity} placeholder="Available quantity" className="input input-bordered" {...register("quantity" , { required: true })}/>
                     {errors.quantity && <span className=" text-rose-700">This field is required</span>}
                    </div>
                </div>
                <div className="form-control">
                      <textarea className="p-2 feedback-textarea" defaultValue={toy.description} placeholder="Detail Description" cols="15" rows="5" {...register("description" , { required: true })}></textarea>
                      {errors.description && <span className=" text-rose-700">This field is required</span>}
                </div>
                    
                    <div className="form-control mt-6">
                        <input className="all-btn w-full" type="submit" value="Update Toy" />
                    </div>
                </div>

            
            </form>
        </div>
    );
};

export default UpdateToy;