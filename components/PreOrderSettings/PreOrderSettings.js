import React, { useState } from "react";
import { districts } from "../../fakeData/district.json";
import { stores } from "../../fakeData/store.json";
import Link from "next/link";

const PreOrderSettings = () => {
  const [activeRow, setActiveRow] = useState("");

  const handleRowClick = (index) => {
    setActiveRow(index === activeRow ? null : index);
  };
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-20 mb-20">
            <label>Select Area</label>
            <select className="form-control">
              <option value={""}>Select Area</option>
              {districts &&
                districts.length > 0 &&
                districts.map((item, i) => (
                  <option value={item.name}>{item.name}</option>
                ))}
            </select>
          </div>
          <div className="col-md-12">
            <label>Select Store</label>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Store Name</th>
                  <th scope="col">Store Address</th>
                  <th scope="col">Down Payment</th>
                </tr>
              </thead>
              <tbody>
                {stores &&
                  stores.length > 0 &&
                  stores.map((item, i) => (
                    <tr
                      key={++i}
                      className={activeRow === item.name ? "active" : ""}
                      onClick={() => handleRowClick(item.name)}
                    >
                      <th scope="row">{++i}</th>
                      <td>{item?.name}</td>
                      <td>{item?.address}</td>
                      <td>{item?.pay}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <Link href="/online-pre-order" className="btn btn-primary">
            Pay Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PreOrderSettings;
