import { create } from 'jss';
import rtl from 'jss-rtl';
import { jssPreset } from '@material-ui/core/styles';

// Configure JSS
export const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
