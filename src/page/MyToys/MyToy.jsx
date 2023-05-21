
const MyToy = ({toy}) => {
    const {sellerName, toyname, category, price, quantity, description} =toy
    // console.log(toy)

    return (
        <tr>
        <th>{toy.length}</th> 
        <td>{toy.sellerName}</td> 
        <td>{toy.toyname}</td> 
        <td>{toy.category}</td> 
        <td>{toy. price}</td> 
        <td>{toy.quantity}</td>
        <td><button className="btn btn-sm">View Details</button></td>
        <td><button className="btn btn-sm btn-info">Update</button></td>
        <td><button className="btn btn-sm btn-error">Delete</button></td>
      </tr>
    );
};

export default MyToy;