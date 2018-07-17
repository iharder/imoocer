import {
  injectGlobal
} from 'styled-components';

injectGlobal `

@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1531754906112'); /* IE9*/
  src: url('./iconfont.eot?t=1531754906112#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('./iconfont.ttf?t=1531754906112') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./iconfont.svg?t=1531754906112#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-fangdajing:before { content: "\e60b"; }

.icon-spin:before { content: "\e851"; }

.icon-Aa:before { content: "\e636"; }

.icon-pencil:before { content: "\e6b3"; }


`