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