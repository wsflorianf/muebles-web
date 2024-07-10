import TypeCard from '../components/TypeCard'
import imgCocina from '../images/cocina-type2.jpeg'
import imgHabitacion from '../images/habitacion-type.jpeg'
import imgBano from '../images/bano-type.jpeg'
import imgOficina from '../images/oficina-type.jpeg'
import { useEffect } from 'react'
import { Divider, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function Main() {
  const navigate = useNavigate()

  useEffect(() => {
    //Elementos que serán observados para aparecer con efecto 'Fade In'
    const hiddenCards = document.querySelectorAll('.hidden')

    //Opciones del observador
    const options: IntersectionObserverInit = {
      root: null,
      threshold: 0.5,
    }

    //Callback del observador
    const callback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        // Si el elemento observado entra en la pantalla
        if (entry.isIntersecting) {
          //Clase que lo hace visible
          entry.target.classList.add('show')

          // Dejar de observar el elemento
          observer.unobserve(entry.target)
        }
      })
    }

    //Crear el observador
    const cardsObserver = new IntersectionObserver(callback, options)

    //Observar cada elemento que se requiere
    hiddenCards.forEach((card) => cardsObserver.observe(card))
  }, [])

  return (
    <div id='main' className='section'>
      <Typography
        component='h3'
        variant='h2'
        className='title'
        fontWeight={500}
        fontSize={{ xs: 34, md: 60 }}
      >
        Variedad en Muebles
      </Typography>
      <Divider flexItem />
      <TypeCard
        image={imgHabitacion}
        onClick={() => navigate('bedroom')}
        title='Habitaciones'
        description='Transformamos tus espacios personales en santuarios de confort y estilo con nuestros muebles personalizados para habitaciones.'
      />

      <TypeCard
        image={imgCocina}
        onClick={() => navigate('kitchen')}
        title='Cocinas'
        reverse
        description='Descubre nuestras soluciones de mobiliario para cocinas, combinando funcionalidad y diseño para crear el corazón de tu hogar.'
      />

      <TypeCard
        image={imgBano}
        onClick={() => navigate('bathroom')}
        title='Baños'
        description='Dale un toque de elegancia y modernidad a tu baño con nuestros muebles diseñados a medida.'
      />

      <TypeCard
        image={imgOficina}
        onClick={() => navigate('office')}
        title='Oficinas'
        reverse
        description='Optimizamos tu espacio de trabajo con muebles ergonómicos y sofisticados, perfectos para cualquier oficina.'
      />

      <TypeCard
        image={''}
        onClick={() => navigate('other')}
        title='Otros'
        description='Explora nuestras diversas soluciones de mobiliario para cualquier otra área de tu hogar o negocio.'
      />
    </div>
  )
}
