import React, { useState } from 'react';
import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import { Moment } from 'moment';

import { rules } from 'utils/rules';
import { formatDate } from 'utils/date';

import { selectUsername } from 'store/reducers/auth/selector';
import { IUser } from 'store/reducers/auth/models';

import { IEvent } from 'components/EventCalendar/models';
import { useAppSelector } from 'hooks/redux';

interface EventFormProps {
    guests: IUser[];
    submit: (event: IEvent) => void;
}

const EventForm = (props: EventFormProps) => {
    const { guests, submit } = props;
    const currentUser = useAppSelector(selectUsername);

    const [event, setEvent] = useState<IEvent>({
        author: currentUser,
        date: '',
        description: '',
        guest: '',
    });

    const guestList = guests.map((element) => ({
        key: element.username,
        value: element.username,
        label: element.username,
    }));

    const handleDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEvent({ ...event, description: e.target.value });
    };

    const handleDate = (date: Moment | null) => {
        if (date) {
            setEvent({ ...event, date: formatDate(date?.toDate()) });
        }
    };

    const onSubmit = () => {
        submit(event);
    };

    return (
        <Form onFinish={onSubmit}>
            <Form.Item
                label="Описание события"
                name="description"
                rules={[rules.required()]}
            >
                <Input value={event.description} onChange={handleDescription} />
            </Form.Item>
            <Form.Item
                label="Дата события"
                name="date"
                rules={[
                    rules.required(),
                    rules.isDateAfter('Нельзя создать событие в прошлом'),
                ]}
            >
                <DatePicker onChange={handleDate} />
            </Form.Item>
            <Form.Item>
                <Select
                    style={{ width: '50%' }}
                    options={guestList}
                    onChange={(guest: string) => setEvent({ ...event, guest })}
                />
            </Form.Item>
            <Row justify={'end'}>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Создать
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
};

export default EventForm;
