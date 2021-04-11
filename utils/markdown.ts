import marked from 'marked';
import { highlight, highlightAuto } from 'highlight.js';

export function markdownToHtml(md: string, baseUrl?: string) {
  const html = marked(md, {
    baseUrl,
    highlight: (code, language) => {
      if (!language) {
        return highlightAuto(code).value;
      }
      return highlight(code, { language }).value;
    },
  });
  return html;
}
