import React, { useEffect} from 'react'
import {Row, Col, Spin, Result} from 'antd'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import {urlHelper} from "../helpers"
import {  IAuthenticate } from '../type.d'
import { verifyUser } from '../actions/authActions'

//Imports
import {assets} from "../assets/assets"
export const VerifyToken: React.FC= () => {
  const dispatch = useDispatch();
  const {loading, validation} = useSelector((state: IAuthenticate) => state.auth);
  const token = urlHelper(window.location.href)
  useEffect(() => {
  dispatch(verifyUser(token))
        // eslint-disable-next-line
  }, [])
  
  return (
    <div className="auth">
      <Row className="auth__row">
        <Col xs={{ span: 0 }} lg={{ span: 10 }} className="auth__bg">
        <Link to="/">
          <img src={assets.logo} alt="Logo" width="100" />
        </Link>
        </Col>
        <Col xs={{ span: 20 }} lg={{ span: 14 }}>
          <div className="login">
            {console.log(loading)}
        { loading ? <h1 className="verify-header">Verifying Account</h1>: <h1 className="verify-header">Verification Complete</h1>}
        { loading ? 
          <div className="loading-overlay">
            <Spin size="large" />
          </div>: null
        }
        {validation && (
          <Result
              status={
                  validation.data.isValid
                      ? 'success'
                      : 'error'
              }
              title={
                  validation.message.message ||
                  validation.message
              }
              subTitle={
                  validation.data.isValid
                      ? 'Your account has been verified succesfully'
                      : 'The token is invalid, try again later'
              }
          />
      )}
        
            <Link to="/login">Go to Login</Link>
            </div>

        </Col>
      </Row>
    </div>
  )
}
