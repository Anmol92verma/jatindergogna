import TabPanel from './TabPanel'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import image2 from './gallery/2.jpeg'
import image3 from './gallery/3.jpeg'
import image4 from './gallery/4.jpeg'
import image5 from './gallery/5.jpeg'
import image6 from './gallery/6.jpeg'
import image1 from './gallery/1.jpeg'

export default function Gallery(props){
    const { children, value, index, ...other } = props;

    return (  <TabPanel value={value} index ={3}>
 
        <Carousel transitionTime={150} interval={3000} infiniteLoop={true} autoPlay={true}>
        <div>
              <img src={image1}  alt=""></img>
              <p className="legend">Photo 1</p>
           </div>
           <div>
              <img src={image2}  alt=""></img>
              <p className="legend">Photo 1</p>
           </div>
           <div>
              <img src={image3}  alt=""></img>
              <p className="legend">Photo 1</p>
           </div>
           <div>
              <img src={image4}  alt=""></img>
              <p className="legend">Photo 1</p>
           </div>
           <div>
              <img src={image5}  alt=""></img>
              <p className="legend">Photo 1</p>
           </div>
           <div>
              <img src={image6}  alt=""></img>
              <p className="legend">Photo 1</p>
           </div>

        </Carousel>

    </TabPanel>)
}