import Filter from "../Filter";
import Listing from "../Listing/Index";
import "./styles.css";

export default function ListingBody(){
    return(
        <main>
            <Filter />
            <Listing />
        </main>
    );
}