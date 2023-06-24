import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import FaceIcon from '@mui/icons-material/Face';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import Stack from '@mui/material/Stack';


const lineStyle = {
  borderLeft: '1px solid black',
  height: '300px',
  margin: '0 120px',
};
const data = {
  No_of_customers: 10,
  starsreceived: 750,
  Experience: 8,
};
const card = (
  <React.Fragment>
    <CardContent>
      <div style={{ display: 'flex',justifyContent:'space-around'}}>
        <div style={{ display: 'flex',flexDirection: 'column', alignItems: 'center', fontSize: '20px', fontFamily: 'Poppins', justifyContent: 'center', gap: '20px', flex: 1.5 }}>
          <img src={'src\\assets\\customericon.png'} alt="Star" style={{ width: '60px' }} />
          <p style={{ fontSize: '30px'}}>{data.No_of_customers}</p>
          <p style={{}}>Number of Customers Attended</p>
        </div>
        <div style={lineStyle}></div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '20px', fontFamily: 'Poppins', justifyContent: 'center', gap: '20px', flex: 1 }}>
          <img src={'src\\assets\\staricon.png'} alt="Star" style={{ width: '60px' }} />
          <p style={{ fontSize: '30px', textAlign: 'center' }}>{data.starsreceived}</p>
          <p>Stars Received</p>
        </div>
        <div style={lineStyle}></div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '20px', fontFamily: 'Poppins', justifyContent: 'center', gap: '20px', flex: 1 }}>
          <LibraryBooksIcon sx={{ color: '#17594A', fontSize: '60px' }} />
          <p style={{ fontSize: '30px', textAlign: 'center' }}>{data.Experience}</p>
          <p>Experience</p>
        </div>
        <div style={lineStyle}></div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '20px', fontFamily: 'Poppins', justifyContent: 'center', gap: '20px', flex: 1 }}>
          <LibraryBooksIcon sx={{ color: '#FF8551', fontSize: '60px' }} />
          <p style={{ fontSize: '30px', textAlign: 'center' }}>{data.Experience}</p>
          <p>Experience</p>
        </div>
      </div>
      <div>
        <div >
          <Button className="bidbtn" sx={{ marginTop: '30px', gap: '50px', marginLeft: '750px', border: '1px solid #1B98E0' }}>PLACE A BID</Button>
        </div>
        <script></script>
      </div>
    </CardContent>
  </React.Fragment>
);
const currentbids = (
  <CardContent>
    <div>hii</div>
  </CardContent>
);
const pastjobs = (
  <CardContent>
    <div>hey</div>
  </CardContent>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
      <Card variant="outlined">{currentbids}</Card>
      <Card variant="outlined">{pastjobs}</Card>
    </Box>

  );
}
