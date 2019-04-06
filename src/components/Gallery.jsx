import React from 'react';
// import { unstable_Box as Box } from '@material-ui/core/Box'
import Checkbox from '@material-ui/core/Checkbox'
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { compose, shadows, palette, spacing, typography } from '@material-ui/system';
// import { styled } from '@material-ui/styles';
import { Typography, MuiThemeProvider, createMuiTheme } from '@material-ui/core';

import Box from './Box'
// import styled from 'styled-components';
// const Box = styled.div`${spacing}${palette}`;
// const Box = styled('div')(
//     compose(
//         spacing,
//         palette,
//     ),
// );

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#2196f3',
        },
        secondary: {
            main: '#f44336',
        },
    },
});

export default function Gallery({ text, items }) {
    console.log(items)
    let _items = items || new Array(20).fill('')
    return (

        <Box
            display="flex"
            alignItems="flex-start"
            flexWrap="wrap"
            height="100%"
            maxWidth={960}
            bgcolor={{
                xs: "yellow", // newer phones
                sm: "purple", // ipad/tablet
                lg: "green", // small laptop
                xl: "red", // full hd desktop
            }}
            css={{ height: 100 }}
        >
            {_items.map(() => (
                <Box width={{
                    xs: 1 / 2,
                    sm: 1 / 3,
                    lg: 1 / 4,
                    xl: 1 / 4,
                }}>
                    <Box m={1} bgcolor={"lightgrey"} height={300} boxShadow={2} >
                        {text}
                    </Box>
                </Box>
            ))}
        </Box>
        // <MuiThemeProvider theme={theme}>
        // <Box flexWrap="wrap" p={1} m={1} flexWrap="nowrap" bgcolor="lightgrey">
        //     {items.map((item, id) => (
        //         <Box >{text}</Box>
        //     ))}
        // </Box>
        // </MuiThemeProvider>
    );
}