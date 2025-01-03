import { Button } from '@mui/material';
import React from 'react';

type RecordingControlsProps = {
  isRecording: boolean;
  startRecording: () => void;
  stopRecording: () => void;
};

const RecordingControls = ({ isRecording, startRecording, stopRecording }: RecordingControlsProps) => (
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
);

export default RecordingControls;
