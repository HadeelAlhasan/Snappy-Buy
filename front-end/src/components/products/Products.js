import NavBar from '../parts-page/NavBar';
import Footer from '../parts-page/Footer'
import Product from './Product';
export default function Products(){
    return(<div>
        <NavBar blod={'group'}/>
        <div className='product-group'>
            <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
       
        </div>
        <Footer/>
    </div>)
}