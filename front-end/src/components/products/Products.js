import NavBar from '../parts-page/NavBar';
import Footer from '../parts-page/Footer'
import Product from './Product';
export default function Products(){
    const products =[]
        for(let i=0;i<5;i++){
            products.push(<div  key={i} className={`${i%2!=0?"revese":""}`}><Product/><div data-aos="fade-up" className="hr"></div></div>)
        }
    return(<div>
        <NavBar blod={'group'}/>
        {/* <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div> */}
       <div  className="groups">
            {products}
        </div>
        <Footer/>
    </div>)
}