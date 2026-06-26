import HamburgerButtonLine from "./HamburgerButtonLine";

type HamburgerButtonProps = {
  onToggleMenu: () => void;
}

const HamburgerButton = ({ onToggleMenu }: HamburgerButtonProps) => {
  return (
    <button
      onClick={onToggleMenu}
      className="bg-sky-950 hover:bg-sky-900 w-16 h-16 rounded flex flex-col gap-1.5 justify-center items-center"
    >
      <HamburgerButtonLine/>
      <HamburgerButtonLine/>
      <HamburgerButtonLine/>

    </button>
  );
};

export default HamburgerButton;