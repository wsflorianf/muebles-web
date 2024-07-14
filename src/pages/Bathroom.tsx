import Gallery from '../components/Gallery'
import data from '../assets/bathroom-data.json'

export default function Bathroom() {

  return <div className='section'>
    <Gallery title='Baños' data={data}/>
  </div>
}