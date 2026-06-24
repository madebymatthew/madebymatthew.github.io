import HamburgerButton from './HamburgerButton';

type HeaderProps = {
    onToggleMenu: () => void;
}

const Header = ({ onToggleMenu }: HeaderProps) => {
    return (
        <header className="fixed top-0 left-0 w-full flex justify-end p-4">
            <HamburgerButton onToggleMenu={onToggleMenu} />
        </header>
    );
};

export default Header;