import React from "react";

const Contact = () => {
  return (
    <div className="max-w-[1240px] m-auto p-4 h-screen">
      <h1 className="text-2xl font-bold text-center p-4">Let's work together</h1>
      <form className="max-w[600px] m-auto" action="" method="post">
        <div className="grid  grid-cols-2 gap-2">
          <input className="border shadow-lg p-3" type="text" name="name" id="name" placeholder="Name" />
          <input className="border shadow-lg p-3"
            type="email"
            name="email"
            id="email"
            placeholder="example@gmail.com"
          />
        </div>
        <input className="border shadow-lg p-3 w-full my-2" type="text" name="subject" id="subject" placeholder="Subject" />
        <textarea className="border shadow-lg p-3 w-full" cols="30" rows="10" placeholder="Message"></textarea>
        <button className="border shadow-lg p-3 w-full" type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
