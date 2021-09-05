import { Box, Grid, Typography } from "@material-ui/core";

export default function Video({ data }) {
  return (
    <Grid item lg={3} md={4} sm={6} xs={12}>
      <Box>
        <img src={data.thumb} alt={data.title} style={{ width: "100%" }} />
        <Box>
          <Typography
            style={{ fontWeight: 600 }}
            gutterBottom
            variant='body1'
            color='textPrimary'
          >
            {data.title}
          </Typography>
          <Typography
            display='block'
            variant='body2'
            color='textSecondary'
            style={{ fontWeight: 500 }}
          >
            {data.channel}
          </Typography>
          <Typography variant='body2' color='textSecondary'>
            {data.views} {data.date}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}
