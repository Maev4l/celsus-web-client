import { makeStyles } from '@material-ui/core/styles';

import helpers from './helpers';
import layout from './layout';

const useGlobalStyles = makeStyles((theme) => {
  const helpersStyles = helpers(theme);
  const layoutStyles = layout(theme);
  return {
    ...helpersStyles,
    ...layoutStyles,
  };
});

export default useGlobalStyles;
