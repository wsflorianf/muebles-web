import TypeCard from '../components/TypeCard'
import imgCocina from '../images/cocina-type.jpg'
import imgHabitacion from '../images/habitacion-type.jpeg'
import imgBano from '../images/bano-type.jpeg'
import imgOficina from '../images/oficina-type.jpeg'
import { useEffect } from 'react'
import { Divider, Typography } from '@mui/material'

export default function Main() {
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
        <Typography component='h3' variant='h2'>Diseñamos muebles a tu medida</Typography>
        <Divider flexItem>
            
        </Divider>
      <TypeCard
        image={imgHabitacion}
        title='Habitaciones'
        description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae repellat molestiae ullam facilis, non adipisci. Harum reiciendis ratione, quibusdam veritatis exercitationem sed accusantium assumenda labore repellat, doloremque, accusamus aliquid maiores.'
      />
      <TypeCard
        image={imgCocina}
        title='Cocinas'
        reverse
        description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae repellat molestiae ullam facilis, non adipisci. Harum reiciendis ratione, quibusdam veritatis exercitationem sed accusantium assumenda labore repellat, doloremque, accusamus aliquid maiores.'
      />
      <TypeCard
        image={imgBano}
        title='Baños'
        description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae repellat molestiae ullam facilis, non adipisci. Harum reiciendis ratione, quibusdam veritatis exercitationem sed accusantium assumenda labore repellat, doloremque, accusamus aliquid maiores.'
      />
      <TypeCard
        image={imgOficina}
        title='Oficinas'
        reverse
        description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae repellat molestiae ullam facilis, non adipisci. Harum reiciendis ratione, quibusdam veritatis exercitationem sed accusantium assumenda labore repellat, doloremque, accusamus aliquid maiores.'
      />

      <TypeCard
        image={imgCocina}
        title='Cocinas'
        description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae repellat molestiae ullam facilis, non adipisci. Harum reiciendis ratione, quibusdam veritatis exercitationem sed accusantium assumenda labore repellat, doloremque, accusamus aliquid maiores.'
      />
      <TypeCard
        image={imgCocina}
        title='Baños'
        reverse
        description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae repellat molestiae ullam facilis, non adipisci. Harum reiciendis ratione, quibusdam veritatis exercitationem sed accusantium assumenda labore repellat, doloremque, accusamus aliquid maiores.'
      />
      <TypeCard
        image={imgCocina}
        title='Habitaciones'
        description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae repellat molestiae ullam facilis, non adipisci. Harum reiciendis ratione, quibusdam veritatis exercitationem sed accusantium assumenda labore repellat, doloremque, accusamus aliquid maiores.'
      />
      <TypeCard
        image={imgCocina}
        title='Oficinas'
        reverse
        description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae repellat molestiae ullam facilis, non adipisci. Harum reiciendis ratione, quibusdam veritatis exercitationem sed accusantium assumenda labore repellat, doloremque, accusamus aliquid maiores.'
      />
      <TypeCard
        image={imgCocina}
        title='Cocinas'
        description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae repellat molestiae ullam facilis, non adipisci. Harum reiciendis ratione, quibusdam veritatis exercitationem sed accusantium assumenda labore repellat, doloremque, accusamus aliquid maiores.'
      />
      <TypeCard
        image={imgCocina}
        title='Baños'
        reverse
        description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae repellat molestiae ullam facilis, non adipisci. Harum reiciendis ratione, quibusdam veritatis exercitationem sed accusantium assumenda labore repellat, doloremque, accusamus aliquid maiores.'
      />
      <TypeCard
        image={imgCocina}
        title='Habitaciones'
        description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae repellat molestiae ullam facilis, non adipisci. Harum reiciendis ratione, quibusdam veritatis exercitationem sed accusantium assumenda labore repellat, doloremque, accusamus aliquid maiores.'
      />
      <TypeCard
        image={imgCocina}
        title='Oficinas'
        reverse
        description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae repellat molestiae ullam facilis, non adipisci. Harum reiciendis ratione, quibusdam veritatis exercitationem sed accusantium assumenda labore repellat, doloremque, accusamus aliquid maiores.'
      />
      <TypeCard
        image={imgCocina}
        title='Cocinas'
        description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae repellat molestiae ullam facilis, non adipisci. Harum reiciendis ratione, quibusdam veritatis exercitationem sed accusantium assumenda labore repellat, doloremque, accusamus aliquid maiores.'
      />
      <TypeCard
        image={imgCocina}
        title='Baños'
        reverse
        description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae repellat molestiae ullam facilis, non adipisci. Harum reiciendis ratione, quibusdam veritatis exercitationem sed accusantium assumenda labore repellat, doloremque, accusamus aliquid maiores.'
      />
      <TypeCard
        image={imgCocina}
        title='Habitaciones'
        description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae repellat molestiae ullam facilis, non adipisci. Harum reiciendis ratione, quibusdam veritatis exercitationem sed accusantium assumenda labore repellat, doloremque, accusamus aliquid maiores.'
      />
    </div>
  )
}
