import { Box, SxProps } from "@mui/material";
import { PropsWithChildren } from "react";

const styles: SxProps = {

}

export default function Gallery({children}: PropsWithChildren){
    return (
        <Box sx={styles}>
            {children}
        </Box>
    )
}