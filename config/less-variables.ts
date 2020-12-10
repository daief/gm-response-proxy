import { generate, gold, red } from '@ant-design/colors';
import Color from 'color';

const primary = '#f6438a';
const grey = '#bfbfbf';

// https://ant.design/docs/spec/colors-cn
// color1, color2, color3, color4, color5, color7, color8, color9, color10
const generateColors = (mainColor: string, name: string) =>
  generate(mainColor).reduce<Record<string, string>>((result, curr, i) => {
    i = i + 1;
    if (i !== 6) {
      result[`${name}${i}`] = curr;
    }
    return result;
  }, {});

// https://github.com/ant-design/ant-design/blob/5ab2783ff0/components/style/themes/default.less
export default {
  prefix: 'gm-rp',
  ...generateColors(primary, 'color'),
  primary,
  ...generateColors(grey, 'grey'),
  grey,
  textColor: Color('#000').alpha(0.65).string(),
  textColorSecondary: Color('#000').alpha(0.45).string(),
  textColorWarning: gold[6],
  textColorDanger: red[6],
  textColorInverse: '#fff',
  fontSize: '14px',
  fontSizeLg: '16px',
  fontSizeSm: '12px',
  baseFamily:
    "Penrose, 'PingFang SC', 'Hiragino Sans GB', Tahoma, Arial, 'Lantinghei SC', 'Microsoft YaHei', '\\5FAE软雅黑', sans-serif",
};
