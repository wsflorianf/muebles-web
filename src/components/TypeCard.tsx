import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

interface TypeCardProps{
    image: string
    title: string
    description: string
    reverse?: boolean
}

export default function TypeCard(props: TypeCardProps) {

  return (
    <Card className='hidden' sx={{height: '400px', width: '1000px', maxWidth: '90%', borderRadius: '20px', transition: 'all 0.8s ease-out'}}>
      <CardActionArea className='type-card' sx={{display: 'flex', height: '400px', flexDirection: props.reverse?'row-reverse':'row'}}>
      <CardMedia component='img' image={props.image} alt='n'/>
      <CardContent  sx={{height: '100%', width: '100%'}}>
      <Typography component='div' variant='h3' fontWeight={400}>{props.title}</Typography>
        <Typography component={'div'}>{props.description}</Typography>
      </CardContent>
      </CardActionArea>
    </Card>
  )
}
