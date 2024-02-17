import "./NavBar.css";

export default function NavBar(){
    return (
        <div className="flex items-center justify-between navbar">
            <p className="font-bold text-lg ml-7">Nawy</p>
            <button className="mr-10 button"> Add an apartment </button>
        </div>
    );
}