import React from 'react'
import BaseMarkdown from "components/base-markdown";
import md from './index.md'
import { useMarkdown } from 'hooks';

const ArrayUtils = () => {
    const { markdown } = useMarkdown(md)
    return (
        <BaseMarkdown markdown={markdown} />
    )
}

export default ArrayUtils