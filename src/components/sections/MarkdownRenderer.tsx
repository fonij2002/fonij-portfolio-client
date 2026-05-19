import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

type MarkdownRendererProps = {
  content: string;
};

export const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeSlug]}
      components={{
        h1: ({ children }) => (
          <h1 className="mb-6 mt-10 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="mb-5 mt-10 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="mb-4 mt-8 text-xl font-semibold text-white">
            {children}
          </h3>
        ),
        p: ({ children }) => (
          <p className="my-5 text-base leading-8 text-neutral-300 sm:text-lg">
            {children}
          </p>
        ),
        strong: ({ children }) => (
          <strong className="font-semibold text-white">{children}</strong>
        ),
        ul: ({ children }) => (
          <ul className="my-5 list-disc space-y-2 pl-6 text-neutral-300">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="my-5 list-decimal space-y-2 pl-6 text-neutral-300">
            {children}
          </ol>
        ),
        li: ({ children }) => (
          <li className="pl-1 text-base leading-8 text-neutral-300 sm:text-lg">
            {children}
          </li>
        ),
        code: ({ children }) => (
          <code className="rounded-md border border-white/10 bg-white/10 px-1.5 py-0.5 text-sm text-fuchsia-100">
            {children}
          </code>
        ),
        pre: ({ children }) => (
          <pre className="my-6 overflow-x-auto rounded-2xl border border-white/10 bg-neutral-900 p-5 text-sm leading-7 text-neutral-200">
            {children}
          </pre>
        ),
        img: ({ src, alt }) => (
          <figure className="my-8">
            <img
              src={src ?? ""}
              alt={alt ?? ""}
              className="w-full rounded-2xl border border-white/10 object-cover shadow-xl shadow-black/20"
            />
            {alt && (
              <figcaption className="mt-3 text-center text-sm text-neutral-500">
                {alt}
              </figcaption>
            )}
          </figure>
        ),
        a: ({ href, children }) => (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300 underline decoration-cyan-300/30 underline-offset-4 transition hover:text-cyan-200"
          >
            {children}
          </a>
        ),
        blockquote: ({ children }) => (
          <blockquote className="my-6 border-l-4 border-white/20 pl-5 text-neutral-300">
            {children}
          </blockquote>
        ),
        hr: () => <hr className="my-10 border-white/10" />,
      }}
    >
      {content}
    </ReactMarkdown>
  );
};
