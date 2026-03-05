import { MDXRemote } from "next-mdx-remote/rsc";

export function MDXContent({ content }: { content: string }) {
  return (
    <article className="prose mx-auto max-w-[680px]">
      <MDXRemote source={content} />
    </article>
  );
}
