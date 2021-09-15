import {  Card, Col, Row, Typography } from "antd";
interface Props{
 form: any
}
export const ProgrammeSummary = ({form}: Props) => {
  // const history = useHistory();
  // const handleEdit = () =>
  //   history.push(`/app/build_form/${form.id}`);
  const capitalize=(word: string)=>{
    if(word){
      const word2=word.charAt(0).toUpperCase()+ word.slice(1);
      return word2
    }
  }
    return (
        <div className="programme-summary">
      <Row>
        <Col span={24}>
          <Card
            title="Programme Summary"
          >
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Typography.Text className="programme-summary-title">
                  Form Name
                </Typography.Text>
                <Typography.Paragraph className="programme-summary-description">
                  {capitalize(form.name)}
                </Typography.Paragraph>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Typography.Text className="programme-summary-title">
                  Instructions
                </Typography.Text>
                <Typography.Paragraph className="programme-summary-description">
                  {form.instructions}
                </Typography.Paragraph>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
    )
}
