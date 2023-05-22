import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToys = () => {
    const updateToys =useLoaderData()
    console.log(updateToys)
    const {_id, price, quantity, description} = updateToys;

    const handleUpdateToy = event => {  
        event.preventDefault();
        const form = event.target;
         const price = form.price.value;
         const quantity = form.quantity.value;
         const description = form.description.value;
         console.log( price, quantity,  description)
         const updateToy = {
            price,
            quantity,
            description
         }
        //  console.log(updateToy)

         fetch(`https://toy-sports-car-server-nine.vercel.app/toys/${_id}`, {
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
        <div>
        <h2 className="text-center mt-6 text-slate-900 text-xl font-bold">Update Toys</h2>

        <div className="hero w-full">
           
           <div className="card flex-shrink-0 w-full shadow-1xl bg-base-100">
           <form onSubmit={handleUpdateToy}>
               <div className="card-body">

                   <div className="form-control">
                   <label className="label">
                       <span className="label-text">Price</span>
                   </label>
                   <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered" />
                   </div>

                   <div className="form-control">
                   <label className="label">
                       <span className="label-text">Available quantity</span>
                   </label>
                   <input type="text" name="quantity" defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered" />
                   </div>

                   <label className="label">
                       <span className="label-text">Detail Description</span>
                   </label>
                   <textarea className="textarea textarea-error" defaultValue={ description} name="description" placeholder="Detail Description"></textarea>

                   <div className="form-control mt-6">
                   <input className="btn btn-primary" type="submit" value="Update Toy" />
                   <Link to='/mytoy'><input className="btn btn-success mt-4 w-full" value="Back To My Toys" /></Link>
                   </div>
               </div>
           </form>
           </div>

       </div>
       </div>
    );
};

export default UpdateToys;