import React from 'react'
import BaseMarkdown from "components/base-markdown";
import md from './base.md'
import { useMarkdown } from 'hooks';

const BaseJenkins = () => {
    const { markdown } = useMarkdown(md)
    return (
        <BaseMarkdown markdown={markdown} />
    )
}

export default BaseJenkins