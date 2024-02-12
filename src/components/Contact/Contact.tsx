import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    window.location.href = `mailto:jihanchowdhury70@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message}`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-primary/50 underline">Lets Talk.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-primary h-7 w-7 animate-pulse" />
            <p className="text-2xl">+8801778485208</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-primary h-7 w-7 animate-pulse" />
            <p className="text-2xl">jihanchowdhury70@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-primary h-7 w-7 animate-pulse" />
            <p className="text-2xl">Dhaka, Bangladesh</p>
          </div>
        </div>

        <form
          className="flex flex-col space-y-2 w-fit mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex space-x-2">
            <input
              type="text"
              {...register("name")}
              className="contactInput"
              placeholder="Name"
            />
            <input
              className="contactInput"
              {...register("email")}
              placeholder="Email"
              type="email"
            />
          </div>

          <input
            type="text"
            {...register("subject")}
            className="contactInput"
            placeholder="Subject"
          />

          <textarea
            placeholder="Message"
            {...register("message")}
            className="contactInput"
          ></textarea>
          <button
            type="submit"
            className="bg-primary py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
