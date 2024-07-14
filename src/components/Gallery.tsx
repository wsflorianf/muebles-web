import { Box, Divider, SxProps, Typography } from '@mui/material'
import { useState } from 'react'
import { Product, ProductsData } from '../types'
import ProductCard from './ProductCard'
import ProductModal from './ProductModal'

interface GalleryProps {
  title?: string
  data: ProductsData
}

const styles: SxProps = {
    display: 'flex',
    flexDirection: {xs: 'column', md: 'row'},
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '30px',
    justifyContent: 'center',
    marginTop: '30px',
    maxWidth: '100vw',
  }

export default function Gallery({ title, data }: GalleryProps) {
  const [open, setOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product>()

  const handleOpen = (product: Product) => {
    setSelectedProduct(product)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setSelectedProduct(undefined)
  }

  return (
    <>
      <Typography className='title' component='h2' variant='h2' marginBottom={2} fontSize={{xs: 32, md: 48}} fontWeight={500}>
        {title}
      </Typography>
      <Divider flexItem />
      <Box sx={styles}>
        {data.products.map((product) => {
          return (
            <ProductCard product={product} key={product.id} path={data.path} onClick={()=>handleOpen(product)}/>
          )
        })}
      </Box>

        <ProductModal open={open} onClose={handleClose} path={data.path} product={selectedProduct} />
      
    </>
  )
}
