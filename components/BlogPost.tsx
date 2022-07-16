import type { Post } from "contentlayer/generated";
import Link from "next/link";

const BlogPost = ({ post }: { post: Post }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <a className="w-full">
        <div className="w-full">
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="mb-2 w-full text-lg font-medium text-gray-900 dark:text-gray-100 md:text-xl">
              {post.title}
            </h4>
            <p className="mb-4 w-32 text-left text-gray-500 md:mb-0 md:text-right">
              {post.publishedAt}
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{post.description}</p>
        </div>
      </a>
    </Link>
  );
};

export default BlogPost;
