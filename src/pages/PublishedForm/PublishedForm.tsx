import { Layout} from "antd";
import {Content} from "antd/lib/layout/layout";

// import 
import {PublishedSection} from './PublishedSection'




export const PublishedForm = () => {
    const {Footer}= Layout;
    

    return (
        <Layout style={{ minHeight: "100vh" }}>
      <Content className="published-section-container">
        <PublishedSection />
      </Content>
      <Footer />
    </Layout>
    )
}
