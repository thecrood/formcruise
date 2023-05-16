import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <IconButton
      sx={{
        position: 'fixed',
        bottom: '3rem',
        right: '2rem',
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        borderRadius: '50%',
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none',
        transition: 'opacity 0.2s ease-in-out',
        '&:hover': {
          bgcolor: 'primary.dark',
        },
      }}
      onClick={handleScrollToTop}
    >
      <KeyboardArrowUpIcon />
    </IconButton>
  );
};

export default ScrollToTopButton;