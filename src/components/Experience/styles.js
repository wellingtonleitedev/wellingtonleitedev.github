import styled from 'styled-components'
import { Timeline } from 'antd'


export const TimelineItem = styled(Timeline.Item)`
    header {
        margin-bottom: 10px;
    }

    .ant-timeline-item-tail {
        border-left: 2px solid #000000a1;
    }
`