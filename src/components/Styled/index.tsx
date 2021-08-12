import styled from 'styled-components'

// #52c41a #faad14 #ff4d4f

type TextColor = 'danger' | 'warning' | 'success'

const getColor = (type: TextColor) => {
  const colors = {
    danger: 'rgb(247, 140, 108)',
    warning: '#faad14',
    success: '#52c41a'
  }
  return colors[type] || ''
}

export const Space = styled.div`
  margin: 30px 0;
`

export const Text = styled.span`
  color: ${(props: { type: TextColor; strong?: boolean }) => getColor(props.type)};
  font-weight: ${(props: { type: TextColor; strong?: boolean }) => (props.strong ? 600 : 500)};
`

export const H1 = styled.h1`
  font-size: 20px;
  font-weight: bolder;
  margin: 10px 0;
`

export const H2 = styled.h1`
  font-size: 18px;
  font-weight: bolder;
  margin: 5px 0;
`
export const H3 = styled.h1`
  font-size: 16px;
  font-weight: bolder;
  margin: 5px 0;
`
export const H4 = styled.h1`
  font-size: 14px;
  font-weight: bolder;
  margin: 5px 0;
`
