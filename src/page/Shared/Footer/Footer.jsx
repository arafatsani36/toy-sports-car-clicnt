import { Link } from "react-router-dom";
import logo from '../../../assets/logo.jpg';
import { FaFacebookF, FaInstagram, FaTwitter, FaTelegramPlane} from "react-icons/fa";

const Footer = () => {
    return (
     <div className="mt-5">
    <footer className="footer p-10 bg-base-200 text-base-content orange-bg">
    <div>
        <span className="footer-title">Services</span>
        <Link to='' className="link link-hover">Home Delevary</Link>
        <Link to='' className="link link-hover">All Sports Car Toy</Link>
        <Link to='' className="link link-hover">24h Service</Link>
        <Link to='' className="link link-hover">Company</Link>
    </div> 
    <div>
        <span className="footer-title">Company</span> 
        <Link to='' className="link link-hover">About us</Link>
        <Link to='' className="link link-hover">Contact</Link>
        <Link to='' className="link link-hover">Jobs</Link>
        <Link to='' className="link link-hover">Press kit</Link>
    </div> 
    <div>
        <span className="footer-title">Legal</span> 
        <Link to='' className="link link-hover">Terms of use</Link>
        <Link to='' className="link link-hover">Privacy policy</Link>
        <Link to='' className="link link-hover">Cookie policy</Link>
    </div>
    </footer> 
    <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300 orange-bg">
    <div className="items-center grid-flow-col">
        <img className="w-10" src={logo} alt="" />
        <p>copyright @toy stop </p>
    </div> 
    <div className="md:place-self-center md:justify-self-end">
        <div className="grid grid-flow-col gap-4">
            <Link to='' className="text-lg"><FaFacebookF></FaFacebookF></Link>
            <Link to='' className="text-lg"><FaInstagram></FaInstagram></Link>
            <Link to='' className="text-lg"><FaTwitter></FaTwitter></Link>
            <Link to='' className="text-lg"><FaTelegramPlane></FaTelegramPlane></Link>
        </div>
    </div>
    </footer>
     </div> 
    );
};

export default Footer;