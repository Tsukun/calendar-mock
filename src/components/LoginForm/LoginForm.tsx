import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useAppDispatch, useAppSelector } from 'components/redux';
import { login } from 'store/reducers/auth/asyncAction';
import { selectAuth } from 'store/reducers/auth/selector';
import { rules } from 'utils/rules';

const LoginForm = () => {
    const dispatch = useAppDispatch();
    const { error, isPending } = useAppSelector(selectAuth);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        dispatch(login({ username, password }));
        console.log('submit');
    };

    const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };
    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    return (
        <Form onFinish={handleSubmit}>
            {error && <div style={{ color: 'red' }}>{error.message}</div>}
            <Form.Item
                label="Username"
                name="username"
                rules={[rules.required('Пожалуйста введите имя пользователя')]}
            >
                <Input value={username} onChange={handleUsername} />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[rules.required('Пожалуйста введите пароль')]}
            >
                <Input
                    value={password}
                    onChange={handlePassword}
                    type={'password'}
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={isPending}>
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;
