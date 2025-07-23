# RebusAI Blog System

A comprehensive blog system built with Next.js, MDX, and TypeScript, featuring dynamic content management, SEO optimization, and a beautiful user interface.

## Features

### 🚀 Core Functionality
- **MDX Support**: Write blog posts in Markdown with React components
- **Dynamic Routing**: Automatic page generation for blog posts
- **Category System**: Organize posts by categories with filtering
- **Search Functionality**: Full-text search across all blog content
- **Featured Posts**: Highlight important articles on the homepage
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Reading Time**: Automatic calculation of estimated reading time

### 🎨 User Experience
- **Beautiful UI**: Modern design with gradient themes and animations
- **Category Filtering**: Browse posts by category
- **Pagination**: Load more posts as needed
- **Social Sharing**: Share posts on Twitter, Facebook, and LinkedIn
- **Related Posts**: Show similar articles at the end of each post
- **Author Profiles**: Display author information and articles

### 🔧 Technical Features
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Performance**: Optimized images and efficient rendering
- **TypeScript**: Full type safety throughout the codebase
- **Component Library**: Reusable UI components with shadcn/ui
- **Animations**: Smooth transitions with Framer Motion

### 📝 Content Management
- **Admin Interface**: Web-based content creation (at `/blog/admin`)
- **Frontmatter Support**: Rich metadata for each post
- **Tag System**: Flexible tagging for better organization
- **Image Management**: Support for featured images and inline media

## Project Structure

```
├── app/
│   └── blog/
│       ├── page.tsx                    # Main blog listing page
│       ├── [slug]/
│       │   └── page.tsx                # Individual blog post page
│       ├── category/
│       │   └── [category]/
│       │       └── page.tsx            # Category listing page
│       └── admin/
│           └── page.tsx                # Blog administration interface
├── content/
│   └── blog/                           # MDX blog post files
│       ├── future-of-ai-2024.mdx
│       ├── ai-revolutionizing-healthcare.mdx
│       └── ...
├── lib/
│   └── blog.ts                         # Blog utility functions
├── components/
│   ├── seo.tsx                         # SEO component
│   └── ui/                             # UI components
└── mdx-components.tsx                  # MDX component definitions
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Visit the blog at `http://localhost:3000/blog`

## Creating Blog Posts

### Method 1: Admin Interface
1. Visit `/blog/admin` in your browser
2. Click "Create New Post"
3. Fill in the form with your content
4. Click "Save Post" (content will be logged to console)
5. Manually create the file based on the generated output

### Method 2: Manual Creation
Create a new `.mdx` file in the `content/blog/` directory:

```markdown
---
title: "Your Post Title"
excerpt: "Brief description of your post"
author: "Author Name"
date: "2023-12-15"
category: "Category Name"
image: "/path/to/image.jpg"
gradient: "from-purple-500 to-blue-500"
featured: true
tags: ["tag1", "tag2", "tag3"]
---

# Your Post Title

Your content goes here. You can use:

- **Bold** and *italic* text
- [Links](https://example.com)
- Code blocks
- Images
- Lists
- Blockquotes
- And much more!

## Subheadings

Use standard Markdown syntax for formatting.
```

### Frontmatter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | ✅ | Post title |
| `excerpt` | string | ✅ | Brief description |
| `author` | string | ✅ | Author name |
| `date` | string | ✅ | Publication date (YYYY-MM-DD) |
| `category` | string | ✅ | Post category |
| `image` | string | ❌ | Featured image URL |
| `gradient` | string | ❌ | CSS gradient for styling |
| `featured` | boolean | ❌ | Whether to feature the post |
| `tags` | array | ❌ | Array of tags |

## Available Components

The blog system includes custom MDX components:

- **Headings**: Styled h1, h2, h3 elements
- **Paragraphs**: Properly spaced text blocks
- **Lists**: Styled ordered and unordered lists
- **Blockquotes**: Highlighted quote sections
- **Code**: Inline and block code formatting
- **Images**: Optimized Next.js Image components
- **Links**: Styled internal and external links

## Customization

### Adding New Categories
Categories are automatically generated from post frontmatter. Simply use a new category name in your post's `category` field.

### Styling
- Modify gradient options in the admin interface
- Customize colors in `tailwind.config.ts`
- Update component styles in the respective component files

### SEO
The SEO component automatically generates:
- Meta tags for title and description
- Open Graph tags for social sharing
- Twitter Card tags
- JSON-LD structured data for search engines

## API Reference

### Blog Utilities (`lib/blog.ts`)

#### `getAllPosts(): BlogPost[]`
Returns all published blog posts, sorted by date.

#### `getPostBySlug(slug: string): BlogPost | null`
Retrieves a specific post by its slug.

#### `getPostsByCategory(category: string): BlogPost[]`
Returns all posts in a specific category.

#### `getFeaturedPosts(): BlogPost[]`
Returns posts marked as featured.

#### `getCategories(): Category[]`
Returns all categories with post counts.

#### `searchPosts(query: string): BlogPost[]`
Performs full-text search across posts.

## Performance Considerations

- **Image Optimization**: Use Next.js Image component for automatic optimization
- **Code Splitting**: Dynamic imports for better performance
- **Static Generation**: Posts are statically generated at build time
- **Search**: Client-side search for fast results

## Deployment

The blog system works with any Next.js deployment platform:

- **Vercel**: Automatic deployments with git integration
- **Netlify**: Static site hosting with form handling
- **AWS**: S3 + CloudFront for global distribution
- **Self-hosted**: Docker containers or traditional hosting

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For questions or issues:
- Create an issue on GitHub
- Check the documentation
- Review existing posts for examples

---

**Note**: This blog system is designed to be simple yet powerful. It provides a great foundation that can be extended with additional features like comments, analytics, or a full CMS integration as needed.
