import { Box, SxProps, Typography } from "@mui/material";
import { ReactNode } from "react";

const styles: SxProps = {

}

interface GalleryProps{
    title: string
    children?: ReactNode
}

export default function Gallery({title, children}: GalleryProps){
    return (
        <>
        <Typography component='h2' variant="h2" fontWeight={400}>{title}</Typography>
        <Box sx={styles}>
            {children}
        </Box>
        </>
    )
}