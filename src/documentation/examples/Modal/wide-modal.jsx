import React, { useState } from 'react';
import Modal from '@bufferapp/ui/Modal';
import Text from '@bufferapp/ui/Text';
import Button from '@bufferapp/ui/Button';


/** Wide Modal */
export default function ModalTest() {
  const [modalOpen, openModal] = useState(false)
  return (
    <div style={{ width: '100%', height: '400px', position: 'relative' }}>
      <Button
        type="primary"
        onClick={() => {openModal(true)}}
        label="Bring the modal!"
      />
      { modalOpen && (
        <Modal
          action={{ label: "Don’t Panic!", callback: () => openModal(false) }}
          wide
        >
          <div>
            <div style={{ width: '100%', padding: '16px', boxSizing: 'border-box' }}>
              <Text type="h3">“Space,” it says, “is big. Really big. You just won’t believe how vastly, hugely, mindbogglingly big it is. I mean, you may think it’s a long way down the road to the chemist’s, but that’s just peanuts to space.”</Text>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
