import React from 'react';
import { Card, CardContent, CardHeader, Typography, List, ListItem, Button, Box } from '@mui/material';

const ResultScreen = () => {
  const showTimeline = true;
  const showGraph = true;
  
  return (
    <Box sx={{ '& > :not(style)': { m: 2 } }}>
      <Card>
        <CardHeader title="Generated Text" />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {/* {text} */}
          </Typography>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="Topics" />
        <CardContent>
          <List>
            {/* {topics.map((topic, index) => (
              <ListItem key={index}>
                {topic}
              </ListItem>
            ))} */}
          </List>
        </CardContent>
      </Card>

      {showTimeline && (
        <Card>
          <CardHeader title="Timeline" />
          <CardContent>
            <Typography variant="body2" color="textSecondary">
              Timeline visualization placeholder
            </Typography>
          </CardContent>
        </Card>
      )}

      {showGraph && (
        <Card>
          <CardHeader title="Graph" />
          <CardContent>
            <Typography variant="body2" color="textSecondary">
              Graph visualization placeholder
            </Typography>
          </CardContent>
        </Card>
      )}

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button variant="contained" color="primary">
          Edit
        </Button>
        <Button variant="contained" color="success">
          Share
        </Button>
        <Button variant="contained" color="secondary">
          Re-record
        </Button>
      </Box>
    </Box>
  );
};

export default ResultScreen;
