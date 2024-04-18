import { useEffect, useState } from 'react';
import { Button, Layout, Modal, Row } from 'antd';

import { useAppDispatch, useAppSelector } from 'hooks/redux';
import {
    createEvent,
    fetchEvents,
    fetchGuests,
} from 'store/reducers/event/asyncAction';
import { selectEvents, selectGuests } from 'store/reducers/event/selector';

import EventCalendar from 'components/EventCalendar/EventCalendar';
import EventForm from 'components/EventForm/EventForm';
import { IEvent } from 'components/EventCalendar/models';
const EventPage = () => {
    const dispatch = useAppDispatch();
    const guests = useAppSelector(selectGuests);
    const events = useAppSelector(selectEvents);

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleModalOpen = () => {
        setModalIsOpen(true);
    };

    const handleModalClose = () => {
        setModalIsOpen(false);
    };

    const handleSubmit = (event: IEvent) => {
        dispatch(createEvent(event));
        setModalIsOpen(false);
    };

    useEffect(() => {
        dispatch(fetchGuests());
        dispatch(fetchEvents());
    }, []);

    return (
        <Layout className="h100">
            <EventCalendar events={events} />
            <Row justify="center">
                <Button onClick={handleModalOpen}>Добавить событие</Button>
            </Row>
            <Modal
                title="Добавить событие"
                open={modalIsOpen}
                onCancel={handleModalClose}
                footer={null}
            >
                <EventForm guests={guests} submit={handleSubmit} />
            </Modal>
        </Layout>
    );
};

export default EventPage;
