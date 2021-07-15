declare module 'remark-codesandbox' {
    import { Plugin } from 'unified'
    const Codesandbox: Plugin<any>
    interface RemarkCodeboxOptions {
        mode?: string
    }
    export default Codesandbox
}