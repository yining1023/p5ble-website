/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    // const Logo = props => (
    //   <div className="projectLogo">
    //     <img src={props.img_src} alt="Project Logo" />
    //   </div>
    // );

    const ProjectTitle = () => (
      <div>
        <h2 className="projectTitle">
          {siteConfig.title}
          <small>{siteConfig.tagline}</small>
        </h2>
        <h1 style={{color: 'red'}}>This website is NOT up-to-date, it has been moved to 👇 <br />
          <a href="https://itpnyu.github.io/p5ble-website"> https://itpnyu.github.io/p5ble-website</a>.
        </h1>
      </div>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        {/* <Logo img_src={`${baseUrl}img/docusaurus.svg`} /> */}
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          {/*<PromoSection>
            <Button href={docUrl('getstarted.html')}>Get Started</Button>
            <Button href={docUrl('api.html')}>APIs</Button>
            <Button href={docUrl('quick-start.html')}>Examples</Button>
            <Button href={`${baseUrl}blog`}>Tutorials</Button>
          </PromoSection>*/}
        </div>
      </SplashContainer>
    );
  }
}

class Code extends React.Component {
  render() {
    return (
      <div className="codeContainer">
        <h2 className="center">
          Connect to a BLE device and read from one characteristic:
        </h2>
        <div className="codeBox">
          <div className="codeExample">
            <p className="code bold">
              // Connect to a BLE device by passing the service UUID
            </p>
            <p className="code mb20">
              p5ble.<span className="codehl3">connect</span>(<span className="codehl2">'19b10010-e8f2-537e-4f6c-d104768a1214'</span>, gotCharacteristics);
            </p>
            <p className="code bold">
            // Got Characteristics
            </p>
            <p className="code">
            <span className="codehl">function</span> <span className="codehl3">gotCharacteristics</span>(error, characteristics) &#123;
            </p>
              <p className="code">
              &nbsp;&nbsp;console.<span className="codehl3">log</span>(characteristics);
              </p>
              <p className="code">
              &nbsp;&nbsp;myCharacteristic = characteristics[0];
              </p>
              <p className="code bold">
              &nbsp;&nbsp;// Read the value of the first characteristic
              </p>
              <p className="code">
              &nbsp;&nbsp;p5ble.<span className="codehl3">read</span>(myCharacteristic, gotValue);
              </p>
            <p className="code mb20">
              &#125;
            </p>
          </div>
        </div>

      </div>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="left"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    // const FeatureCallout = () => (
    //   <div
    //     className="productShowcaseSection paddingBottom"
    //     style={{textAlign: 'center'}}>
    //     <h2>Feature Callout</h2>
    //     <MarkdownBlock>These are features of this project</MarkdownBlock>
    //   </div>
    // );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content: 'Talk about trying this out',
            image: `${baseUrl}img/docusaurus.svg`,
            imageAlign: 'left',
            title: 'Get ',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="light">
        {[
          {
            content: 'With p5.ble.js, you can - <br> - Request and connect to nearby Bluetooth devices, <br> - Read / write Bluetooth characteristics, <br> - Start / stop notifications.',
            title: 'Features',
          },
          {
            content: 'The library is supported by code examples, tutorials that cover many popular Bluetooth LE devices. p5.ble.js by [p5.serialport](https://github.com/vanevery/p5.serialport), [p5.js](https://p5js.org/), [Web Bluetooth API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API), and [Processing Serial Library](https://processing.org/reference/libraries/serial/index.html).',
            title: 'More',
          }
        ]}
      </Block>
    );

    const LearnHow = () => (
      <a href="/docs/example1">
        <Block>
        {[
          {
            content: 'Checkout Out all the examples and tutorials!',
            image: `${baseUrl}img/Bluetooth-logo.png`,
            imageAlign: 'right',
            title: 'Examples and Tutorials',
          },
        ]}
      </Block>
      </a>
    );

    // const Features = () => (
    //   <Block layout="fourColumn">
    //     {[
    //       {
    //         content: 'This is the content of my feature',
    //         image: `${baseUrl}img/docusaurus.svg`,
    //         imageAlign: 'top',
    //         title: 'Feature One',
    //       },
    //       {
    //         content: 'The content of my second feature',
    //         image: `${baseUrl}img/docusaurus.svg`,
    //         imageAlign: 'top',
    //         title: 'Feature Two',
    //       },
    //     ]}
    //   </Block>
    // );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        {/*<div className="mainContainer">*/}
          {/*<Description />*/}
          {/* <TryOut /> */}
          {/*<Code />*/}
          {/*<LearnHow />*/}
          {/* <Showcase /> */}
        {/*</div>*/}
      </div>
    );
  }
}

module.exports = Index;
