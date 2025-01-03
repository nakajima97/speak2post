import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

type TranscriptionCardProps = {
  transcript: string;
};

const TranscriptionCard = ({ transcript }: TranscriptionCardProps) => (
  <Card variant="outlined" style={{ marginBottom: '16px' }}>
    <CardContent>
      <Typography variant="h6">Real-time Transcription</Typography>
      <Typography variant="body2" color="textSecondary">
        {transcript}
      </Typography>
    </CardContent>
  </Card>
);

export default TranscriptionCard;
