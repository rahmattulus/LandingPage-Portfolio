import 'boxicons/css/boxicons.min.css'

const Header = () => {

    const toggleMobileMenu = () => {
        const mobileMenu = document.getElementById('mobileMenu')

        if(mobileMenu.classList.contains('hidden')){
            mobileMenu.classList.remove('hidden')
        }else{
            mobileMenu.classList.add('hidden')
        }
    }

  return (
    <header className="flex relative top-0 z-50 justify-between 
    items-center py-4 px-4 lg:px-20">

        <h3 className="text-3xl md:text-4xl lg:text-5xl 
        font-light m-0"></h3>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-12 z-10">
            <a className="text-base tracking-wider transition-color hover:text-blue-300"
             data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1250"
             href="#about">
                About Me
            </a>
            <a className="text-base tracking-wider transition-color hover:text-blue-300"
            data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500"
            href="">
                Project
            </a>
            <a className="text-base tracking-wider transition-color hover:text-blue-300"
            data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1750"
            href="">
                Contact 
            </a>
        </nav>

        <button onClick={toggleMobileMenu} className='md:hidden text-3xl p-2 z-50'>
            <i class='bx bx-menu'></i>
        </button>

        {/* Mobile Menu */}
        <div id='mobileMenu' className='hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur- md'>
            <nav className="flex flex-col gap-4 items-center">
                <a className="text-base tracking-wider transition-color hover:text-blue-300" href="">
                    About Me
                </a>
                <a className="text-base tracking-wider transition-color hover:text-blue-300" href="">
                    Project
                </a>
                <a className="text-base tracking-wider transition-color hover:text-blue-300" href="">
                    Contact
                </a>
        </nav>
        </div>
    </header>
  )
}

export default Header