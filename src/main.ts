import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';
import adventCode from './aoc.png';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://adventofcode.com/" target="_blank">
      <img src="${adventCode}" class="logo" alt="advent of code" />
    </a>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Advent of Code 2023</h1>
    <h2>Vite + TypeScript</h2>

    <div id="days" class="days card"></div>
    <p class="read-the-docs">
      Click on the logos to learn more
    </p>
  </div>
`;

const days = document.querySelector<HTMLDivElement>('#days')!;

for (let i = 1; i <= 25; i++) {
  const day = document.createElement('button');
  day.classList.add('day');
  day.id = `day${i}`;
  day.innerText = `${i}`;
  day.addEventListener('click', () => getAnswer(i));
  days.appendChild(day);
}

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);

async function getAnswer(day: number): Promise<void> {
  let result: string;

  try {
    const dayFn = await import(`./days/day${day}.ts`);
    result = dayFn.default();
  } catch (e) {
    result = `Day ${day} not yet implemented`;
  }

  alert(result);
}
