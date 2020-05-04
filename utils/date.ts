const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export function formatDate(str: string) {
  const d = new Date(str);
  return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}
