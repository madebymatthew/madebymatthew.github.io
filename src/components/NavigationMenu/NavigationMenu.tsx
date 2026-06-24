import { NavLink } from "react-router-dom";

type NavigationMenuProps = {
    onClose: () => void;
}

type NavItem = {
    path: string;
    label: string;
}

const navItems: NavItem[] = [
    { path: '/', label: 'Home'},
    { path: '/about', label: 'About'},
];

const NavigationMenu = ({ onClose }: NavigationMenuProps) => {
    return(
        <>
            <nav className="fixed top-0 right-0 h-screen w-3xs border-2 border-amber-950 border-solid bg-amber-50 z-10">
                <ul>
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <NavLink
                            to={item.path}
                            onClick={onClose}>
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default NavigationMenu;