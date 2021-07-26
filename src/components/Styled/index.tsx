import styled from 'styled-components'

// #52c41a #faad14 #ff4d4f

type TextColor = 'danger' | 'warning' | 'success'

const getColor = (type: TextColor) => {
    const colors = {
        'danger': '#ff4d4f',
        'warning': '#faad14',
        'success': '#52c41a',
    }
    return colors[type] || ''
}

export const Space = styled.div`
    margin: 30px 0;
`

export const Text = styled.span`
    color: ${(props: { type: TextColor, strong?: boolean }) => getColor(props.type)};
    font-weight: ${(props: { type: TextColor, strong?: boolean }) => props.strong ? 600 : 500};
`