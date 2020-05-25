import { highlight, highlightAuto } from 'highlight.js';
import marked from 'marked';

export function markdownToHtml(md: string) {
  const html = marked(md, {
    highlight: (code, lang) => {
      if (!lang) {
        return highlightAuto(code).value;
      }
      return highlight(lang, code).value;
    },
  });
  return html;
}
