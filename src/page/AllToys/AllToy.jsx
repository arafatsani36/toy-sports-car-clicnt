import { Link } from "react-router-dom";

const AllToy = ({toy}) => {
const {_id,sellerName, email, toyname, category, price,  description, quantity} = toy;
   
    return (
        <tr>
            <td>
                seller name: {sellerName}
                <br />
                seller email: { email}
            
            </td> 
            <td>{toyname}</td> 
            <td>{category}</td> 
            <td>$ {price}</td> 
            <td>Available: {quantity}</td> 
            <td><Link to={`singletoydetails/${_id}`}><button className="btn btn-xs">Details</button></Link></td>
        </tr>
    );
};

export default AllToy;