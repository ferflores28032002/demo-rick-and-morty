import AllCharactersList from './AllCharactersList';

import { Dialog, DialogContent, DialogTitle } from '@mui/material';

function AllCharactersDialog({ open, onClose, location }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth sx={{ minHeight: '500px' }}>
      <DialogTitle>All Residents in {location.name}</DialogTitle>
      <DialogContent>
        <AllCharactersList characterUrls={location.residents} />
      </DialogContent>
    </Dialog>
  );
}

export default AllCharactersDialog;
