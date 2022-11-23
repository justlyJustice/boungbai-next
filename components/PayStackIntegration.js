import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { usePaystackPayment } from "react-paystack";
import { toast } from "react-toastify";

import useUser from "hooks/useUser";
import { verifyCoursePurchase } from "services/courseService";

import publicKey from "config/publicKey";

const PayStackIntegration = ({ course }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = useUser();
  let purchasedCourse;

  console.log(user);

  /* Check if user has purchased the `Course` */
  if (user.savedCourses) {
    purchasedCourse = user && user.savedCourses.find((id) => id === course._id);
  }

  /* Paystack config */
  const config = {
    reference: new Date().getTime().toString(),
    metadata: {
      name: user.name,
      description: `Purchase for ${course.name}`,
    },
    email: user.email,
    amount: `${course.price}00`,
    publicKey,
  };

  const verifyTransaction = async (reference) => {
    const res = await verifyCoursePurchase(course._id, reference);
    setLoading(false);

    if (res.ok) {
      alert(`Transaction successful!`);

      setTimeout(() => {
        navigate("/dashboard");
      }, 4000);
    }

    if (!res.ok) {
      alert(`Transaction failed!`);
    }

    return res;
  };

  const onSuccess = (reference) => {
    verifyTransaction(reference && reference.reference);
  };

  const onClose = () => {
    setLoading(false);
    toast.warning(`Transaction was canceled`);
  };

  const initializePayment = usePaystackPayment(config);

  if (purchasedCourse) {
    return (
      <Link className="enroll-btn" href={`/my/courses/${course.slug}`}>
        <i className="fa-brands fa-leanpub cart"></i> Start Learning!
      </Link>
    );
  }

  return (
    <button
      className="enroll-btn"
      disabled={loading}
      onClick={() => {
        setLoading(true);
        initializePayment(onSuccess, onClose);
      }}
    >
      {loading ? (
        <>
          <i className="fa-solid cart fa-spinner fa-spin card-icon"></i> Please
          wait!
        </>
      ) : (
        <>
          <i className="fa-solid cart fa-cart-arrow-down"></i> Enroll Now!
        </>
      )}
    </button>
  );
};

export default PayStackIntegration;
