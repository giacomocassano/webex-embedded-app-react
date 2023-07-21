import React from 'react';
import Styles from '../styles/Styles';
import {useNavigate} from 'react-router-dom';
import {Button, Container} from 'react-bootstrap';
import Logs from '../components/Logs';
import {WebexContext} from '../store/WebexContext';

const SharedPage = () => {
  const navigate = useNavigate();

  const {log, webexApp} = React.useContext(WebexContext);

  const goToInitiatorPageHandler = () => {
    navigate('/');
  };

  const getUserEmail = () => {
    if (webexApp)
      webexApp.context.getUser().then((user) => {
        log('User email: ' + user?.email);
      });
    else log('Unable to get user email');
  };

  return (
    <Styles.PageContainer>
      <Container className='py-4'>
        <h1>SharedPage</h1>
        <div className='d-flex flex-row gap-2'>
          <Button className='mb-3' onClick={goToInitiatorPageHandler}>
            Go to Initiator Page
          </Button>
          <Button onClick={getUserEmail}>Get User Email</Button>
        </div>
        <Logs />
      </Container>
    </Styles.PageContainer>
  );
};

export default SharedPage;
