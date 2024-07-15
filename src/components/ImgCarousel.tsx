import { useState } from 'react'
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
        interval={5000}
        className='carousel-img'
      >
        {product?.images.map((image, index) => (
          <img
            key={index}
            style={{
              maxHeight: '100%',
              maxWidth: '100%',
              display: 'block',
              margin: 'auto',
              overflow: 'hidden',
              width: 'auto',
            }}
            src={import.meta.env.BASE_URL+path + image}
            alt={product.name}
          />
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
