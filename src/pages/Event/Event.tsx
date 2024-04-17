import { Button, Layout, Modal, Row } from 'antd';
import EventCalendar from 'components/EventCalendar/EventCalendar';
import { useState } from 'react';

const EventPage = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleModalOpen = () => {
        setModalIsOpen(true);
    };

    const handleModalClose = () => {
        setModalIsOpen(false);
    };

    return (
        <Layout className="h100">
            <EventCalendar events={[]} />
            <Row justify="center">
                <Button onClick={handleModalOpen}>Добавить событие</Button>
            </Row>
            <Modal
                title="Добавить событие"
                open={modalIsOpen}
                onCancel={handleModalClose}
                footer={null}
            ></Modal>
        </Layout>
    );
};

export default EventPage;
