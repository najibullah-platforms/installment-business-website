import { useState } from "react";

function InstallmentCalculator() {
  const [price, setPrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [months, setMonths] = useState(12);

  const remaining = Math.max(0, Number(price) - Number(downPayment));

  const monthly =
    months > 0 ? Math.round(remaining / months) : 0;

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">

        <h2 className="text-4xl font-bold text-center mb-8">
          Installment Calculator
        </h2>

        <div className="space-y-5">

          <input
            type="number"
            placeholder="Product Price"
            className="w-full border p-3 rounded-lg"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <input
            type="number"
            placeholder="Down Payment"
            className="w-full border p-3 rounded-lg"
            value={downPayment}
            onChange={(e) => setDownPayment(e.target.value)}
          />

          <label htmlFor="months">Select duration</label>

          <select
            id="months"
            name="months"
            className="w-full border p-3 rounded-lg"
            value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
          >
            <option value={6}>6 Months</option>
            <option value={12}>12 Months</option>
            <option value={18}>18 Months</option>
            <option value={24}>24 Months</option>
          </select>

        </div>

        <div className="mt-8 bg-blue-50 rounded-lg p-6">

          <p className="text-xl">
            Remaining Amount:
            <strong> PKR {remaining.toLocaleString()}</strong>
          </p>

          <p className="text-xl mt-3">
            Monthly Payment:
            <strong> PKR {monthly.toLocaleString()}</strong>
          </p>

        </div>

      </div>
    </section>
  );
}

export default InstallmentCalculator;