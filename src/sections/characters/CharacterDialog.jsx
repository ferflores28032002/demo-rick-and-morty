import React from 'react';

import PropTypes from 'prop-types';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const CharacterDialog = ({ character, open, onClose }) => {
  if (!character) return null;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{character.name}</DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" gap={2}>
          <Typography variant="body1">
            <strong>Species:</strong> {character.species}
          </Typography>
          <Typography variant="body1">
            <strong>Status:</strong> {character.status}
          </Typography>
          <Typography variant="body1">
            <strong>Gender:</strong> {character.gender}
          </Typography>
          <Typography variant="body1">
            <strong>Location:</strong> {character.location?.name || 'Unknown'}
          </Typography>
          <Typography variant="body1">
            <strong>Origin:</strong> {character.origin?.name || 'Unknown'}
          </Typography>
          <Typography variant="body1">
            <strong>Created:</strong> {new Date(character.created).toLocaleDateString()}
          </Typography>
          <Typography variant="body1">
            <strong>Episodes Appeared In:</strong> {character.episode?.length || 0}
          </Typography>
          <Box mt={2} textAlign="center">
            <img
              src={character.image}
              alt={character.name}
              style={{ width: '100%', maxWidth: 300, borderRadius: 8 }}
            />
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

CharacterDialog.propTypes = {
  character: PropTypes.object,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CharacterDialog;
