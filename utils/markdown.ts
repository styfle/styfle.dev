import marked from 'marked';
import hl from 'highlight.js';
const { highlight, highlightAuto } = hl;

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
