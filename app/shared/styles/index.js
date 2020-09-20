import { makeStyles } from '@material-ui/core/styles';

import helpers from './helpers';
import layout from './layout';
import base from './base';

const useGlobalStyles = makeStyles((theme) => {
  const helpersStyles = helpers(theme);
  const layoutStyles = layout(theme);
  const baseStyles = base(theme);
  return {
    ...helpersStyles,
    ...layoutStyles,
    ...baseStyles,
  };
});

export default useGlobalStyles;
