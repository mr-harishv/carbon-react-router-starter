import { Suspense } from 'react';
import {
  Column,
  Content,
  Grid,
  Header,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderMenu,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
  HeaderSideNavItems,
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
  Tile,
} from '@carbon/react';

import {
  LogoGithub,
  MagicWand,
  Search,
  Switcher as SwitcherIcon,
} from '@carbon/icons-react';

const Welcome = () => {
  return (
    <Suspense fallback={<p>Loading welcome page...</p>}>
      <div className="main">
        {/* Header */}
        <Header aria-label="FED@IBM">
          <HeaderName href="#" prefix="FED@IBM">
            React Carbon Starter
          </HeaderName>
          <HeaderNavigation aria-label="FED@IBM">
            <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
            <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
            <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
            <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
              <HeaderMenuItem href="#one">Sub-link 1</HeaderMenuItem>
              <HeaderMenuItem href="#two">Sub-link 2</HeaderMenuItem>
              <HeaderMenuItem href="#three">Sub-link 3</HeaderMenuItem>
            </HeaderMenu>
          </HeaderNavigation>
          <HeaderGlobalBar>
            <HeaderGlobalAction aria-label="Search">
              <Search size={20} />
            </HeaderGlobalAction>
            <HeaderGlobalAction
              aria-label="App Switcher"
              tooltipAlignment="end"
            >
              <SwitcherIcon size={20} />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>
        <SideNav aria-label="Side navigation" expanded isFixedNav>
          <SideNavItems>
            <HeaderSideNavItems hasDivider>
              <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
              <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
              <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
              <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
                <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
                <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
                <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
              </HeaderMenu>
            </HeaderSideNavItems>
            <SideNavMenu renderIcon={MagicWand} title="Getting started">
              <SideNavMenuItem href="#">Install</SideNavMenuItem>
              <SideNavMenuItem href="#">Guide</SideNavMenuItem>
              <SideNavMenuItem href="#">FAQ</SideNavMenuItem>
            </SideNavMenu>
            <SideNavLink renderIcon={LogoGithub} href="#">
              GitHub
            </SideNavLink>
          </SideNavItems>
        </SideNav>

        {/* Main Content */}
        <Content className="carbon-starter--main">
          <Grid>
            <Column lg={{ span: 16 }} md={{ span: 8 }} sm={4}>
              <h2>Welcome to the FED@IBM React Carbon Starter</h2>
              <p>
                This is a boilerplate and living guide for creating React
                applications with the Carbon Design System.
              </p>
            </Column>
            <Column
              className="carbon-starter--about"
              lg={{ span: 16 }}
              md={{ span: 8 }}
              sm={4}
            >
              <Grid>
                <Column
                  className="carbon-starter--tiles__title"
                  sm={2}
                  md={4}
                  lg={4}
                >
                  <h3>What is this about?</h3>
                </Column>
                <Column sm={2} md={4} lg={4}>
                  <Tile
                    className="carbon-starter--tile"
                    title="Getting Started"
                  >
                    <strong>Purpose</strong>
                    <br />
                    <br />
                    This repository provides a simple example to help you get
                    started with the Carbon Design System and React.
                    <br />
                    <br />
                    It is designed to save time by offering a pre-configured
                    foundation for your projects.
                  </Tile>
                </Column>
                <Column className="carbon-starter--tile" sm={2} md={4} lg={4}>
                  <Tile title="Consistency">
                    <strong>Stay Consistent</strong>
                    <br />
                    <br />
                    Use this as a reference to ensure your project aligns with
                    IBM&apos;s design standards.
                    <br />
                    <br />
                    It is flexible enough to adapt to your needs while promoting
                    a consistent user experience.
                  </Tile>
                </Column>
                <Column className="carbon-starter--tile" sm={2} md={4} lg={4}>
                  <Tile title="Flexibility">
                    <strong>Customize as needed</strong>
                    <br />
                    <br />
                    This is meant to be a starting point and a living guide, not
                    a fixed framework.
                    <br />
                    <br />
                    You can modify the repository to fit your project
                    requirements or use it as inspiration for your own approach.
                  </Tile>
                </Column>
              </Grid>
            </Column>
            <Column
              className="carbon-starter--features"
              lg={{ span: 16 }}
              md={{ span: 8 }}
              sm={4}
            >
              <Grid>
                <Column
                  className="carbon-starter--tiles__title"
                  sm={2}
                  md={4}
                  lg={4}
                >
                  <h3>Features</h3>
                </Column>
                <Column className="carbon-starter--tile" sm={2} md={4} lg={4}>
                  <Tile title="Flexibility">
                    <strong>React 18 SSR</strong>
                  </Tile>
                </Column>
                <Column className="carbon-starter--tile" sm={2} md={4} lg={4}>
                  <Tile title="Flexibility">
                    <strong>Carbon Design v11</strong>
                  </Tile>
                </Column>
                <Column className="carbon-starter--tile" sm={2} md={4} lg={4}>
                  <Tile title="Flexibility">
                    <strong>Vite 6.0</strong>
                  </Tile>
                </Column>
              </Grid>
            </Column>
          </Grid>
        </Content>
      </div>
    </Suspense>
  );
};

export default Welcome;
