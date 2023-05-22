import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const AddToy = () => {

    const {user} = useContext(AuthContext) 

    const handleAddToy = event => {  
        event.preventDefault();
        const form = event.target;
        const picture = form.picture.value;
         const toyname = form.toyname.value;
         const seller = form.seller.value;
         const email= form.email.value;
        const  category = form.category.value;
         const price = form.price.value;
         const rating = form.rating.value;
         const quantity = form.quantity.value;
         const description = form.description.value;
         console.log(picture, toyname, seller, email, category, price, rating, quantity,  description)
         const addToy = {
            sellerName : seller,
            email,
            picture,
            toyname,
            category,
            price,
            rating,
            quantity,
            description
         }
         console.log(addToy)

         fetch('http://localhost:5000/toys', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToy)
         })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'Add Toys successfully',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
            }
        })


    }



    return (
       <div>
        <h2 className="text-center mt-6 text-slate-900 text-xl font-bold">Added Toys</h2>

        <div className="hero w-full">
           
           <div className="card flex-shrink-0 w-full shadow-1xl bg-base-100">
           <form onSubmit={handleAddToy}>
               <div className="card-body">

                   <div className="form-control">
                   <label className="label">
                       <span className="label-text">Picture URL</span>
                   </label>
                   <input type="text" name="picture" placeholder="Picture URL" className="input input-bordered" />
                   </div>

                   <div className="form-control">
                   <label className="label">
                       <span className="label-text">Toy Name</span>
                   </label>
                   <input type="text" name="toyname" placeholder="Name" className="input input-bordered" />
                   </div>

                   <div className="form-control">
                   <label className="label">
                       <span className="label-text">seller name </span>
                   </label>
                   <input type="text" name="seller" defaultValue={user?.name} placeholder="Seller name " className="input input-bordered" />
                   </div>

                   <div className="form-control">
                   <label className="label">
                       <span className="label-text">Seller email</span>
                   </label>
                   <input type="email" name="email" defaultValue={user?.email} placeholder="Seller Email " className="input input-bordered" />
                   </div>

                   <div className="form-control">
                   <label className="label">
                       <span className="label-text">Sub category</span>
                   </label>
                    <input type="text"  name="category" placeholder="Sub category" className="input input-bordered" />
                   </div>

                   <div className="form-control">
                   <label className="label">
                       <span className="label-text">Price</span>
                   </label>
                   <input type="text" name="price" placeholder="Price" className="input input-bordered" />
                   </div>

                   <div className="form-control">
                   <label className="label">
                       <span className="label-text">Rating</span>
                   </label>
                   <input type="text" name="rating" placeholder="Rating" className="input input-bordered" />
                   </div>

                   <div className="form-control">
                   <label className="label">
                       <span className="label-text">Available quantity</span>
                   </label>
                   <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered" />
                   </div>

                   <label className="label">
                       <span className="label-text">Detail Description</span>
                   </label>
                   <textarea className="textarea textarea-error" name="description" placeholder="Detail Description"></textarea>

                   <div className="form-control mt-6">
                   <input className="btn btn-primary" type="submit" value="Add Toy" />
                   </div>
               </div>
           </form>
           </div>

       </div>
       </div>
       
    );
};

export default AddToy;