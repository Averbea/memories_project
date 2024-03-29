import { makeStyles } from '@material-ui/core/styles';
import { relativeTimeRounding } from 'moment';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '600px',

  },
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    padding: '20px',
    flex: 1,
  },
  imageSection: {
    margin: '20px',
    width: '30%',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '5%',
      width: '90%',
      // alignItems: 'center',
    },
  },
  recommendedPosts: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  loadingPaper: {
    display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '15px', height: '39vh',
  },
  commentsOuterContainer: {
    display: 'flex',
    // margin: '20px',
    // // justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  commentsInnerContainer: {
    height: '250px', overflowY: 'auto', marginRight: '30px', width: '100%' },
}));
