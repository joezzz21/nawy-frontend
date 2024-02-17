import './apartment.css';
export default function Apartment({title, location, price}:{
    title: string,
    location: string,
    price: number
}){
    const formatedPrice = (price).toLocaleString('en-US', {
        style: 'currency',
        currency: 'EGP',
        });
    return(
        <div className='apartment'>
            <div className='image-container'></div>
            <div className='details ml-4 mb-4'>
                <h3 className='text-lg'> {title} in {location}</h3>
                <h5 className='price'>{formatedPrice}</h5>
            </div>
        </div>
    );
}