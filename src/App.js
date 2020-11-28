import logo from './assets/image/Logo/Logo.png';
import card1 from './assets/image/Carousel/card1.jpg'
import card2 from './assets/image/Carousel/card2.jpg'
import card3 from './assets/image/Carousel/card3.jpg'
import card4 from './assets/image/Carousel/card4.jpg'
import './App.css';

function App() {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="col-12 col-sm-12 col-md-2">
          <a href="index.html" className="navbar-brand"><img src={logo} alt="logo"/> Blanja</a>
        </div>
          <div className="col-10 col-sm-10 col-md-6">
          <div className="input-group">
            <input type="text" className="form-control border-right-0" style={{borderTopLeftRadius:"25px", borderBottomLeftRadius:"25px"}} placeholder="Search here..."/>
            <span className="input-group-append">
              <div className="input-group-text bg-transparent border-left-0"> 
                <i className="fas fa-search"></i>
              </div>
            </span>
          </div>
          </div>
          <div className="col-1">
          <button className="btn btn-outline-secondary"><i class="fal fa-filter"></i></button>
          </div>
          <div className="navbar-nav ml-auto"></div>
          <div className="col-1">
          <button className="btn">
              <i class="fas fa-shopping-cart"></i>
            </button>
          </div>
          <div className="col-12 col-sm-12 col-md-auto">
          <button onClick={() => {}}
              className="btn rounded-pill btn btn-danger btn-login">Login
            </button>
          </div> 
          <div className="col-12 col-sm-12 col-md-auto">
          <button onClick={() => {}}
              className="btn rounded-pill btn-outline-secondary btn-signup">SignUp
          </button>
        </div>
      </nav>
      {/* end of Nav */}
      {/* Carousel */}
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner" style={{height:"100%"}}>
          <div class="carousel-item active">
            <img class="d-block w-100" src={card1} style={{backgroundSize: "cover"}} alt="First slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={card2} alt="Second slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={card3} alt="Third slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={card4} alt="Third slide"/>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
    // end of Carousel
  );
}

export default App;
