export const html = (
    [first, ...strings]: TemplateStringsArray,
    ...values: any[]
): string =>
    values
        .reduce((prev, cur) => prev.concat(cur, strings.shift()!), [first])
        .filter((item: any) => (item && item !== true) || item === 0)
        .join('');
