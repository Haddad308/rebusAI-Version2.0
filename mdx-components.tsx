import Image from 'next/image'
import { ReactNode } from 'react'

interface MDXComponentsProps {
  [key: string]: any
}

export function useMDXComponents(components: MDXComponentsProps): MDXComponentsProps {
  return {
    h1: ({ children }: { children: ReactNode }) => (
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        {children}
      </h1>
    ),
    h2: ({ children }: { children: ReactNode }) => (
      <h2 className="text-3xl font-bold mb-4 text-gray-900">{children}</h2>
    ),
    h3: ({ children }: { children: ReactNode }) => (
      <h3 className="text-2xl font-semibold mb-3 text-gray-800">{children}</h3>
    ),
    p: ({ children }: { children: ReactNode }) => (
      <p className="text-gray-600 mb-4 leading-relaxed">{children}</p>
    ),
    ul: ({ children }: { children: ReactNode }) => (
      <ul className="list-disc list-inside mb-4 text-gray-600 space-y-2">{children}</ul>
    ),
    ol: ({ children }: { children: ReactNode }) => (
      <ol className="list-decimal list-inside mb-4 text-gray-600 space-y-2">{children}</ol>
    ),
    li: ({ children }: { children: ReactNode }) => (
      <li className="leading-relaxed">{children}</li>
    ),
    blockquote: ({ children }: { children: ReactNode }) => (
      <blockquote className="border-l-4 border-purple-500 pl-4 py-2 mb-4 italic text-gray-700 bg-purple-50 rounded-r">
        {children}
      </blockquote>
    ),
    code: ({ children }: { children: ReactNode }) => (
      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-purple-600">
        {children}
      </code>
    ),
    pre: ({ children }: { children: ReactNode }) => (
      <pre className="bg-gray-900 text-white p-4 rounded-lg mb-4 overflow-x-auto">
        {children}
      </pre>
    ),
    img: ({ src, alt, ...props }: { src: string; alt: string }) => (
      <div className="mb-6">
        <Image
          src={src}
          alt={alt}
          width={800}
          height={400}
          className="rounded-lg shadow-lg w-full"
          {...props}
        />
      </div>
    ),
    a: ({ href, children }: { href: string; children: ReactNode }) => (
      <a
        href={href}
        className="text-purple-600 hover:text-purple-800 underline transition-colors"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    ...components,
  }
}
