import { MDXRemote } from "next-mdx-remote/rsc";
import { AnchorHTMLAttributes } from "react";

const components = {
  a: (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a {...props} target="_blank" rel="noopener noreferrer" />
  ),
};

export function MDXContent({ content }: { content: string }) {
  return (
    <article className="prose mx-auto max-w-[680px]">
      <MDXRemote source={content} components={components} />
    </article>
  );
}
