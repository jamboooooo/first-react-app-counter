import React from 'react'
import footerLogo from './assets/footer-logo.svg'

function Footer() {
    return <footer>
        <img src={footerLogo} />
        <ul>
            <li>Партнерам</li>
            <li>Разработчикам</li>
            <li>Вакансии</li>
        </ul>
        <span>ООО “интукод”, 2020г.</span>
    </footer>
}

export default Footer