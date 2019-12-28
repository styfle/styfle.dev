const Contact = () => (
    <div>
        <style jsx>{`
        label { display: block; margin-top: 20px }
        label span { display: inline-block; width: 75px; text-align: right; margin: 5px 20px 0 0; vertical-align: top;}
        input, textarea { color: white; background: black; }
        textarea { height: 50px; width: 300px; }
        `}</style>
      <h1>Contact Me</h1>
      <form method="post" target="/api/email">
          <label><span>Name:</span><input type="text" name="name" placeholder="Jane Doe" /></label>
          <label><span>Email:</span><input type="email" name="email" placeholder="foo@example.com" /></label>
          <label><span>Message:</span><textarea name="message" placeholder="You are awesome!"></textarea></label>
      </form>
    </div>
  );
  
  export default Contact;
  