const Contact = () => {
  return (
    <section className="py-20 flex justify-center">
      <div className="card bg-base-200 shadow-xl p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
        <input className="input input-bordered mb-4" placeholder="Name" />
        <input className="input input-bordered mb-4" placeholder="Email" />
        <textarea className="textarea textarea-bordered mb-4" placeholder="Message" />
        <button className="btn btn-primary w-full">Send</button>
      </div>
    </section>
  );
};

export default Contact;
