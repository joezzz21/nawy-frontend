import Link from "next/link";
import Apartment from "../components/Apartment";
import "./styles.css"
async function getData() {
    const res = await fetch(`http://localhost:8000/apartments`,  {
        headers: {
          'Cache-Control': 'no-store',
        }})
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    
    return res.json()
  }
export default async function Apartments(){
    const data = await getData();
    
    return(
        <div className="flex flex-col items-center">  
            <h2 className="text-2xl font-bold mb-4">All Apartments</h2>
            <div className="flex justify-center flex-wrap">
            {data.map((apartment: {id: number, title: string, location: string, price: number}) => (
                <Link key={apartment.id} href={`/apartments/${apartment.id}`}>
                  <Apartment
                    title={apartment.title}
                    location={apartment.location}
                    price={apartment.price}
                  />
              </Link>
            ))}
            </div>
        </div>
    );
}