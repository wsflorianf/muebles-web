import Gallery from "../components/Gallery";
import data from '../assets/bedroom-data.json'

export default function Bedroom(){

    return(
        <div className="section">
            <Gallery title="Habitaciones" data={data}/>
        </div>
    )
}