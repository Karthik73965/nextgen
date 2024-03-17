import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';
import { MdExpandMore } from 'react-icons/md';
import ReviewForm from '../utils/Review';
import { FaSquare } from 'react-icons/fa';
export default function AccordionUsage() {
    const faq  = [
        {question :"What is NexgenStudy AI?" , answer:"NexgenStudy AI is an innovative online platform poised to transform the future of education. It offers instantaneous academic solutions, providing a wide array of resources aimed at comprehensive academic assistance. Designed to be accessible and user-friendly, NexgenStudy AI caters to a diverse range of academic needs at no cost.      "},
        {question :"Who can benefit from using NexgenStudy AI?        " , answer:"NexgenStudy AI is ideal for students and educators at various educational levels. High school students looking for instant solutions to academic questions and educators in search of reliable resources will find NexgenStudy AI exceptionally useful, as it delivers answers within seconds.        "},
        {question :"Is NexgenStudy AI free to use?        " , answer:"Yes, NexgenStudy AI is currently free, offering immediate access to all features and resources without hidden costs. We are dedicated to providing quality education that is accessible to all.        "},
        {question :"How do I create an account on NexgenStudy AI?        " , answer:"To create an account, visit nexgenstudy.ai, click on the 'Start for Free' button, and complete the required fields. After confirming your email address and entering your details, you'll gain full access to everything NexgenStudy AI has to offer.        "},
        {question :"What subjects and academic levels does NexgenStudy AI cover?            " , answer:"NexgenStudy AI spans a wide range of subjects including Mathematics, Science, Languages, and Engineering, supporting levels from primary school to university. Our platform is continually updated to include more subjects and accommodate a broader audience.        "},
        {question :"How is NexgenStudy AI different from other educational platforms?        " , answer:"NexgenStudy AI sets itself apart with its cutting-edge features, such as providing instant solutions with unparalleled accuracy, thanks to the advanced GPT-4 model. Unlike other platforms where solutions can take hours, NexgenStudy AI meets the immediate needs of its users, fostering a dynamic and supportive learning environment.        "},
        {question :"Can I access NexgenStudy AI on mobile devices?        " , answer:"Yes! NexgenStudy AI is optimized for mobile use, ensuring a seamless experience on smartphones and tablets. This allows users to access educational resources and features from anywhere, without interruption.        "},
        {question :"How can I contact the support team?        " , answer:"For assistance, you can submit feedback or inquiries through the form on the FAQ page, or directly email support@nexgenstudy.ai for more direct support.         "},
    ]
    return (
        <div className='md:px-36    '>
            {
                faq.map((option)=>{
                    return  <Accordion className='border border-black   shadow-2xl my-2'>
                    <AccordionSummary
                        expandIcon={
                            <MdExpandMore />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className='text-xl rounded-3xl  font-bold p-2 '
                    >
                     {option.question}
                    </AccordionSummary>
                    <AccordionDetails>
                    {option.answer}
                    </AccordionDetails>
                </Accordion>
                })
            }
          
        </div>
    );
}