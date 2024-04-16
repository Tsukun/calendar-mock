import React from 'react';
import { Layout, Menu, Row } from 'antd';
import { useNavigate } from 'react-router';
import { PUBLIC_PATH } from '../../routes';

const Navbar = () => {
    const navigate = useNavigate();
    const auth = true;

    return (
        <Layout.Header>
            <Row>
                {auth ? (
                    <Menu
                        style={{ flex: 1, justifyContent: 'end' }}
                        theme="dark"
                        mode="horizontal"
                        selectable={false}
                    >
                        <div style={{ color: 'white' }}>Tsukune</div>
                        <Menu.Item onClick={() => console.log('EXIT')}>
                            Exit
                        </Menu.Item>
                    </Menu>
                ) : (
                    <Menu
                        style={{ flex: 1, justifyContent: 'end' }}
                        theme="dark"
                        mode="horizontal"
                        selectable={false}
                    >
                        <Menu.Item onClick={() => navigate(PUBLIC_PATH.login)}>
                            Login
                        </Menu.Item>
                    </Menu>
                )}
            </Row>
        </Layout.Header>
    );
};

export default Navbar;
