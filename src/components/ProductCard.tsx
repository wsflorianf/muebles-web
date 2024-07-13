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
    ':hover': {md: { transform: 'scale(1.1)' }},
  },
  container: {
    height: 400,
  },
  image: {
    display: 'block',
    height: '80%',
    width: 'auto',
    margin: '0 auto',
    borderRadius: '10px',
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
          image={path + product.images[0]}
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
