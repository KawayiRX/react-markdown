import React from 'react'
import BaseMarkdown from "components/base-markdown";
import md from '../test.md'
import { useMarkdown } from 'hooks';

const BaseNpm = () => {
    const { markdown } = useMarkdown(md)
    return (
        <BaseMarkdown markdown={markdown} />
    )
}

export default BaseNpm