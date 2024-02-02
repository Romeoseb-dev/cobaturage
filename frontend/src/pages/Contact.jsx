import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import InputContact from "../components/InputContact";
import connexion from "../services/connexion";
import Navbar from "../components/Navbar";

import "./Contact.css";

const mail = {
  name: "",
  surname: "",
  email: "",
  number: "",
  message: "",
};

function Contact() {
  const [formValue, setFormValue] = useState(mail);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await connexion.post("/contact", formValue);
      toast.success("Email envoyé avec succès!");
      setFormValue(mail);
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email :", error);
      toast.error("Erreur lors de l'envoi de l'email");
    }
  };
  return (
    <div className="all-page-contact">
      <Navbar />
      <div className="form-contact-container">
        <h3 className="contact">ME CONTACTER :</h3>
        <div className="top-form-container">
          <form className="form-contact" onSubmit={handleSubmit}>
            <div className="container-name">
              <div className="name">
                <InputContact
                  label="Nom :"
                  name="name"
                  type="text"
                  onChange={handleChange}
                  value={formValue.name}
                />
              </div>
              <div className="surname">
                <InputContact
                  label="Prénom :"
                  name="surname"
                  type="text"
                  onChange={handleChange}
                  value={formValue.surname}
                />
              </div>
            </div>
            <div className="container-email">
              <div className="email">
                <InputContact
                  label="Mail :"
                  name="email"
                  type="text"
                  onChange={handleChange}
                  value={formValue.email}
                />
              </div>
              <div className="number">
                <InputContact
                  label="Téléphone :"
                  name="number"
                  type="text"
                  onChange={handleChange}
                  value={formValue.number}
                />
              </div>
            </div>
            <label className="container-textera">
              <span className="label-text-form-contact">Message :</span>
              <textarea
                className="textarea-form-contact"
                name="message"
                onChange={handleChange}
                maxLength={250}
                value={formValue.message}
                required
              />
            </label>
            <input
              className="form-contact-submit"
              type="submit"
              value="Envoyer"
            />
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Contact;
