import React from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter} from 'react-router-dom'
import {ThemeProvider} from '@material-ui/styles'
import theme from './theme'

const App = () => (
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <MainRouter />
        </ThemeProvider>
    </BrowserRouter>
)
