import Gallery from '../components/Gallery'
import data from '../assets/office-data.json'

export default function Office() {
  return (
    <div className='section'>
      <Gallery title='Oficinas' data={data}></Gallery>
    </div>
  )
}
