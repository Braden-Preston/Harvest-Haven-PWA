// import styled from 'styled-components';
import { unstable_Box } from '@material-ui/core/Box'
import { styled } from '@material-ui/styles';
import { compose, shadows, palette, spacing, typography } from '@material-ui/system';

// import { spacing, palette } from '@material-ui/system';

const Box = styled(unstable_Box)(
    compose(
        spacing,
        palette,
        shadows,
        typography
    ),
);

// const Box = styled.div`${spacing}${palette}`;

export default Box;