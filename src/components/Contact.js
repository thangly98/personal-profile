import React, { useState } from 'react'
import emailjs from 'emailjs-com'

const formFieldsVali = ['name', 'email', 'message']

const Contact = (props) => {
    const { name, address, phone, email, contactmessage } = props.data
    const [contact, setContact] = useState({})
    const [fieldsValidate, setValidate] = useState([])
    const [loading, setLoading] = useState(false)
    const [statusSend, setStatusSend] = useState('')

    const handleChange = (key, value) => {
        let valueForm = { ...contact }
        valueForm[key] = value
        setContact(valueForm)
    }

    const onSendMail = () => {
        try {
            setLoading(true)
            let listFieldsVali = [...fieldsValidate]
            for (const key of formFieldsVali) {
                if (contact[key]) {
                    if (listFieldsVali.find((i) => i === key))
                        listFieldsVali.splice(
                            listFieldsVali.findIndex((i) => i === key),
                            1
                        )
                } else {
                    if (!listFieldsVali.find((i) => i === key)) listFieldsVali.push(key)
                }
            }
            setValidate(listFieldsVali)
            if (listFieldsVali.length === 0 && contact.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) {
                let body = { ...contact },
                    message = body.message.split('\n')
                body['message'] = "<div style='padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic;'>"
                message.forEach((text) => (body['message'] += '<p>' + text + '</p>'))
                body['message'] += '</div>'

                emailjs.send('personal_profile', 'template_sx8evrk', body, 'user_Z50I7Qo8PuDWe07nnWZZp').then(
                    (result) => {
                        if (result.text === 'OK') showResponse('success')
                    },
                    (error) => showResponse('fail')
                )
            } else setLoading(false)
        } catch (error) {
            showResponse('fail')
        }
    }

    const showResponse = (type) => {
        setStatusSend(type)
        setLoading(false)
        if (type === 'success') setContact({})
        setTimeout(() => {
            setStatusSend('')
        }, 5000)
    }

    return (
        <section id='contact'>
            <div className='row section-head'>
                <div className='two columns header-col'>
                    <h1>
                        <span>Get In Touch.</span>
                    </h1>
                </div>

                <div className='ten columns'>
                    <p className='lead'>{contactmessage}</p>
                </div>
            </div>

            <div className='row'>
                <div className='eight columns'>
                    <div action='' id='contactForm' name='contactForm'>
                        <fieldset>
                            <div>
                                <label htmlFor='contactName'>
                                    Name <span className='required'>*</span>
                                </label>
                                <input
                                    type='text'
                                    size='35'
                                    id='contactName'
                                    name='contactName'
                                    value={contact.name || ''}
                                    onChange={(e) => handleChange('name', e.target.value)}
                                />
                            </div>
                            <span className='message-validate'>{fieldsValidate.includes('name') && 'Please enter your name!'}</span>

                            <div>
                                <label htmlFor='contactEmail'>
                                    Email <span className='required'>*</span>
                                </label>
                                <input
                                    type='email'
                                    size='35'
                                    id='contactEmail'
                                    name='contactEmail'
                                    value={contact.email || ''}
                                    required
                                    onChange={(e) => handleChange('email', e.target.value)}
                                />
                            </div>
                            <span className='message-validate'>
                                {fieldsValidate.includes('email')
                                    ? 'Please enter your email!'
                                    : contact.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)
                                    ? 'Please enter the correct email format!'
                                    : ''}
                            </span>

                            <div>
                                <label htmlFor='contactSubject'>Subject</label>
                                <input
                                    type='text'
                                    size='35'
                                    id='contactSubject'
                                    name='contactSubject'
                                    value={contact.subject || ''}
                                    onChange={(e) => handleChange('subject', e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor='contactMessage'>
                                    Message <span className='required'>*</span>
                                </label>
                                <textarea
                                    cols='50'
                                    rows='15'
                                    id='contactMessage'
                                    name='contactMessage'
                                    value={contact.message || ''}
                                    onChange={(e) => handleChange('message', e.target.value)}></textarea>
                            </div>
                            <span className='message-validate'>{fieldsValidate.includes('message') && 'Please enter your content!'}</span>

                            <div>
                                <button className='submit' onClick={onSendMail}>
                                    Submit
                                </button>
                                {loading && (
                                    <span id='image-loader'>
                                        <img alt='' src={process.env.PUBLIC_URL + '/images/loader.gif'} />
                                    </span>
                                )}
                            </div>
                        </fieldset>
                    </div>

                    {statusSend === 'faild' && (
                        <div id='message-warning'>Something went wrong, please contact me again at another time.</div>
                    )}
                    {statusSend === 'success' && (
                        <div id='message-success'>
                            <i className='fa fa-check'></i>Your message was sent, thank you!
                            <br />
                        </div>
                    )}
                </div>

                <aside className='four columns footer-widgets'>
                    <div className='widget widget_contact'>
                        <h4>Address and Phone</h4>
                        <p className='address'>
                            {name}
                            <br />
                            {address.street} <br />
                            {address.city}, {address.state} {address.zip}
                            <br />
                            <span>{phone}</span>
                            <br />
                            <span>{email}</span>
                        </p>
                    </div>

                    {/* <div className='widget widget_tweets'>
                            <h4 className='widget-title'>Latest Tweets</h4>
                            <ul id='twitter'>
                                <li>
                                    <span>
                                        This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
                                        sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                                        <a href='#'>http://t.co/CGIrdxIlI3</a>
                                    </span>
                                    <b>
                                        <a href='#'>2 Days Ago</a>
                                    </b>
                                </li>
                                <li>
                                    <span>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                        <a href='#'>http://t.co/CGIrdxIlI3</a>
                                    </span>
                                    <b>
                                        <a href='#'>3 Days Ago</a>
                                    </b>
                                </li>
                            </ul>
                        </div> */}
                </aside>
            </div>
        </section>
    )
}

export default Contact
