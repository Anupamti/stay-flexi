import { Container } from '@mui/system'
import React from 'react'
import Footer from 'src/components/common/footer/footer'
import Header from 'src/components/common/header/header'

/** 
 *  This is an HOC which is reponsible for providing layout to the project
 * */
function AppLayout({ children }) {
    return (
        <div>
            <Header />
            <Container sx={{ marginTop: '3rem', height: '100%', minHeight: '70vh' }} >
                {/*Children Components will rendered here */}
                {children}
            </Container>
            <Footer />
        </div>
    )
}

export default AppLayout