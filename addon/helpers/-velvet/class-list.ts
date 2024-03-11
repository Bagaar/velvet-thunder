export default function velvetClassList(...classNames: string[]) {
  return classNames.filter(Boolean).join(" ");
}
