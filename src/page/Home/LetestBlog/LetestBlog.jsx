import { FaUserAlt , FaGifts, FaDonate, FaDolly, FaDollyFlatbed} from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
const LetestBlog = () => {
    return (
        <div>
            <h1 className=' text-3xl text-center my-10 font-bold'><span className='section-header'>Toy Shop</span> at a glance</h1>
        <VerticalTimeline lineColor='#000'>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#C53678', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #C53678' }}
                date="2011 - present"
                iconStyle={{ background: '#C53678', color: '#fff' }}
                icon={<FaUserAlt></FaUserAlt>}
                
            >
                <h3 className="vertical-timeline-element-title  font-bold text-2xl">1000<span className=' text-lg'>+</span></h3>
                <h4 className="vertical-timeline-element-subtitle">Toy Shop about</h4>
                <p>So far about 1000 people have opened their store on our website and they are regularly providing various products and services according to customer needs.  And the number of our stores is increasing with time.  By doing this, customers can purchase their products according to their needs</p>
            </VerticalTimelineElement>


            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#C53678', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #C53678' }}
                date="2011 - present"
                iconStyle={{ background: '#C53678', color: '#fff' }}
                icon={<FaDollyFlatbed></FaDollyFlatbed>}
                
            >
                <h3 className="vertical-timeline-element-title font-bold text-2xl">40,00,00<span className=' text-lg'>+</span></h3>
                <h4 className="vertical-timeline-element-subtitle">Products</h4>
                <p>The toy shop still has more than 40000 products for sale so that customers can easily purchase their favorite products and the number of products is increasing day by day as the store continues to grow.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#C53678', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #C53678' }}
                date="2011 - present"
                iconStyle={{ background: '#C53678', color: '#fff' }}
                icon={<FaDonate></FaDonate>}
                
            >
                <h3 className="vertical-timeline-element-title font-bold text-2xl">80,00,00<span className=' text-lg'>+</span></h3>
                <h4 className="vertical-timeline-element-subtitle">Products Sell</h4>
                <p>The toy shop has sold more than 80,000 products so far. The seller is able to sell their products at perfect prices and the customers are satisfied with the good products, so our number of customers is increasing day by day and they are able to sell more products.</p>
            </VerticalTimelineElement>
    
    </VerticalTimeline>
    </div>
    );
};

export default LetestBlog;