import stopwords from "./stopwords";

export function removeStopwords(text: string): string {
  return text
    .split(" ")
    .filter((w) => !stopwords.includes(w))
    .join(" ");
}

export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

export function titleCase(text: string): string {
  return text
    .split(" ")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");
}
