import { SnackbarProvider } from 'notistack'
import React from 'react'

export const SnackBar = ({children}) => {
    return (
        <SnackbarProvider maxSnack={3}  autoHideDuration={3000} style={{
            fontSize : '1rem'
        }}>
            {children}
        </SnackbarProvider>
    )
}
