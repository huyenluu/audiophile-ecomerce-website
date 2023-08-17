import NavBar from './NavBar';

function Header({ category }) {
    return (
        <header className="bg-black">
            <NavBar />
            {category && (
                <h1
                    className="my-8 text-center text-heading-4 uppercase text-white
                                sm:my-16 sm:text-heading-2
                                lg:my-24"
                >
                    {category}
                </h1>
            )}
        </header>
    );
}

export default Header;
