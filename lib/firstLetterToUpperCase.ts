export default function firstLetterToUpperCase(
  string: string,
  separator: string,
  preserveSeparator?: boolean
) {
  const words = string.split(separator);
  const newWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return preserveSeparator ? newWords.join(separator) : newWords.join(" ");
}
