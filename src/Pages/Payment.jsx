import { AiOutlineGoogle } from "react-icons/ai";

const Payment = () => {
  return (
    <div className="Payment">
      <div className="Payment_Container">
        <div className="Payment_top">
            <button> <AiOutlineGoogle/>Pay</button>
            <h5 className="try_another">Pay Another Way</h5>
        </div>
        <form>
        <h3 className="Payment_subheading">Shipping Information</h3>
          <div className="form_payment">
            <div className="Payment_form_labels">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Email" />
            </div>
            <div className="Payment_form_labels">
              <label htmlFor="shipping_address">Shipping Address</label>
              <input type="text" placeholder="Shipping Address" />
            </div>
          </div>

          <div className="payment_method">
          <h3 className="Payment_subheading">Shipping Information</h3>
          <div className="payment_method_boxes">

          </div>
          <div className="Payment_form_labels">
              <label htmlFor="card">Card Information</label>
              <input type="text" placeholder="Email" />
              <div className="card_information">
                <input type="text" placeholder="MM / YY" />
                <input type="text" placeholder="123" />
              </div>
            </div>
          </div>
          <button>Pay</button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
