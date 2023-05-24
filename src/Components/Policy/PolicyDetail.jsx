import React from "react";
import { HiOutlineTruck } from "react-icons/hi";
const policyDetail = [
  {
    id: 1,
    title: "Free Shipping",
    desc: "On all orders over $75.00",
    icon: HiOutlineTruck,
  },
  {
    id: 2,
    title: "Free Returns",
    desc: "Returns are free within 9 days",
    icon: HiOutlineTruck,
  },
  {
    id: 3,
    title: "100% Payment Secure",
    desc: "Your payment are safe with us.",
    icon: HiOutlineTruck,
  },
  {
    id: 4,
    title: "Support 24/7",
    desc: "Contact us 24 hours a day",
    icon: HiOutlineTruck,
  },
];
function PolicyDetail() {
  return (
    <>
      <div className="policy">
        {policyDetail.map((data) => (
          <Policycompo
            key={data.id}
            title={data.title}
            desc={data.desc}
            Icon={data.icon}
          />
        ))}
      </div>
    </>
  );
}

export default PolicyDetail;

function Policycompo({ title, desc, Icon }) {
  return (
    <>
      <div className="policy-flex">
        <div className="policy-icon">
          <Icon />
        </div>
        <div className="policy-detail">
          <h6>{title}</h6>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
}
