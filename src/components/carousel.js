import Carousel from 'react-bootstrap/Carousel';
import Login from './login';
import Forgot from './forgot';
import Signup from './signup';
function carousel1() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img 
          className="d-block w-100 vh-100" 
          src="https://images.pexels.com/photos/20967/pexels-photo.jpg?cs=srgb&dl=pexels-una-laurencic-20967.jpg&fm=jpg&w=1920&h=1280&_gl=1*6aqdqj*_ga*OTIzNDg0NjY0LjE2ODU3ODI2ODA.*_ga_8JE65Q40S6*MTY4NTc4MjcxNC4xLjEuMTY4NTc4Mjc3My4wLjAuMA.."
          alt="First slide"
        />
        <div className='carousel-captions'>
        <Login/>
        </div>
            
       
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img 
          className="d-block w-100 vh-100" 
          src="https://images.pexels.com/photos/20967/pexels-photo.jpg?cs=srgb&dl=pexels-una-laurencic-20967.jpg&fm=jpg&w=1920&h=1280&_gl=1*6aqdqj*_ga*OTIzNDg0NjY0LjE2ODU3ODI2ODA.*_ga_8JE65Q40S6*MTY4NTc4MjcxNC4xLjEuMTY4NTc4Mjc3My4wLjAuMA.."
          alt="First slide"
        />
        <div className='carousel-captions'>
        <Forgot/>
        </div>
            
       
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img 
          className="d-block w-100 vh-100" 
          src="https://images.pexels.com/photos/20967/pexels-photo.jpg?cs=srgb&dl=pexels-una-laurencic-20967.jpg&fm=jpg&w=1920&h=1280&_gl=1*6aqdqj*_ga*OTIzNDg0NjY0LjE2ODU3ODI2ODA.*_ga_8JE65Q40S6*MTY4NTc4MjcxNC4xLjEuMTY4NTc4Mjc3My4wLjAuMA.."
          alt="First slide"
        />
       <div className='carousel-captions'>
        <Signup/>
        </div>
            
       
      </Carousel.Item>
    
 
    </Carousel>
  );
}

export default carousel1;