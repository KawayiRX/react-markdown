import React from 'react'
import BaseMarkdown from "components/base-markdown";
import md from './index.md'
import { useMarkdown } from 'hooks';

const StringUtils = () => {
    const { markdown } = useMarkdown(md)
    return (
        <BaseMarkdown markdown={markdown} />
    )
}

export default StringUtils