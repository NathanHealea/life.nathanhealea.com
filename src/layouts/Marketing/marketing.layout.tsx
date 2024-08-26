import Header from "../components/header.component";
import Navbar from "../components/navbar.component";

export interface MarketingLayoutInterface
  extends Readonly<{
    children: React.ReactNode;
  }> {}

const MarketingLayout = (props: MarketingLayoutInterface) => {
  const { children } = props;
  return (
    <html lang="en">
      <body>
        <Header>
          <Navbar />
        </Header>

        {children}
      </body>
    </html>
  );
};

export default MarketingLayout;
