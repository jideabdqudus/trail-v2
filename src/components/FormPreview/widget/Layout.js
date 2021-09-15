
import { Card, Typography } from 'antd'
import { isEmpty } from 'lodash'

export const Layout = ({question, id, children, isPreview, indicatorquestion}) => {
    return (
        <Card className="preview-question-card" title={`Question ${id + 1}`} extra={isPreview }>
            <Typography.Paragraph>{isEmpty(question) ? indicatorquestion?.question : question}</Typography.Paragraph>
            {children}
        </Card>
    )
}

