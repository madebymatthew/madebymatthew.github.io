
type HamburgerButtonProps = {
  onToggleMenu: () => void;
}

const HamburgerButton = ({ onToggleMenu }: HamburgerButtonProps) => {
  return (
    <button
      onClick={onToggleMenu}
      className="bg-amber-700 hover:bg-amber-600 text-white font-bold py-6 px-6 rounded "></button>
  );
};

export default HamburgerButton;