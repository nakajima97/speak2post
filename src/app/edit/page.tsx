'use client'

import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const EditScreen = () => {
  const [editedText, setEditedText] = useState( '');

  const handleSave = () => {
    // onSave(editedText);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
        multiline
        rows={8}
        variant="outlined"
        fullWidth
      />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
        <Button variant="outlined">
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default EditScreen;
