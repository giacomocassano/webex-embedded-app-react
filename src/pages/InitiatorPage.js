import React from 'react';
import {Button, Container} from 'react-bootstrap';
import Styles from '../styles/Styles';
import {WebexContext} from '../store/WebexContext';
import useLegacyEffect from '../hooks/useLegacyEffect';
import Logs from '../components/Logs';

const InitiatorPage = () => {
  const {webexApp, setWebexApp, log} = React.useContext(WebexContext);

  useLegacyEffect(() => {
    if (webexApp) {
      return;
    }
    const _webexApp = new window.Webex.Application();

    _webexApp.onReady().then(() => {
      setWebexApp(_webexApp);
      log('Webex App is ready');
      log('Shared: ' + webexApp.isShared());
    });
  }, [webexApp]);

  const goToSharedPageHandler = () => {
    const url = 'https://evoliwebex.giacomocassano.it/#/shared';
    if (!webexApp) log('Webex App is not ready');
    //"Shared App" is the title of the window or tab that will be created
    else
      webexApp
        .setShareUrl(url, '', 'Shared App')
        .then(() => {
          log('Going to shared page...');
          log('Set share URL: ' + url);
        })
        .catch((error) => {
          log('Error setting share URL: ' + webexApp.Application.ErrorCodes[error]);
        });
  };

  const isSharedHandler = () => {
    log('Is shared: ' + webexApp.isShared);
  };

  const clearShareUrlHandler = () => {
    if (webexApp?.isShared) {
      try {
        webexApp.clearShareUrl();
        log('Cleared share URL');
      } catch (error) {
        log('Error clearing share URL: ' + webexApp.ErrorCodes[error]);
      }
    } else log('Webex App is not shared');
  };

  return (
    <Styles.PageContainer>
      <Container className='py-4'>
        <h1>Initiator Page</h1>
        {webexApp ? <p>Webex App is ready</p> : <p>Webex App is not ready</p>}
        <div className='d-flex flex-row gap-2 mb-3 align-items-center'>
          <Button className='success' onClick={goToSharedPageHandler}>
            Go to Shared Page
          </Button>
          <Button className='success' onClick={isSharedHandler}>
            Is Shared?
          </Button>
          <Button className='success' onClick={clearShareUrlHandler}>
            Clear Share URL
          </Button>
        </div>
        <Logs />
      </Container>
    </Styles.PageContainer>
  );
};

export default InitiatorPage;
