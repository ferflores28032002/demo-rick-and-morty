import React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

const CustomButton = (props) => {
  const {
    onClick,
    disabled,
    label,
    variant = 'contained',
    fullWidth = false,
    color = '#007bff',
    hoverColor = '#0056b3',
  } = props;

  return (
    <Button
      variant={variant}
      onClick={onClick}
      fullWidth={fullWidth}
      sx={{
        textTransform: 'none',
        borderRadius: '8px',
        bgcolor: color,
        width: '100%',
        '&:hover': { bgcolor: hoverColor },
      }}
      disabled={disabled}
      {...props}
    >
      {label}
    </Button>
  );
};

CustomButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  variant: PropTypes.string,
  fullWidth: PropTypes.bool,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
};

export default CustomButton;
