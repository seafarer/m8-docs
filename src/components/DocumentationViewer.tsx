import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { DocSection } from '@/data';
import { getDocContent } from '@/data';
import { images } from '@/images';

interface DocumentationViewerProps {
  section: DocSection;
}

export function DocumentationViewer({ section }: DocumentationViewerProps) {
  const content = getDocContent(section.filename);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 pb-20">
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children }) => (
              <div>
                <h1 className="text-2xl font-bold mb-4 text-foreground border-b border-border pb-2">
                  {children}
                </h1>
                {section.image && images[section.image] && (
                  <div className="mb-6">
                    <img
                      src={images[section.image]}
                      alt={`${section.title} interface`}
                      className="w-full max-w-2xl mx-auto"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            ),
            h2: ({ children }) => (
              <h2 className="text-xl font-semibold mt-8 mb-4 text-foreground">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-lg font-medium mt-6 mb-3 text-foreground">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="text-muted-foreground leading-relaxed mb-4">
                {children}
              </p>
            ),
            ul: ({ children }) => (
              <ul className="space-y-2 mb-4 md:ml-4">
                {children}
              </ul>
            ),
            li: ({ children }) => (
              <li className="text-muted-foreground">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2 md:mr-3 flex-shrink-0 mt-2"></span>
                <span className="inline">{children}</span>
              </li>
            ),
            strong: ({ children }) => (
              <strong className="font-semibold text-sky-700 bg-muted px-1 py-0.5 rounded text-sm">
                {children}
              </strong>
            ),
            code: ({ children }) => (
              <code className="bg-muted px-2 py-1 rounded text-sm font-mono text-foreground">
                {children}
              </code>
            ),
            hr: () => (
              <hr className="border-t border-border my-8" />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}