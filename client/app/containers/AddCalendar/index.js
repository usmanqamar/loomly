import React, { useEffect, memo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { useParams, useHistory, withRouter } from 'react-router-dom';
import { Page, Card, Alert } from 'tabler-react';
import reducer from './reducer';
import saga from './saga';
import 'react-toggle/style.css';
import SiteWrapper from '../Wrapper/SiteWrapper';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { addCalendar, clearAddCalendar, loadCalendar } from './actions';
import CalendarForm from '../../components/Calendar/CalendarForm';
import EditCalendar from '../../components/Calendar/EditCalendar';
import { SocialFactory } from '../../lib/SocialFactory';
import {
  makeSelectData,
  makeSelectError,
  makeSelectLoading,
} from './selectors';
import LoadingIndicator from '../../components/LoadingIndicator';

const key = 'addCalendar';

export function AddCalendar() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();
  const error = useSelector(makeSelectError());
  const data = useSelector(makeSelectData());
  const loading = useSelector(makeSelectLoading());

  const { id } = params;
  const factory = new SocialFactory();

  const [socialAccounts, setSocialAccounts] = useState({ undefined: [] });

  useEffect(() => {
    if (data) {
      history.push(`/calendar/edit/${data.id}`);
      dispatch(clearAddCalendar());
    }
  }, [data]);

  useEffect(() => {
    if (id) {
      dispatch(loadCalendar());
    }
  }, [id]);

  const onUpdateName = () => {
    dispatch(addCalendar());
  };

  const handleLogin = async type => {
    const socialAccount = factory.getSocialAccount(type);
    const accounts = await socialAccount.handleLogin();
    setSocialAccounts({ [type]: accounts.data });
  };

  return (
    <SiteWrapper>
      <Page.Content>
        <Helmet>
          <title>Calendar</title>
        </Helmet>
        {loading && <LoadingIndicator />}
        {error && (
          <Alert type="danger">
            Some error occurred loading calendar detail
          </Alert>
        )}
        {!id ? (
          <Card>
            <CalendarForm onSubmit={onUpdateName} />
          </Card>
        ) : (
          <EditCalendar
            onSubmit={onUpdateName}
            accounts={socialAccounts}
            handleLogin={handleLogin}
          />
        )}
      </Page.Content>
    </SiteWrapper>
  );
}

// const mapStateToProps = createStructuredSelector({});
//
// export function mapDispatchToProps(dispatch) {
//   return {};
// }
//
// const withConnect = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// );

export default compose(
  withRouter,
  memo,
)(AddCalendar);
