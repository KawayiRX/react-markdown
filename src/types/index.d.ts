declare module 'remark-codesandbox' {
    // import { Plugin } from 'unified'
    const Codesandbox: any
    export default Codesandbox
}
declare module 'remark-images' {
    import { Plugin } from 'unified'
    const Image: any
    export default Image
}

declare module '*.md' {
    const MD: string
    export default MD
}
declare module '*.less' {
    const style: any
    export default style
}

declare module 'rehype-picture' {
    const MD: any
    export default MD
}
declare module 'remark-code-screenshot' {
    const screenshot: any
    export default screenshot
}