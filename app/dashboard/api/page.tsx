"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import React from "react";

const APIPage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Type assertion to cast `event.target` to HTMLFormElement
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      srnum: formData.get("srnum") as string,
      asset: formData.get("asset") as string,
    };

    console.log(data);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://contact-form-inky-zeta.vercel.app/submit-form",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form id="contactForm" onSubmit={handleSubmit}>
        <label>Assignee:</label>
        <Input type="text" id="name" name="name" required />
        <br />

        <label>Email Address:</label>
        <Input type="email" id="email" name="email" required />
        <br />

        <label>Contact Number:</label>
        <Input type="text" id="phone" name="phone" />
        <br />

        <label>Sr.. Number:</label>
        <Input id="srnum" name="srnum" required />
        <br />

        <label>Asset Number:</label>
        <Input type="text" id="asset" name="asset" />
        <br />

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default APIPage;
