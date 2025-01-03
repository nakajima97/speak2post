'use client';

import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Slider,
  TextField,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import type React from 'react';
import { useState } from 'react';

const InputScreen = () => {
  const [wordCount, setWordCount] = useState(500);
  const [styleUrl, setStyleUrl] = useState('');
  const [stylePrompt, setStylePrompt] = useState('');
  const [outputFormat, setOutputFormat] = useState('plaintext');
  const [showTimeline, setShowTimeline] = useState(false);
  const [showGraph, setShowGraph] = useState(false);
  const [infoAmount, setInfoAmount] = useState('summary');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/record');
  };

  return (
    <Container maxWidth="sm">
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <Typography variant="h6">Word Count</Typography>
          <Slider
            value={wordCount}
            onChange={(e, newValue) => setWordCount(newValue as number)}
            aria-labelledby="word-count-slider"
            valueLabelDisplay="auto"
            step={50}
            marks
            min={100}
            max={1000}
          />
          <Typography variant="body2">{wordCount} words</Typography>
        </FormControl>

        <TextField
          fullWidth
          label="Style URL"
          type="url"
          value={styleUrl}
          onChange={(e) => setStyleUrl(e.target.value)}
          margin="normal"
          variant="outlined"
          placeholder="https://example.com"
        />

        <TextField
          fullWidth
          label="Style Prompt"
          value={stylePrompt}
          onChange={(e) => setStylePrompt(e.target.value)}
          margin="normal"
          variant="outlined"
          multiline
          rows={3}
          placeholder="Enter style prompt..."
        />

        <FormControl component="fieldset" sx={{ mb: 2 }}>
          <FormLabel component="legend">Output Format</FormLabel>
          <RadioGroup
            row
            value={outputFormat}
            onChange={(e) => setOutputFormat(e.target.value)}
          >
            <FormControlLabel
              value="plaintext"
              control={<Radio />}
              label="Plain Text"
            />
            <FormControlLabel
              value="markdown"
              control={<Radio />}
              label="Markdown"
            />
          </RadioGroup>
        </FormControl>

        <FormControlLabel
          control={
            <Checkbox
              checked={showTimeline}
              onChange={(e) => setShowTimeline(e.target.checked)}
            />
          }
          label="Show Timeline"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={showGraph}
              onChange={(e) => setShowGraph(e.target.checked)}
            />
          }
          label="Show Graph"
        />

        <FormControl component="fieldset" sx={{ mb: 2 }}>
          <FormLabel component="legend">Information Amount</FormLabel>
          <RadioGroup
            row
            value={infoAmount}
            onChange={(e) => setInfoAmount(e.target.value)}
          >
            <FormControlLabel
              value="summary"
              control={<Radio />}
              label="Overall Summary"
            />
            <FormControlLabel
              value="topics"
              control={<Radio />}
              label="Topic-wise Summary"
            />
          </RadioGroup>
        </FormControl>

        <Button type="submit" fullWidth variant="contained" color="primary">
          Next
        </Button>
      </Box>
    </Container>
  );
};

export default InputScreen;
