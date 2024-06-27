import { backendUrl } from "@/url";
import { useEffect, useState } from "react";

export default function Payment() {
  const [amount, setAmount] = useState("");
  const [keyId, setKeyId] = useState("");

  useEffect(() => {
    fetch(backendUrl + "/get-keyid", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setKeyId(data.keyId);
      });
  }, []);

  const handlePayment = async () => {
    const res = await fetch("/api/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount }),
      credentials: "include",
    });
    const order = await res.json();

    const options = {
      key: keyId,
      amount: order.amount,
      currency: order.currency,
      name: "Matriomony",
      description: "Test Transaction",
      order_id: order.id,
      handler: async (response) => {
        const verificationRes = await fetch("api/verify-payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(response),
          credentials: "include",
        });

        const verification = await verificationRes.json();
        if (verification.success) {
          alert("Payment successful");
        } else {
          alert("Payment verification failed");
        }
      },
      prefill: {
        name: "Your Name",
        email: "email@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Some Address",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div>
      <h1>Make a Payment</h1>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
}
