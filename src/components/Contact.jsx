import { useState,useRef } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'
import { styles } from "../style"
import { EarthCanvas } from "./canvas"
import { slideIn } from "../utils/motion"
import { SectionWrapper } from "../hoc"

//fUzpr2-SgdEU5U2BU
const Contact = () => {
  const formRef =useRef();
  const [form,setForm]=useState({
    name:'', 
    email:'', 
    message:'', 
    })
    const[loading,setLoading]=useState(false)
    const handleChange=(e)=>{
      const {name,value}=e.target
      setForm({...form , [name]:value})

    }; 
    const handleSubmit=(e)=>{
      e.preventDefault(); 
      setLoading(true)
      emailjs.send('service_hsz1908','template_nli5owm',
      {
        from_name:form.name,
        to_name :'louay',  
        from_email:form.email, 
        to_email:'louaychamtouri@gmail.com',
        message:form.message
      },
      'fUzpr2-SgdEU5U2BU'
      )
      
      
      .then(()=> { 
        setLoading(false);
        alert('thank you, I will get back to you as soon as possible')
        setForm({
          name:'', 
          email:'', 
          message:'', 
          })
         }),(error)=>{
        setLoading(false)
        console.log(error)
        alert('something went wrong')
         };
      
    }
  return (
    <div className="xl:mt-12  xl:flex-row flex-col-reverse flex gap-10 overflow-hidden  ">
      
     
              <motion.div variants={slideIn('left',"tween",0.2,1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <form ref={formRef}
              onSubmit={handleSubmit}
              className="mt-1 flex flex-col gap-8" >

                <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">Your name

                  </span>
                  <input type="text" 
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="what's your name ? "
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary 
                   text-white rounded-lg outlined-none norder-none font-medium  "/>
                </label>
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">Your email


                  </span>
                  <input type="email" 
                  name ="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="what's your email ? "
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary 
                   text-white rounded-lg outlined-none norder-none font-medium  "/>
                </label>
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">Your message
                  </span>
                  <textarea 
                  rows="7"
                  type="text" 
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="whatdo you want to say ? "
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary 
                   text-white rounded-lg outlined-none norder-none font-medium  "/>
                </label>
                <button 
                type="submit"
                className ="bg-tertiary py-3  px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary 
                rounded-xl "
                >
                  {loading? 'sending ...' :'send'}
                  
                </button>

              </form>

      </motion.div>

      <motion.div variants={slideIn('right',"tween",0.2,1)}
              className="xl:flex-1 xl:h-auto md:h-[550px] h-[600]">
                <EarthCanvas/>



              </motion.div>

    



 
    </div>
  )
}

export default SectionWrapper(Contact,"contact")