export interface HeaderProps {
  children?: React.ReactNode;
}

const Header = (props: HeaderProps) => {
  const { children } = props;

  return (
    <header className="flex flex-row justify-center h-20 bg-base-100">
      {children}
    </header>
  );
};

export default Header;
