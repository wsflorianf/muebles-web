import Gallery from '../components/Gallery'
import data from '../assets/other-data.json'

export default function Other() {
  return (
    <div className='section'>
      <Gallery title='Otros' data={data}/>
    </div>
  )
}
