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
    const hiddenCards = document.querySelectorAll('.hidden')

    const options: IntersectionObserverInit = {
      root: null,
      threshold: 0.5,
    }

    const callback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        // Si el elemento observado entra en la pantalla
        if (entry.isIntersecting) {
          // Hacemos algo, por ejemplo, cambiar el color de fondo del elemento
          entry.target.classList.add('show')

          // Podrías realizar cualquier acción aquí cuando el elemento entra en la pantalla
          console.log('El elemento ha entrado en la pantalla')

          // Después de hacer lo que necesitas, puedes dejar de observar el elemento si es necesario
          observer.unobserve(entry.target)
        }
      })
    }

    const cardsObserver = new IntersectionObserver(callback, options)

    hiddenCards.forEach((card) => cardsObserver.observe(card))
  }, [])

  return (
    <div id='main' className='section'>
      <Typography
        component='h3'
        variant='h2'
        className='title'
        fontWeight={500}
        fontSize={{ xs: 40, md: 60 }}
      >
        Tipos de muebles
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
