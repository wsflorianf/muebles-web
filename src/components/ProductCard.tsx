import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import { MySxProps, Product } from '../types'

type ProductCardProps = {
  product: Product
  path: string
  onClick: () => void
}

const styles: MySxProps = {
  card: {
    borderRadius: '20px',
    maxWidth: '90%',
    transition: 'transform 0.2s',
    ':hover': {md: { transform: 'scale(1.05)' }},
  },
  container: {
    height: 400,
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    display: 'block',
    height: '85%',
    width: 'auto',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
  },
  text: {
    fontSize: 20,
    fontWeight: 500,
    textAlign: 'center',
  },
}

export default function ProductCard({
  product,
  path,
  onClick,
}: ProductCardProps) {
  return (
    <Card sx={styles.card}>
      <CardActionArea sx={styles.container} onClick={onClick}>
        <CardMedia
          component='img'
          image={import.meta.env.BASE_URL+path + product.images[0]}
          alt={product.name}
          sx={styles.image}
        />
        <CardContent sx={{ height: '20%' }}>
          <Typography
            sx={styles.text}
            textTransform={'capitalize'}
            gutterBottom
            component='div'
          >
            {product.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
