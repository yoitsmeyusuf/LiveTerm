// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';
const songs = [
  { name: 'pentakill', file:'music.mp3' },
  { name: 'kaptan kadavra', file:'music3.mp3' },
  { name: 'sulfur ensemble', file:'music2.mp3' },
  
  // add more songs here
];

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest. 
here are the ways you can support my work:
- <u><a class="text-light-blue dark:text-dark-blue underline" target="_blank">0x7b42f18B892d9B1F9bE7F38E03dc7AD611adB89D</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.polgon}" target="_blank">polygon</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.ethernum}" target="_blank">ethereum</a></u>
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `projects
tryradio
cryptowalletsecretkey.txt
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

 let audio: HTMLAudioElement;

 export const radio = async (args: string[]): Promise<string> => {
  const randomIndex = Math.floor(Math.random() * songs.length);
  const song = songs[randomIndex];
  audio = new Audio(song.file);
  audio.play();
  return `Now playing: ${song.name} please do not write radio two times its breaking the music`;
};
 
 export const radiostop = async (args: string[]): Promise<string> => {
   if (audio && !audio.paused) {
     audio.pause();
     audio.src = '';
     audio.load();
     audio = null;
     return `Music stopped.`;
   } else {
     return `Music is not currently playing.`;
   }
 };
 export const radioremove = async (args: string[]): Promise<string> => {
  if (audio) {
    audio.pause();
    audio.src = '';
    audio.load();
    audio.parentNode?.removeChild(audio);
    audio = null;
    return `Music element removed.`;
  } else {
    return `Music is not currently playing.`;
  }
};
export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};
export const emre = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=-bKpC-uDHnc', '_blank');
  return `ın ın ın ınının ınının`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

export const cat = async (args?: string[]): Promise<string> => {
  return `meow`;
};
// Banner
export const banner = (args?: string[]): string => {
  return `
  ▄• ▄▌·▄▄▄▄•▪         ▐ ▄ 
  █▪██▌▪▀·.█▌██ ▪     •█▌▐█
  █▌▐█▌▄█▀▀▀•▐█· ▄█▀▄ ▐█▐▐▌
  ▐█▄█▌█▌▪▄█▀▐█▌▐█▌.▐▌██▐█▌
   ▀▀▀ ·▀▀▀ •▀▀▀ ▀█▄▀▪▀▀ █▪

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
