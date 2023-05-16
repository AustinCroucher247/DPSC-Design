import './contact.scss'


function Contact() {
    return (
        <div>
            <div>
                <p className='contact--text--page'>Contact Me</p>
            </div>
            <form action="https://formsubmit.co/dylan.croucher@gmail.com" method="POST" id="contact-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Your Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
