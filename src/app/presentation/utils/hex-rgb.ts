export const hexToRgb = (color, opacity): string => {
  return `rgba(${parseInt(color.slice(1, 3), 16)},
               ${parseInt(color.slice(3, 5), 16)},
               ${parseInt(color.slice(5), 16)}, opacity)`
}
