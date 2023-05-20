
const Review = () => {
    return (
        <div className="carousel w-full mx-auto mt-10 mb-10">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="flex gap-5 w-1/2 mx-auto">
            <div className="avatar">
            <div className="w-24 rounded-full">
                <img src="https://i.ibb.co/BTQGF8B/p1.jpg" />
            </div>
            </div>
            <div>
                <p>We have 9 kids and the last 2 are twins. We got a pair of these for the twins so they could help out their brothers shoveling our heavy northern Wisconsin snow. They love it!!!The shovels are well made and sturdy. Don’t bend picking up heavy snow. Didn’t break when whacking various things like trees or brothers!</p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
        <div className="flex gap-5 w-1/2 mx-auto">
            <div className="avatar">
            <div className="w-24 rounded-full">
                <img src="https://i.ibb.co/7jmXg2C/r3.jpg" />
            </div>
            </div>
            <div>
                <p>This is an excellent shovel. It’s a great size and weight for our 4 year old, and honestly we borrow it for certain shoveling jobs because it works better than many adult shovels. It’s very sturdy. What a pleasure to have found something that isn’t made dumb/ineffective because it’s made for kids. Can’t recommend it enough!</p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
        <div className="flex gap-5 w-1/2 mx-auto">
            <div className="avatar">
            <div className="w-24 rounded-full">
                <img src="https://i.ibb.co/54sfQNr/r2.jpg" />
            </div>
            </div>
            <div>
                <p>We have 9 kids and the last 2 are twins. We got a pair of these for the twins so they could help out their brothers shoveling our heavy northern Wisconsin snow. They love it!!!The shovels are well made and sturdy. Don’t bend picking up heavy snow. Didn’t break when whacking various things like trees or brothers!</p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
        <div className="flex gap-5 w-1/2 mx-auto">
            <div className="avatar">
            <div className="w-24 rounded-full">
                <img src="https://i.ibb.co/BqRrddx/r1.webp" />
            </div>
            </div>
            <div>
                <p>We purchased 2 of these shovels and they have been great. Light enough for our three year old and sturdy enough for our seven year old. Great product for a great price. I see these shovels ladting for years.</p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Review;