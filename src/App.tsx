import { useState } from "react";
import "./App.css";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div>
        <h1 className="text-4xl font-bold underline">Hello Daisy UI!</h1>
        <br />
        <button className="btn btn-primary">Two</button>
        <details className="dropdown">
          <summary className="btn m-1">open or close</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </details>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button className="btn" onClick={() => setIsModalOpen(true)}>
          open modal
        </button>
        <dialog id="my_modal_1" className="modal" open={isModalOpen}>
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}
