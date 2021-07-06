import React from 'react'
import FooterCopyright from './FooterCopyright'
import FooterLogo from './FooterLogo'
import FooterMenu from './FooterMenu'

function Footer() {
    return <footer>
        <FooterLogo/>
        <FooterMenu/>
        <FooterCopyright/>
    </footer>
}

export default Footer