import Apartment from "../components/Apartment";
import "./styles.css"
export default function Apartments(){
    return(
        <div className="flex flex-col items-center">  
            <h2 className="text-2xl font-bold mb-4">All Apartments</h2>
            <div className="flex justify-center flex-wrap">
                <Apartment/>
                <Apartment/>
                <Apartment/>
                <Apartment/>
                <Apartment/>
                <Apartment/>
            </div>
        </div>
    );
}