import React from 'react'

import { Col, Row } from 'antd'
import { InstagramOutlined } from '@ant-design/icons'

import data from 'data/info.json'

import * as sc from './styles'
import { Container } from 'styles/stylesMain'

// import iconFacebook from './static/icon/facebook-app-symbol.svg'

const Header = (props) => {
    console.log('data', data)

    return (
        <sc._header>
            <sc._bgHeader bg={data['bg-header']} />
            <sc._zoneInfo>
                <Container>
                    <Row>
                        <Col span={12}>
                            <sc._mainInfo>
                                <sc._avatar url={data.avatar} />
                                <sc._contentMainInfo>
                                    <h4 className='full-name'>{data.fullName}</h4>
                                    <h6 className='job'>{data.job}</h6>

                                    <ul className='social-contact'>
                                        <li>
                                            <a href={data.social.facebook} rel='noreferrer' target='_blank'>
                                                {/* {iconFacebook} */}
                                            </a>
                                        </li>
                                        <li>
                                            <a href={data.social.instagram} rel='noreferrer' target='_blank'>
                                                <InstagramOutlined />
                                            </a>
                                        </li>
                                    </ul>
                                </sc._contentMainInfo>
                            </sc._mainInfo>
                        </Col>
                        <Col span={12}></Col>
                    </Row>
                </Container>
            </sc._zoneInfo>
        </sc._header>
    )
}
export default Header
