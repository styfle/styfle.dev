import marked from 'marked';
import { highlight, highlightAuto } from 'highlight.js';

export function markdownToHtml(md: string, baseUrl?: string) {
  const html = marked(md, {
    baseUrl,
    highlight: (code, lang) => {
      if (!lang) {
        return highlightAuto(code).value;
      }
      return highlight(lang, code).value;
    },
  });
  return html;
}
