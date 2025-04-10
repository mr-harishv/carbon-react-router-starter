import { Suspense, useState } from 'react';
import {
  AspectRatio,
  CodeSnippet,
  Column,
  Content,
  Grid,
  Header,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderMenu,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
  HeaderSideNavItems,
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
  SkipToContent,
  Tile,
} from '@carbon/react';

import {
  LogoGithub,
  MagicWand,
  Search,
  Switcher as SwitcherIcon,
} from '@carbon/icons-react';

import { WelcomeHeader } from '../../components/welcomeHeader/WelcomeHeader';
import { Footer } from '../../components/footer/Footer';

// The styles are imported into index.scss by default.
// Do the same unless you have a good reason not to.
// import './welcome.scss';

const Welcome = () => {
  const [isSideNavExpanded, setIsSideNavExpanded] = useState(false);

  const toggleNav = (event) => {
    setIsSideNavExpanded(!isSideNavExpanded);
  }

  return (
    <Suspense fallback={<p>Loading welcome page...</p>}>
      {/* Header */}
      <Header aria-label="fed-at-ibm">
        <SkipToContent />
        <HeaderMenuButton aria-label={isSideNavExpanded ? 'Close menu' : 'Open menu'}
                          onClick={toggleNav}
                          isCollapsible={true}
                          isActive={isSideNavExpanded}
                          aria-expanded={isSideNavExpanded} />
        <HeaderName href="#" prefix="Carbon">
          React starter template
        </HeaderName>
        <HeaderNavigation aria-label="fed-at-ibm">
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
            <Search size={20}/>
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="App Switcher"
            tooltipAlignment="end"
          >
            <SwitcherIcon size={20}/>
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
      <SideNav aria-label="Side navigation"
               expanded={isSideNavExpanded}
               isPersistent={false}>
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
      <Content className="cs--welcome">
        <WelcomeHeader />
        <Grid>
          <Column sm={4} md={4} lg={8} xlg={4}>
            <h3 className="cs--welcome__heading">↳ Run the template</h3>
          </Column>
          <Column sm={4} md={8} lg={8} xlg={8}>
            <p>This code requires node v.20</p>
            <CodeSnippet type="single" feedback="Copied to clipboard">
              npm i
            </CodeSnippet>
            <CodeSnippet type="single" feedback="Copied to clipboard">
              npm run dev
            </CodeSnippet>
          </Column>

          <Column
            className="cs--welcome__about"
            lg={{span: 16}}
            md={{span: 8}}
            sm={4}
          >
            <Grid>
              <Column sm={4} md={4} lg={8} xlg={4}>
                <h3 className="cs--welcome__heading">↳ What is this about?</h3>
              </Column>
              <Column sm={4} md={4} lg={8} xlg={4}>
                {/* Most containers in Carbon app should be sized through the
                    AspectRatio component */}
                <AspectRatio as={Tile} ratio="4x3" className="cs--welcome__tile">
                  <strong>Purpose</strong>
                  <br/>
                  <br/>
                  This repository provides a simple example to help you get
                  started with the Carbon Design System and React.
                  <br/>
                  <br/>
                  It is designed to save time by offering a pre-configured
                  foundation for your projects.
                </AspectRatio>
              </Column>
              <Column sm={4} md={4} lg={8} xlg={4}>
                <AspectRatio as={Tile} ratio="4x3" className="cs--welcome__tile">
                  <strong>Stay consistent</strong>
                  <br/>
                  <br/>
                  Use this as a reference to ensure your project aligns with
                  IBM&apos;s design standards.
                  <br/>
                  <br/>
                  It is flexible enough to adapt to your needs while promoting
                  a consistent user experience.
                </AspectRatio>
              </Column>
              <Column sm={4} md={4} lg={8} xlg={4}>
                <AspectRatio as={Tile} ratio="4x3" className="cs--welcome__tile">
                  <strong>Customize as needed</strong>
                  <br/>
                  <br/>
                  This is meant to be a starting point and a living guide, not
                  a fixed framework.
                  <br/>
                  <br/>
                  You can modify the repository to fit your project
                  requirements or use it as inspiration for your own approach.
                </AspectRatio>
              </Column>
            </Grid>
          </Column>
          <Column
            className="cs--welcome__features"
            lg={{span: 16}}
            md={{span: 8}}
            sm={4}
          >
            <Grid>
              <Column
                sm={2}
                md={4}
                lg={4}
              >
                <h3 className="cs--welcome__heading">↳ Features</h3>
              </Column>
              <Column className="cs--welcome__tile" sm={2} md={4} lg={4}>
                <Tile title="Flexibility">
                  <strong>React 18 SSR</strong>
                </Tile>
              </Column>
              <Column className="cs--welcome__tile" sm={2} md={4} lg={4}>
                <Tile title="Flexibility">
                  <strong>Carbon Design v11</strong>
                </Tile>
              </Column>
              <Column className="cs--welcome__tile" sm={2} md={4} lg={4}>
                <Tile title="Flexibility">
                  <strong>Vite 6.0</strong>
                </Tile>
              </Column>
            </Grid>
          </Column>
          <Footer />
        </Grid>
      </Content>
  </Suspense>
  );
}

export default Welcome;
