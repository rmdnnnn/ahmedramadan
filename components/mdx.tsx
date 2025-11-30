// Server component wrapper that passes source to client component
import MDXClient from "./MDXClient";

export function MDXContent({ source }: { source: string }) {
  return <MDXClient source={source} />;
}

