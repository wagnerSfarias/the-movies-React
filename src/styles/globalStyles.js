import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
#root{
   font-family: sans-serif;
   background-color: #1F1F1F;
   min-height: 100vh;
}
:root{
  --white: #FFF;
  --gray-100: rgba(218, 208, 208, 0.231);
  --gray-300:rgba(60, 57, 57, 0.655);
  --red-300: rgb(160, 99, 99);
  --red-700: rgb(253, 57, 99);
  --red-900: #F40134;
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track  { 
  background: #1F1F1F;
}
::-webkit-scrollbar-thumb {
  background: #f40136df;
  border-radius: 20px;
}
button{
  cursor: pointer;
  border: 0;
  box-sizing: border-box; 
}

a{
  text-decoration: none;
  color: #FFF;
}
`