
import React, {useState, lazy, Suspense} from 'react'

const RenderOutsideTree = lazy(()=> import("./RenderOutsideTree"));

function Codesplitting() {
    const[showModal, setShowModal] = useState(false);

    const openModal = ()=>{
        setShowModal(true);
    };

    const closeModal = ()=>{
        setShowModal(false);
    };
  return (
    <div>
        <button onClick={openModal}>Open Modal</button>
        <Suspense
        fallback={<div>Loading...</div>}>
        {showModal && <RenderOutsideTree onClose={closeModal}/>}
            
        </Suspense>
    </div>
  );
}

export default Codesplitting