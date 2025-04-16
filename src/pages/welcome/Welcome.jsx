import { Suspense } from 'react';
import {
  CodeSnippet,
  Column,
  Grid,
  Tile,
} from '@carbon/react';

import { WelcomeHeader } from '../../components/welcomeHeader/WelcomeHeader';
import { Footer } from '../../components/footer/Footer';
import { Nav } from '../../components/nav/Nav';

// The styles are imported into index.scss by default.
// Do the same unless you have a good reason not to.
// import './welcome.scss';

const Welcome = () => {

  return (
    <Suspense fallback={<p>Loading welcome page...</p>}>
      <Nav />

      {/* Main Content */}
      <section className="cs--welcome">
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

          <Column className="cs--welcome__about" sm={4} md={8} lg={16}>
            <Grid>
              <Column sm={4} md={4} lg={8} xlg={4}>
                <h3 className="cs--welcome__heading">↳ What is this about?</h3>
              </Column>
              {/* While the carbon documentation states that most containers should be
                  sized through the aspect ratios defined in the design language,
                  the practice shows a fixed height often works better. Choose a
                  height that is a multiple of one of the spacing tokens to keep the
                  vertical rhythm */}
              <Column sm={4} md={4} lg={8} xlg={4}>
                <Tile className="cs--welcome__tile cs--welcome__tile--highlight">
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
              <Column sm={4} md={4} lg={8} xlg={4}>
                <Tile className="cs--welcome__tile cs--welcome__tile--highlight">
                  <strong>Stay consistent</strong>
                  <br />
                  <br />
                  Use this as a reference to ensure your project aligns with
                  IBM&apos;s design standards.
                  <br />
                  <br />
                  It is flexible enough to adapt to your needs while promoting a
                  consistent user experience.
                </Tile>
              </Column>
              <Column sm={4} md={4} lg={8} xlg={4}>
                <Tile className="cs--welcome__tile cs--welcome__tile--highlight">
                  <strong>Customize as needed</strong>
                  <br />
                  <br />
                  This is meant to be a starting point and a living guide, not a
                  fixed framework.
                  <br />
                  <br />
                  You can modify the repository to fit your project requirements
                  or use it as inspiration for your own approach.
                </Tile>
              </Column>
            </Grid>
          </Column>
          <Column className="cs--welcome__features" sm={4} md={8} lg={16}>
            <Grid>
              <Column sm={2} md={4} lg={4}>
                <h3 className="cs--welcome__heading">↳ Features</h3>
              </Column>
              <Column className="cs--welcome__tile" sm={2} md={4} lg={4}>
                <Tile title="Feature 1">
                  <strong>React 18 SSR</strong>
                </Tile>
              </Column>
              <Column className="cs--welcome__tile" sm={2} md={4} lg={4}>
                <Tile title="Feature 2">
                  <strong>Carbon Design v11</strong>
                </Tile>
              </Column>
              <Column className="cs--welcome__tile" sm={2} md={4} lg={4}>
                <Tile title="Feature 3">
                  <strong>Vite 6.0</strong>
                </Tile>
              </Column>
            </Grid>
          </Column>
          <Footer />
        </Grid>
      </section>
    </Suspense>
  );
}

export default Welcome;
