import {installLaboAudio} from './conect-audio.js';
// Each page offers an explicit sound toggle. Browsers do not autoplay audio across navigation.
let button=document.getElementById('sound-toggle');
if(!button){
  button=document.createElement('button');
  button.id='sound-toggle';
  button.type='button';
  button.className='labo-sound-float';
  button.innerHTML='<span aria-hidden="true">♫ </span><span id="sound-text">사운드 켜기</span>';
  document.body.append(button);
}
const sound=installLaboAudio(button);
