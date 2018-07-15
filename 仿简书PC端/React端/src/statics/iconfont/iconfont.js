import {injectGlobal} from 'styled-components';

injectGlobal `
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1531585786627'); /* IE9*/
  src: url('./iconfont.eot?t=1531585786627#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('./iconfont.ttf?t=1531585786627') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./iconfont.svg?t=1531585786627#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-fangdajing:before { content: "\e60b"; }

.icon-Aa:before { content: "\e636"; }

.icon-pencil:before { content: "\e6b3"; }
`