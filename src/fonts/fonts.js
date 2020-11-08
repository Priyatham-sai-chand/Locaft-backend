import { createGlobalStyle } from 'styled-components';


import montserrat_black from './Montserrat-Black.tff';
import montserrat_bold from './Monsterrat-Bold.tff';

export default createGlobalStyle`
    @font-face {
        font-family: 'Font Name';
        src: local('Font Name'), local('FontName'),
        url(${montserrat_black }) format('ttf'),
        url(${montserrat_bold }) format('ttf');
        font-weight: 300;
        font-style: normal;
    }
`;