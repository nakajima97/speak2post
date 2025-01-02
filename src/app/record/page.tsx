'use client';

import {
  Button,
  Card,
  CardContent,
  Container,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const RecordingScreen = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [topics, setTopics] = useState<string[]>([]);
  const [recordingTime, setRecordingTime] = useState(0);
  const router = useRouter();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const startRecording = () => {
    setIsRecording(true);
    // Implement actual recording logic here
  };

  const stopRecording = () => {
    setIsRecording(false);
    // Implement actual stop recording logic here
    // For now, we'll just pass a dummy Blob
    // onStop(new Blob());
    router.push('/processing');
  };

  // Simulating real-time transcription and topic extraction
  useEffect(() => {
    if (isRecording) {
      const transcriptionInterval = setInterval(() => {
        setTranscript(
          (prevTranscript) => `${prevTranscript} Lorem ipsum dolor sit amet.`,
        );
        setTopics((prevTopics) => [
          ...prevTopics,
          `Topic ${prevTopics.length + 1}`,
        ]);
      }, 2000);

      return () => clearInterval(transcriptionInterval);
    }
  }, [isRecording]);

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        {recordingTime} seconds
      </Typography>
      <Typography variant="h6" align="center" gutterBottom>
        {isRecording ? 'Recording...' : 'Ready to record'}
      </Typography>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '16px',
        }}
      >
        {!isRecording ? (
          <Button variant="contained" color="primary" onClick={startRecording}>
            Start Recording
          </Button>
        ) : (
          <Button variant="contained" color="error" onClick={stopRecording}>
            Stop Recording
          </Button>
        )}
      </div>

      <Card variant="outlined" style={{ marginBottom: '16px' }}>
        <CardContent>
          <Typography variant="h6">Real-time Transcription</Typography>
          <Typography variant="body2" color="textSecondary">
            {transcript}
          </Typography>
        </CardContent>
      </Card>

      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6">Real-time Topics</Typography>
          <List>
            {topics.map((topic) => (
              <ListItem key={topic}>{topic}</ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Container>
  );
};

export default RecordingScreen;
