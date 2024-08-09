import { CSSProperties, MouseEvent, useState } from 'react'
import { Product } from '../types'
import { IconButton, MobileStepper, Paper, SxProps, Theme } from '@mui/material'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'

type ImgCarouselTypes = {
  product?: Product
  path: string
  sx?: SxProps<Theme>
}

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

export default function ImgCarousel({ product, path, sx }: ImgCarouselTypes) {
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = product ? product.images.length : 0
  const [zoomImage, setZoomImage] = useState<CSSProperties>({})

  const handleZoomMove = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    const rects = target.getBoundingClientRect()



    const x = Math.ceil((e.clientX-rects.x)*100/rects.width)
    const y = Math.ceil((e.clientY-rects.y)*100/rects.height)
    console.log(x,y)

    setZoomImage({transform: 'scale(4)', transformOrigin: `${x}% ${y}%`})
   
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleStepChange = (step: number) => {
    setActiveStep(step)
  }
  return (
    <Paper sx={{ ...sx, display: 'flex', flexDirection: 'column' }}>
      <AutoPlaySwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        
        enableMouseEvents
        style={{ flex: 9 }}
        interval={zoomImage.transform?120000:5000}
        className='carousel-img'
      >
        {product?.images.map((image, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              overflow: 'hidden',
              margin: 'auto',
              width: '100%',
            }}
            onMouseMove={handleZoomMove}
            onMouseLeave={() => setZoomImage({})}
          >
            <img
              style={{
                maxHeight: '100%',
                maxWidth: '100%',
                margin: 'auto',
                pointerEvents: "none",
                transition: "all 0.05s",
                ...zoomImage,
              }}
              src={import.meta.env.BASE_URL + path + image}
              alt={product.name}
            />
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position='static'
        sx={{ sx: 1, backgroundColor: '#eee' }}
        activeStep={activeStep}
        nextButton={
          <IconButton
            size='small'
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            <KeyboardArrowRight />
          </IconButton>
        }
        backButton={
          <IconButton
            size='small'
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            <KeyboardArrowLeft />
          </IconButton>
        }
      />
    </Paper>
  )
}
