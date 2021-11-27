setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);

    props.setsetname(values.name);
           props.setsetPhone(values.phone);
           props.setsetmessage(values.message);
           props.setsendform();
          setSubmitting(false)



          <Valid setsetPhone = {SETsetPhone} setsetmessage ={SETsetmessage} setsetname ={SETsetname} setsendform = {serSendForm} />