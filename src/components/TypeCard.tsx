import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import { MySxProps } from '../types'

interface TypeCardProps {
  image: string
  title: string
  description: string
  reverse?: boolean
  onClick: () => void
}

const cardSizes = {
  height: {
    xs: 550,
    sm: 700,
    md: 400,
  },
}

const styles: MySxProps = {
  card: {
    height: cardSizes.height,
    width: '1000px',
    maxWidth: '95%',
    borderRadius: '20px',
    transition: 'all 0.8s ease-out',
  },
  actionArea: {
    display: 'flex',
    height: cardSizes.height,
  },
  cardContent: {
    boxSizing: 'border-box',
     height: { md: '100%', xs: '50%' },
     width: '100%',
     display: 'flex',
     gap: '20px',
     flexDirection: 'column',
     alignItems: 'center',
     justifyContent: 'center',
     padding: '30px',
     textAlign: 'center',
     
    },
  image: {
    height: {md: '100%', sm: '70%', xs: '50%' },
    objectFit: {md: 'fill', xs: 'cover'}
  },
}

export default function TypeCard(props: TypeCardProps) {
  return (
    <Card className='hidden' sx={styles.card}>
      <CardActionArea
        onClick={props.onClick}
        sx={{
          ...styles.actionArea,
          flexDirection: {
            xs: 'column-reverse',
            md: props.reverse ? 'row-reverse' : 'row',
          },
        }}
      >
        <CardMedia sx={styles.image} component='img' image={props.image} alt={props.title} />
        <CardContent sx={styles.cardContent}>
          <Typography textAlign='center' component='div' variant='h3' fontWeight={{xs: 500, md: 400}} fontSize={{xs: 28,  sm: 38, md: 48}}>
            {props.title}
          </Typography>
          <Typography fontSize={{xs: 20, md: 24}} component={'div'}>{props.description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
