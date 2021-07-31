import React  from 'react'
import {Row, Col} from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'


//Imports
import {assets} from "../assets/assets"

export const PrivacyPolicy: React.FC= () => {
  let history = useHistory()
    const goToPreviousPath = () => {
        history.goBack()
    }

  return (
    <div className="terms-condition">
      <Row className="terms-condition__row">
        <Col xs={{ span: 0 }} lg={{ span: 10 }} className="terms-condition__bg">
          <img src={assets.logo} alt="Logo" width="100" />
        </Col>
                <Col xs={{ span: 20 }} lg={{ span: 14 }}>
                    <div>
                        <div className="terms-condition__channel">
                            <h1>
                                <ArrowLeftOutlined
                                    onClick={goToPreviousPath}
                                    className="icon"
                                />
                                Privacy Policy
                            </h1>
                            <div className="section">
                                <h3>Preface</h3>
                                <span>
                                    Venture Garden Group, GSV/Trails strongly
                                    believes in providing total privacy and
                                    protection to our customer’s personal data.
                                    The information our customers give us are
                                    gotten with full consent, are processed
                                    under legal basis and are not sold, rented,
                                    loaned or otherwise disclosed to third
                                    parties.Our policies are created to provide
                                    protection of the confidentiality and
                                    security of our customer’s personal
                                    information. We only require the minimum
                                    amount of personal information needed to
                                    fulfill our service to our customers. Our
                                    privacy standards are in compliance with the
                                    National Data Protection Regulation (NDPR)
                                    and the General Data Protection Regulation
                                    (GDPR).
                                </span>
                            </div>

                            <div className="section">
                                <h3>Policy Overview</h3>
                                <span>
                                    This Privacy Policy describes the process
                                    involved in the acquisition, processing,
                                    porting, storage and disposing of your
                                    personal data in connection with our
                                    websites, portals, mobiles applications,
                                    tools and services. This Privacy Policy also
                                    governs your rights regarding the foregoing
                                    Venture Garden Nigeria (hereafter referred
                                    to as VGN) [Trail] takes pride in securing
                                    and maintaining the privacy of the data we
                                    collect from you.
                                </span>
                            </div>

                            <div className="section">
                                <h3>Scope and Consent</h3>
                                <span>
                                    This policy is enforced after you consent to
                                    it when you sign-up, access our products,
                                    services, content, features, technologies or
                                    functions offered from our websites, related
                                    sites, portals, applications and services.
                                    However, VGN [Trail] is not responsible for
                                    handling of information gotten by third
                                    party customer/sites through the use of our
                                    tools, portal, and services and will not be
                                    held liable for any breach or misuse of
                                    collected information.
                                </span>
                            </div>

                            <div className="section">
                                <h3>Rights</h3>
                                <span>
                                    You have the right of access to your
                                    personal data being processed by VGN
                                    [Trail] which includes requesting for an
                                    update, rectification, erasure, asking for a
                                    copy of your personal data, a withdrawal of
                                    consent at any time, complaining to a data
                                    protection authority, without affecting the
                                    lawfulness of processing based on consent
                                    given before the withdrawal.
                                </span>
                                <br />
                                <br />
                                <span>
                                    You can request for a restriction or
                                    deletion of your personal data based on the
                                    following: <br />
                                    <br />
                                </span>
                                <ul>
                                    <li>
                                        Non-legitimate grounds for processing
                                    </li>
                                    <li>Unlawful processing</li>
                                    <li>Erasure is required for compliance with a legal obligation.</li>
                                    <li>Inaccuracy of personal data</li>
                                    <li>Change in initial purpose</li>
                                </ul>
                                      <br/>
                                <span>All requests shall be made in writing to the Data Protection Officer via email at dpo@venturegardengroup.com</span>
                            </div>


                            <div className="section">
                                <h3>Use of personal Information</h3>
                                                                <span>
                                The collection and use of personal data by VGN [Trail] is guided by certain principles. These principles state that personal data should: <br />
                                    <br />
                                </span>
                                <ul>
                                    <li>
                                    be processed fairly, lawfully and in a transparent manner
                                    </li>
                                    <li>be obtained for a specified and lawful purpose and shall not be processed in any manner incompatible with such purposes. </li>
                                    <li>be adequate, relevant and limited to what is necessary to fulfil the purpose of processing.</li>
                                    <li>be accurate and, where necessary, up to date. </li>
                                    <li>Not be kept for longer than necessary for the purpose of processing.</li>
                                    <li>be processed in accordance with the data subject’s rights.</li>
                                    <li>be kept safe from unauthorised processing, and accidental loss, damage or destruction using adequate technical and organizational measures.</li>
                                </ul>
                            </div>

                            <div className="section">
                                <h3>Personal Data Collected and Used in VGN</h3>
                                <span>
                                We collect the following personal information in order to provide personalized and improved experience. Personal Data may be given to us directly by you or by people or companies authorized by you to act on your behalf. We may also collect Personal Data about you from third parties in connection with our services. No Personal Data about you will be collected without your consent.  Where we need to collect Personal Data by law, or under the terms of a contract we have with you and you fail to provide that data when requested, we may not be able to provide the services envisaged or requested.  
                                </span>
                                <br/>
                                <br/>
                                <span style={{fontWeight:"bold"}}>Automatic Information</span>
                                <br/>
                                <span>
                                In general, website visitors do not need to provide personalized information to VGN. We may collect "aggregate data," i.e., group data with no personal identifiers such as IP address, device type, geo-location information, computer and connection information, mobile network information, statistics on page views, traffic to and from the sites, referral URL, ad data, and standard web log data and other information. We use this aggregate data to help us understand how the Sites are being used and to improve usability. We also use it to enhance the quality and availability of products and services we offer.
                                </span>
                                <br/>
                                <br/>
                                <span style={{fontWeight:"bold"}}>Provided Information</span>
                                <br/>
                                <span>
                                Personal data that are provided and retained allows VGN [Trail] provide services to its users. VGN [Trail] solely holds the information and engages in no contact-sharing program with other organizations. The information collected are
                                </span>
                                <br/>
                                <br/>
                                <span><span style={{fontWeight:"bold"}}>Contact Information:</span> first and last name, email address. phone number, organizations, and any other information required to process your information as a user of our platforms.</span>
                                <br/>
                                <br/>
                                <span><span style={{fontWeight:"bold"}}>Website Cookies: </span> 
                                (small text files) when a user visits a website, and these cookies are used to analyse aggregate user behaviour on our website. VGN [Trail] websites ask permission of the visitor prior to setting cookies. Should the visitor agree, VGN’s server shall only collect the following information:
                                </span>
                                <ol>
                                      <li>The visitor’s IP address (including the domain name associated with the IP address, i.e., using reverse look-up).</li>
                                      <li>The date and time of the visit to the website.</li>
                                      <li>The pages visited on the website.</li>
                                      <li>The browser being used.</li>
                                      <li>In addition, where this is available, VGN [Trail] shall also collect: 
                                        <ul>
                                          <li>The country from which the visitor is accessing the website</li>
                                          <li>The language of the browser being used.</li>
                                          <li>The website from which the visitor is accessing the VGN website.</li>
                                          <li>The search word used (if the site is accessed via a search engine).</li>
                                          <li>The type of connection and operating system.</li>
                                        </ul>
                                      </li>
                                </ol> 
                                <span>We only use these data to improve the visitor’s website experience. Please review our Cookie Policy to learn more about how we use cookies</span>                              
                              <br/>
                              <br/>
                              <span><span style={{fontWeight:"bold"}}>Third Party Source: </span> We may collect information from third party websites such as social media sites which authorizes VGN to access, store and use user’s information which will be handled in accordance with this policy.</span>
                              <br/>
                              <br/>
                              <span><span style={{fontWeight:"bold"}}>Mobile Devices: </span> Some of our applications can be accessed through mobile application or mobile-optimised website from which we collect user’s data. This policy applies to access and use of data through mobile devices.</span>
                              <br/>
                              <br/>
                              <span><span style={{fontWeight:"bold"}}>Surveys: </span> In order to ensure that the services we offer meet your requirements, we may ask for your feedback in form of surveys and polls. Any feedback received from you shall only be used for the purpose of improving our services and shall not be disclosed and are used for research and publication purposes..</span>
                              <br/>
                              <br/>
                              <span><span style={{fontWeight:"bold"}}>Inquiries:  </span> When an inquiry is sent to us through our contact form, we use the personal data that you have stated in the contact form to send a response to you. Any personal data received from you shall not be used for any other purpose without your prior consent and knowledge and shall not be disclosed.</span>
                            </div>
                              
                              
                            <div className="section">
                                <h3>Duration of Storage</h3>
                                <span>
                                We shall store your personal data until they are no longer necessary for the purpose which we had collected it. Your information is only retained in accordance with legal and regulatory requirements for the collected data. 
                                </span>
                            </div>

                            <div className="section">
                                <h3>Data Storage and Security</h3>
                                <span>
                                VGN and its partners [Trail] use a security-cleared data processor to store files and data on secure cloud-based servers hosted in the Republic of Ireland region of Amazon Web Services, and the North Europe Region of Microsoft Azure. The data processors are certified under the applicable frameworks and thereby guarantees and operates an appropriate standard of data protection and data security. Regardless of where your information is processed, we apply the same protections described in this policy and you have the right (upon your request) to be informed of the appropriate safeguards for data protection in the foreign country.<br/> <br/> We protect your Personal Data using physical, technical, and administrative security measures to reduce the risks of loss, misuse, unauthorized access, disclosure and alteration.  All data is accessed via secure connections and stored on encrypted servers and encrypted storage services. We also use firewalls and physical access controls for our data centres, and information access authorization controls. <br/> <br/> Despite our efforts to establish a secure environment for the website, you should be aware that no information is completely secure on the internet. Therefore, you should always take the necessary safeguards and precautions on your own equipment. In the event of an actual or suspected breach of your Personal Data, we will use best effort to remedy the breach within one (1) month from the date we report the breach to you.
                                </span>
                            </div>

                            <div className="section">
                                <h3>Children's Privacy</h3>
                                <span>
                                We do not use our platforms to knowingly solicit data from children or individuals under the age of Sixteen (16). Where a parent or guardian discovers that a child or individual under the age of Sixteen (16) has provided us with his/her Personal Data without their consent, he or she should contact us at [dpo@venturegardengroup.com] and we shall immediately delete the user’s account from our servers.  
                                </span>
                            </div>

                            <div className="section">
                                <h3>Accuracy of Information</h3>
                                <ul>
                                  <li>The Company shall take reasonable steps to ensure personal data is accurate. </li>
                                  <li>Where necessary for the lawful basis on which data is processed, steps shall be put in place to ensure that personal data is kept up to date. </li>
                                  <li>The Company shall ensure that updated personal data reflect across all boards to which it is being used.
                                  </li>
                                </ul>
                            </div>

                            <div className="section">
                                <h3>Archiving/Removal</h3>
                                <ul>
                                  <li>To ensure that personal data is kept for no longer than necessary, the Company puts in place a data retention policy for each area in which personal data is processed and review this process annually.</li>
                                  <li>This retention policy considers what data should/must be retained, for how long, and why.  </li>
                                </ul>
                            </div>

                            <div className="section">
                                <h3>Transfer of Personal Data</h3>
                                <span>We do not rent or sell your personally identifiable information to other individuals or organizations. However, we may transfer your personal data to third parties when it is necessary to provide you with our service. Third parties could include: </span>
                                <br/>
                                <br/>
                                <ul>
                                  <li>Undertakings within VGN [Tail]</li>
                                  <li>Business partners</li>
                                  <li>Professional advisors</li>
                                  <li>Legal or regulatory authority</li>
                                  <li>Application program interface (API) Users</li>
                                  <li>Security-cleared data processors/subcontractors, who are assisting us or the group with IT or other services.</li>
                                </ul>
                                <br/>
                                <span>When we transfer your personal data to business partners, you should be aware that they might have stored personal data concerning you collected through other means, e.g., if you have been in contact with them in another context. <br/> <br/> We also transfer your personal data to the above or other third parties if we are obliged to do so according to legislation or in order to protect our or the group’s interests in legal disputes. </span>
                                <br/>
                                <br/>
                                <span>
                                  <span style={{fontWeight:"bold"}}>Transfer of Personal Data to Third Countries</span><br/> VGN [Trail] partners with various technology vendors from time to time. This shall result in a transfer of personal data to a third country or international organization.<br/><br/> In order to ensure an equal level of security for such transfer in accordance with the NDPR, VGN [Trail] has chosen to work only with vendors that have entered Standard Contractual Clauses with VGN.


                                </span>
                            </div>

                            <div className="section">
                                <h3>Changes to this policy</h3>
                                <span>We may update this Policy from time to time without any prior notice to you or consent. Thus, you are advised to consult this Platform periodically for any changes. We will notify you of any changes by posting the revised Policy on this Platform. Please note that changes shall be effective immediately after they are updated on this Platform.</span>
                            </div>

                            <div style={{ marginBottom: '40px' }}>
                                <h3>Contact</h3>
                                <span>If you want to lodge a complaint over our processing of your personal data or have further requests, please contact the Data Protection Officer directly at dpo@venturegardengroup.com. <br/> <br/> Venture Garden Group [Trail] maintains an incidence response plan used in dealing with incidents relating to unlawful disclosure, loss, alteration, destruction, access to our customer’s personal data collected, transmitted, stored or processed in any way. <br/> <br/> We will work with the National Information Technology Development Agency (NITDA) to resolve any issues that we cannot resolve with you directly. </span>
                            </div>
                              
                        </div>
                    </div>
                </Col>
            </Row>
       
    </div>
  )
}
