import { getProjects } from '../api';
import { getQuote } from '../api';
// import { getReadme } from '../api';
import { getWeather } from '../api';
import { getLoc } from '../api';

export const projects = async (args: string[]): Promise<string> => {
  const projects = await getProjects();
  return projects
    .map(
      (repo) =>
        `${repo.name} - <a class="text-light-blue dark:text-dark-blue underline" href="${repo.html_url}" target="_blank">${repo.html_url}</a>`,
    )
    .join('\n');
};
export const quote = async (args: string[]): Promise<string> => {
  const data = await getQuote();
  return data.quote;
};

// export const readme = async (args: string[]): Promise<string> => {
//   const readme = await getReadme();
//   return `Opening GitHub README...\n
//   ${readme}`;
// };
<<<<<<< HEAD

=======
>>>>>>> 686cc609bf5f15d2d7bc268a2b90b73c722c6a8c

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');
  if (!city) {
    return 'Usage: weather [city]. Example: weather casablanca';
  }
  const weather = await getWeather(city);
  return weather;
};
export const mkdir = async (args?: string[]): Promise<string> => {
<<<<<<< HEAD

  const loc = await getLoc()
  return `you are in ${loc} `;
}
=======
  
  const loc = await getLoc()
  return `you are in ${loc} `;
};
>>>>>>> 686cc609bf5f15d2d7bc268a2b90b73c722c6a8c
