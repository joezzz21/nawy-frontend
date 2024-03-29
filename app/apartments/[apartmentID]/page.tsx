import "./styles.css";
async function getData({apartmentID}:{apartmentID: string}) {
    const res = await fetch(`http://localhost:8000/apartments/${apartmentID}`, { next: { revalidate: 60 } })
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    
    return res.json()
  }
export default async function ApartmentDetails({params}:
    {
        params: {apartmentID: string}
    }){
    const { apartmentID } = params;
    const data = await getData({ apartmentID });
    
    
    const val = (200000).toLocaleString('en-US', {
        style: 'currency',
        currency: 'EGP',
        });

    const squareMeterSymbol = '\u00B2';
    return (
        <div className="flex flex-col w-full mb-10"> 
            <div className='image-container flex items-end'>
                <p className="text-white ml-4 mb-4 text-2xl font-bold">Apartment {params.apartmentID}</p>
            </div>
            <div className="flex justify-between mt-6">
                <h2 className="text-xl font-bold">{data.title} . {data.beds} Beds . {data.size} m{squareMeterSymbol} . {data.location}</h2>
                <h2 className="text-lg font-bold price">{val}</h2>
            </div>
            <p className="mt-6">
                When one thinks the views of Lake Tahoe could not get any better, this fantastic home takes the win. The stunning home is in desirable Maria Bay, Nevada, with panoramic views from the back deck. The property offers a private beach, perfect for a summer getaway. This place is great for families or a group of friends looking to enjoy the nature and outdoor activities in Lake Tahoe. The home features a modern design and comfortable furnishings. The open living area has large windows, allowing guests to take in the beautiful scenery. Guests can relax by the fireplace or step out onto the deck to breathe in the fresh mountain air. The kitchen is fully equipped for cooking meals at home. The home has four bedrooms and two bathrooms, comfortably accommodating up to eight guests. The master bedroom has a king bed and an en suite bathroom.
                The second bedroom also has a king bed. The third bedroom has a queen bed, and the fourth bedroom has two twin beds.
                The spacious deck has a barbecue grill and outdoor seating. Guests can dine al fresco while enjoying the lake and mountain views. The property is close to the beach, making it easy to spend the day swimming, paddleboarding, or simply relaxing on the shore. The home is also near hiking and biking trails, as well as restaurants and shops in Kings Beach. In the winter, guests can drive to nearby ski resorts for a day on the slopes. Whether you're planning a family vacation or a group getaway, this Lake Tahoe home offers a beautiful setting and modern comforts.
            </p>
        </div>
    );
}   