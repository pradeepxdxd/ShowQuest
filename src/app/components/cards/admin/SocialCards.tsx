// index.tsx
import React from 'react';
import { Grid, Container } from '@mui/material';
import SocialStatsCard from './SocialStatusCard';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';

const HomePage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4, mt:1 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <SocialStatsCard
            icon={<FacebookIcon fontSize="large" />}
            primaryStat="35k"
            primaryLabel="Followers"
            secondaryStat="128"
            secondaryLabel="Feeds"
            bgColor="#3b5998"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <SocialStatsCard
            icon={<TwitterIcon fontSize="large" />}
            primaryStat="584k"
            primaryLabel="Followers"
            secondaryStat="978"
            secondaryLabel="Tweets"
            bgColor="#1DA1F2"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <SocialStatsCard
            icon={<LinkedInIcon fontSize="large" />}
            primaryStat="758+"
            primaryLabel="Contacts"
            secondaryStat="365"
            secondaryLabel="Feeds"
            bgColor="#0077b5"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <SocialStatsCard
            icon={<GoogleIcon fontSize="large" />}
            primaryStat="450"
            primaryLabel="Followers"
            secondaryStat="57"
            secondaryLabel="Circles"
            bgColor="#db4437"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
