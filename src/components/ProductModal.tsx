import { CloseRounded } from '@mui/icons-material'
import { Box, IconButton, Modal, Paper, Typography, useTheme } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import { MySxProps, Product } from '../types'

type ProductModalTypes = {
  product?: Product
  open: boolean
  path: string
  onClose: () => void
}

const styles: MySxProps = {
  modalStyle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: 1200,
    maxHeight: '90%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    paddingX: {xs: 2, md: 4},
    paddingY: {xs: 2, md: 10},
    display: 'flex',
    gap: 2,
    borderRadius: '20px',
    alignItems: 'flex-start',
    flexDirection: {xs: 'column', md: 'row'},
  },
  closeButton: {
    display: {xs: 'none', md: 'block'},
    position: 'absolute',
    top: 8,
    right: 8,
  },
  carousel: {
    flex: 6,
    width: '100%',
  },
  carouselElement: {
    height: '400px',
    borderRadius: '20px',
  },
  info: {
    flex: 4,
    display: 'flex',
    gap: 2,
    flexDirection: 'column',
    height: '100%',
    alignItems: 'center',
  },
}

export default function ProductModal({
  product,
  open,
  path,
  onClose,
}: ProductModalTypes) {

  const theme = useTheme()

  return (
    <Modal slotProps={{backdrop: {sx: {backdropFilter: 'blur(6px)', backgroundColor: 'rgba(0,0,0,0.2)'}}}} open={open} onClose={onClose}>
      <Box sx={styles.modalStyle}>
        <IconButton sx={styles.closeButton} onClick={onClose}>
          <CloseRounded />
        </IconButton>


        <Carousel sx={styles.carousel}>
          {product?.images.map((image, index) => (
            <Paper
              sx={styles.carouselElement}
              key={index}
              className='carousel-img'
            >
              <img src={path + image} alt={product.name} key={index} />
            </Paper>
          ))}
        </Carousel>
        <Box sx={styles.info}>
          <Typography fontSize={{xs: 24, md: 48}} variant='h3' textTransform={'capitalize'} textAlign={'center'} component='div'>
            {product?.name}
          </Typography>
          <Typography fontSize={{xs: 16, md: 18}}>
            {product?.description}
          </Typography>         
    
        </Box>
      </Box>
    </Modal>
  )
}
