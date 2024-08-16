export const formatString = (template: string, replacements: { [key: string]: string }) => {
  return template.replace(/{(\w+)}/g, (_, key) => replacements[key] || "");
}