import { useNavigate } from 'react-router';
import { Layout, Menu, Row, Space } from 'antd';
import type { MenuProps } from 'antd';

import { selectIsAuth, selectUsername } from 'store/reducers/auth/selector';
import { resetAuth } from 'store/reducers/auth/slice';
import { useAppDispatch, useAppSelector } from 'components/redux';

import { PUBLIC_PATH } from '../../routes';
import styles from './Navbar.module.css';

export const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const isAuth = useAppSelector(selectIsAuth);
    const username = useAppSelector(selectUsername);

    const privateItems: MenuProps['items'] = [
        {
            key: 'exit_item',
            onClick: () => dispatch(resetAuth()),
            label: 'Exit',
        },
    ];

    const publicItems: MenuProps['items'] = [
        {
            key: 'login_item',
            label: 'Login',
            onClick: () => navigate(PUBLIC_PATH.login),
        },
    ];

    return (
        <Layout.Header>
            <Row justify={'end'} align={'middle'}>
                {isAuth ? (
                    <>
                        <Space direction="vertical" align="center">
                            <span className={styles.title}>{username}</span>
                        </Space>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            items={privateItems}
                            selectable={false}
                        />
                    </>
                ) : (
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        selectable={false}
                        items={publicItems}
                    />
                )}
            </Row>
        </Layout.Header>
    );
};

export default Navbar;
