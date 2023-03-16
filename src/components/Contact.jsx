import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";



const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email:'',
    message:'',
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target, value } = e.target;

    setForm({ ...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_5omq75g',
      'template_9ntmqv8',
      {
        from_name: form.name,
        to_name: 'Giorgio',
        from_email: form.email,
        to_email: 'giorgio.agn97@gmail.com',
        message: form.message,

      },
      'bWFsuluEA1UeaQDA4'
      )
      .then(() => {
        setLoading(false);
        alert('Grazie! Ti ricontattero il prima possibile.');

        setForm({
          name: '',
          email: '',
          message:'',
        })
      }, (error) => {
        setLoading(false)

        console.log(error);

        alert('Something went wrong.')
      })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-xl"
      >
        <p className={styles.sectionSubText}>Per informazioni</p>
        <h3 className={styles.sectionHeadText}>Contattami</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <lable className="flex flex-col">
            <span className="text-white font-medium mb-4">Il tuo nome</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Mario Rossi"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            >
            </input>
          </lable>
          <lable className="flex flex-col">
            <span className="text-white font-medium mb-4">La tua email</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="mariorossi@email.com"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            >
            </input>
          </lable>
          <lable className="flex flex-col">
            <span className="text-white font-medium mb-4">Messaggio</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Scrivi qui il testo"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            >
            </textarea>
          </lable>

          <button
            type="sumbit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Sending': 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        {/* <EarthCanvas /> */}
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")