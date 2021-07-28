import sgmail from '@sendgrid/mail';
sgmail.setApiKey('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')

const SendingSignupEmail= (email,name)=>{
    
    sgmail.send({
        to:email,
        from:{
            name:'Shopify',
            email:'mahakrawat19@gmail.com'
        },
        subject:'Welcome mail!',
        text:`Hello, ${name}. We are glad to have you here. Please share your experience with us.`,
        html:' <h1>Hello ${name}!</h1><p> We are glad to have you here. Please share your experience with us.</p>'

    })
}
const SendingCancellationEmail= (email,name)=>{
     sgmail.send({
         to:email,
         from:'mahakrawat19@gmail.com',
         subject:'Sorry for your cancellation',
         text:`Hello ${name}. We are sorry for your cancellation. Please share the reason for your cancellation so we can improve.`
     })
}
export {
    SendingSignupEmail,
    SendingCancellationEmail
};