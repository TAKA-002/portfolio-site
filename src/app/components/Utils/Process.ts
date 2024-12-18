export function getAssetPath(path: string) {

  const isAbsolutePath = (path: string) => {
    if (path.includes('https')) return true;
    else if (path.includes('http')) return true;
    else return false;
  }

  if (!isAbsolutePath(path)) {
    return process.env.NODE_ENV === "production"
      ? `/portfolio-site/${path}`
      : path;
  }
  return path;
};
