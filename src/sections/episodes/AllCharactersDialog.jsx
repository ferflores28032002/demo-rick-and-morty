import React from 'react';

import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import AllCharactersList from './AllCharactersList';

export default function AllCharactersDialog({ open, onClose, episodeName, characterUrls }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>All Characters in {episodeName}</DialogTitle>
      <DialogContent>
        <AllCharactersList characterUrls={characterUrls} />
      </DialogContent>
    </Dialog>
  );
}
