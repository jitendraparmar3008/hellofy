export const classNames = (
  ...classes: (string | undefined | null | boolean)[]
) => classes.filter(Boolean).join(" ");

//this function is useful for combining classes for tailwind
//useful for conditional classes
