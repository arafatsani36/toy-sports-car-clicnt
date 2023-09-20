import { Link } from "react-router-dom";
import logo from '../../../assets/footer-logo.png';
import { FaFacebookF, FaInstagram, FaTwitter, FaTelegramPlane} from "react-icons/fa";

const Footer = () => {
    return (
     <div className="mt-5">
    <footer className="footer p-10 bg-base-200 text-base-content">
    <div>
       <img src={logo} alt="" />
       <p className=" w-80 text-base">Welcome to Toy shop Treasures, where imagination knows no bounds! Our toy store is a wonderland of fun, offering a vast array of toys, games, and collectibles for all ages. Explore our shelves filled with stuffed animals, action figures, educational toys, and more.</p>
    </div> 
    <div>
        <span className="font-bold text-lg">Quick Links</span>
        <Link to='' className="link link-hover text-base">ALL Toys</Link>
        <Link to='' className="link link-hover text-base">My Toys</Link>
        <Link to='' className="link link-hover text-base">Add Toys</Link>
        <Link to='' className="link link-hover text-base">Blogs</Link>
    </div> 
    <div>
        <span className="font-bold text-lg">Our Company</span> 
        <Link to='' className="link link-hover text-base">About us</Link>
        <Link to='' className="link link-hover text-base">Contact</Link>
        <Link to='' className="link link-hover text-base">FAQ</Link>
        <Link to='' className="link link-hover text-base">Location</Link>
    </div> 
    <div>
        <span className="font-bold text-lg">Social Media</span> 
            <div className="md:flex gap-5">
                <Link to='' className="text-2xl"><FaFacebookF></FaFacebookF></Link>
                <Link to='' className="text-2xl"><FaInstagram></FaInstagram></Link>
                <Link to='' className="text-2xl"><FaTwitter></FaTwitter></Link>
                <Link to='' className="text-2xl"><FaTelegramPlane></FaTelegramPlane></Link>
            </div>
            
       
    </div>
    </footer> 
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
      <aside>
        <p className=" text-lg">Copyright © 2023 - All right reserved by <span className="section-header">toy shop</span></p>
      </aside>
    </footer>
     </div> 
    );
};

export default Footer;