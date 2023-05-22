import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToy = ({toy, handleDelete}) => {

    const {_id, sellerName, toyname, category, price, quantity, description} = toy;

    

    return (
        <tr>
        <td>{sellerName}</td> 
        <td>{toyname}</td> 
        <td>{category}</td> 
        <td>$ {price}</td> 
        <td>Available: {quantity}</td>
        <td><button className="btn btn-sm">View description</button></td>
        <td><Link to={`updatetoys/${_id}`}><button className="btn btn-sm btn-info">Update</button></Link></td>
        <td><button onClick={() => handleDelete(_id)} className="btn btn-sm btn-error">Delete</button></td>
      </tr>
    );
};

export default MyToy;