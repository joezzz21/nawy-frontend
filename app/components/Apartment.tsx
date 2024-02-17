import './apartment.css';
export default function Apartment(){
    return(
        <div className='apartment'>
            <div className='image-container'></div>
            <div className='details ml-4 mb-4'>
                <h3 className='text-lg'> Apartment 1</h3>
                <h5 className='price'>$3000</h5>
            </div>
        </div>
    );
}