const base = () => ({
  silentLink: {
    color: 'inherit !important',
    outline: 'none',
    textDecoration: 'none',
    '&:focus, &:hover, &:visited, &:link, &:active': {
      outline: 'none',
      textDecoration: 'none',
      borderColor: 'transparent',
      color: 'inherit !important',
    },
  },
  silentLinkUnderline: {
    color: 'inherit !important',
    outline: 'none',
    textDecoration: 'underline',
    '&:focus, &:hover, &:visited, &:link, &:active': {
      outline: 'none',
      textDecoration: 'underline',
      borderColor: 'transparent',
      color: 'inherit !important',
    },
  },
});

export default base;
