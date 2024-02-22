import React from 'react'
import '../styles/footer.css'

export default function Footer() {
    return (
        <footer>
            <div className='copy'>
                &copy; <span> Firdaws.io 2024. All rights Reserved </span>
            </div>

            <div className="design">
                Designed by
                <a href="firdaws.vercel.app"> firdaws.io</a>
            </div>

        </footer>
    )
}
