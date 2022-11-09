import Link from 'next/link';
import { getProjects } from 'utils/github';
import { markdownToHtml } from 'utils/markdown';
import { getProps, Params } from './utils';

export const generateStaticParams = async () => {
  const projects = await getProjects();
  return projects;
};

export default async function Project({ params }: { params: Params }) {
  const { project, readme } = await getProps(params);
  const { name, html_url } = project;
  const baseUrl = `${html_url}/blob/main/`;
  const __html = markdownToHtml(readme, baseUrl);
  return (
    <>
      <div
        className="main-content"
        itemProp="articleBody"
        dangerouslySetInnerHTML={{ __html }}
      ></div>
      <a href={`/projects/${name}`} hidden></a>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link href="/projects" className="green-link">
          &laquo; All projects
        </Link>
        <a className="green-link" href={html_url}>
          Edit this page &raquo;
        </a>
      </div>
    </>
  );
}
