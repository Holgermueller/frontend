function AboutModal() {
  const showModal = (e) => {
    // e.preventDefault();

    console.log("click");
    const modal = document.getElementById("mymodal");

    if (modal) {
      modal.style.display = "block";
    }
  };

  return (
    <div id="aboutModal">
      <button className="about-button" id="modalButton" onClick={showModal}>
        About
      </button>

      <div className="modal" id="myModal">
        <div className="modalContent">
          <p>This is the modal content.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutModal;
