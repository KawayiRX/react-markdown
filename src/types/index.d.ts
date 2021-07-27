declare module 'remark-codesandbox' {
    // import { Plugin } from 'unified'
    const Codesandbox: any;
    export default Codesandbox;
}
declare module 'remark-images' {

    const Image: any;
    export default Image;
}

declare module '*.md' {
    const MD: string;
    export default MD;
}
declare module '*.less' {
    const style: any;
    export default style;
}

declare module 'rehype-picture' {
    const MD: any;
    export default MD;
}

declare module 'mdx.macro' {
    const MDX: any;
    export default MDX;
}

declare module 'remark-code-screenshot' {
    const screenshot: any;
    export default screenshot;
}

// declare module '*.mdx' {
//     let MDXComponent: (props: any) => JSX.Element;
//     export default MDXComponent;
// }

// declare module '@mdx-js/tag' {
//     let MDXProvider: any;
//     export default any;
// }
