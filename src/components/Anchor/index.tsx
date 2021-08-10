import React, { useEffect, useState } from 'react'
import { Anchor } from 'antd'

const { Link } = Anchor

interface IAnchor {
  anchor: any
}

const AnchorExample: React.FC<IAnchor> = ({ anchor }) => {
  const [targetOffset, setTargetOffset] = useState<number | undefined>(undefined)

  useEffect(() => {
    setTargetOffset(window.innerHeight / 2)
  }, [])

  return (
    <Anchor affix={false} targetOffset={targetOffset}>
      {(anchor || []).map((item: { id: string; title: string }) => (
        <Link href={`#${item.id}`} title={item.title} key={item.id} />
      ))}
    </Anchor>
  )
}

export default AnchorExample
