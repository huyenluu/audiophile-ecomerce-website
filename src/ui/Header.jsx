import NavBar from './NavBar'

function Header({category}) {

        return (
            <header className='bg-black'>
                <NavBar />
                <h1 className='text-heading-4 text-white uppercase my-8 text-center
                                sm:text-heading-2 sm:my-16
                                lg:my-24'
                >
                    {category}
                </h1>
            </header>
        )
}

export default Header
