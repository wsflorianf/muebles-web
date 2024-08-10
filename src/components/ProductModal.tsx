import { CloseRounded } from '@mui/icons-material'
import { Box, IconButton, Modal, Typography } from '@mui/material'
import { MySxProps, Product } from '../types'
import ImgCarousel from './ImgCarousel.tsx'

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
    width: '95%',
    height: '90vh',
    maxWidth: 1200,
    bgcolor: 'background.paper',
    boxShadow: 24,
    paddingX: { xs: 1, md: 4 },
    paddingY: { xs: 1, md: 6 },
    paddingTop: { xs: 4, md: 6 },
    gap: 2,
    display: 'flex',
    borderRadius: '20px',
    flexDirection: { xs: 'column-reverse', md: 'row' },
  },
  closeButton: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  carousel: {
    flex: 6,
    width: '100%',
    height: '100%',
    borderRadius: '20px',
    overflow: 'hidden',
  },
  info: {
    flex: { xs: 3, md: 4 },
    display: 'flex',
    gap: 2,
    flexDirection: 'column',
    height: '100%',
    alignItems: 'center',
    paddingX: 4,
    overflow: 'auto'
  },
}

export default function ProductModal({
  product,
  open,
  path,
  onClose,
}: ProductModalTypes) {
  return (
    <Modal
      slotProps={{
        backdrop: {
          sx: {
            backdropFilter: 'blur(6px)',
            backgroundColor: 'rgba(0,0,0,0.2)',
          },
        },
      }}
      open={open}
      onClose={onClose}
    >
      <Box sx={styles.modalStyle}>
        <IconButton sx={styles.closeButton} onClick={onClose}>
          <CloseRounded />
        </IconButton>
        <ImgCarousel sx={styles.carousel} product={product} path={path} />

        <Box sx={styles.info}>
          <Typography
            fontSize={{ xs: 24, md: 48 }}
            fontWeight={500}
            textAlign={'center'}
            component='div'
          >
            {product?.name}
          </Typography>
          <Typography fontSize={{ xs: 16, md: 18 }}>
            {product?.description}
          </Typography>
        </Box>
      </Box>
    </Modal>
  )
}
