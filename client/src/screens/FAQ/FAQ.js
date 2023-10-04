import './FAQ.css'
import { React, useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Navbar from '../../component/NavBar/NavBar';

export default function FAQ() {
    const faqs = [{ "id": 1, "question": "Is it easy to build a website?", "answer": "Yes. Wix offers a few different ways to create your own free website, so you can choose the creation process that works best for you. Need to get online fast? Answer a few simple questions and Wix ADI (Artificial Design Intelligence) will build a professional website for you in under 10 minutes. If you want 100% design freedom, start from scratch and drag and drop the website design features you need in the Wix Editor." },
    { "id": 2, "question": "Can I create a website without knowing how to code?", "answer": "Absolutely. Wix is user-friendly and makes it possible to build a professional website without knowing how to code. In the Wix Editor, you can drag and drop any feature you want and customize it to match the look and feel of your site. Of course, if you do know how to code, you can add advanced functionality to your site with Velo" },
    { "id": 3, "question": "How do I make my site mobile friendly?", "answer": "Your Wix website automatically comes with a mobile-optimized version that looks great on smaller screens. The Wix Mobile Editor makes it easy to customize your mobile site even more." },
    { "id": 4, "question": "How do I create a free website with a custom domain?", "answer": "You can create a free website with Wix that comes with a Wix domain. To instantly look more professional online, get a custom domain name. It adds credibility to your brand and helps visitors find you online. You can start building your brand by using your domain in a custom email address (info@mystunningwebsite.com), your social channels, email marketing campaigns and more." },
    { "id": 5, "question": "Should I use a website builder or hire a web developer?", "answer": "The free Wix website builder is intuitive to use. Looking for a specific web service? Explore the Wix Marketplace to find a certified freelancer or agency at a price that fits your budget." },
    { "id": 6, "question": "How do I build and host my site for free?", "answer": "When you create a free website with Wix, you get reliable, scalable and free web hosting. All your web content will be stored on secure servers located around the world. So no matter where your visitors come from, your site will load fast. " },
    { "id": 7, "question": "Can I use a website builder to create a landing page?", "answer": "Absolutely! You can create any kind of website with Wix. Explore beautiful HTML landing page templates to get started today." },
    { "id": 8, "question": "How do I get my website found on Google?", "answer": "Wix makes it simple to get your website found on Google. With Wix SEO Wiz, answer a few questions about your site, location and keywords and get a personalized SEO plan to get found online." }]





    return (
        <div>
            <Navbar/>
            <Accordion>
                {faqs.map(item => {
                    return (
                        <Accordion.Item eventKey={JSON.stringify(item.id + 1)} key={item.id}>
                            <Accordion.Header>{item.question}</Accordion.Header>
                            <Accordion.Body> {item.answer} </Accordion.Body>
                        </Accordion.Item>)
                })}
            </Accordion>
        </div>
    );
}