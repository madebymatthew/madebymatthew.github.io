import HamburgerButton from './HamburgerButton';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full flex justify-end p-4">
            <HamburgerButton />
        </header>
    );
};

export default Header;