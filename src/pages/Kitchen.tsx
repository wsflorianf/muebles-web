import Gallery from '../components/Gallery'
import data from '../assets/kitchen-data.json'

export default function Kitchen() {
  return (
    <div className='section'>
      <Gallery title='Cocinas' data={data}></Gallery>
    </div>
  )
}
