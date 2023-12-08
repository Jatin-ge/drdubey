import { db } from "@/lib/db";
import { useParams } from "next/navigation";

const PaymentReceipt = async({params}: {params: {patientId: string}}) => {


    const payment = await db.lead.findUnique({
        where: {
            id: params.patientId
        }
    })

    if(!payment){
        return <div>
            <h1>Payment not found</h1>
        </div>
    }    
    

    return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Patient Invoice</h2>
        <span className="text-gray-500">Invoice #12345</span>
      </div>

      {/* Patient Information */}
      <div className="border-b border-gray-300 pb-4 mb-4">
        <h3 className="text-lg font-semibold mb-2">Patient Information</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Name:</p>
            <p className="font-medium">{payment.name}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Patient ID:</p>
            <p className="font-medium">{payment.id}</p>
          </div>
          {/* Add more patient details as needed */}
        </div>
      </div>

      {/* Invoice Details */}
      <div className="border-b border-gray-300 pb-4 mb-4">
        <h3 className="text-lg font-semibold mb-2">Invoice Details</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Date:</p>
            <p className="font-medium">December 8, 2023</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Amount paid:</p>
            <p className="font-medium">{payment.bill}</p>
          </div>
          {/* Add more invoice details as needed */}
        </div>
      </div>

      {/* Invoice Items */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Invoice Details</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 text-left">Description</th>
                <th className="py-2 px-4 text-left">Surgery</th>
                <th className="py-2 px-4 text-left">Cost</th>
                <th className="py-2 px-4 text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              {/* Sample Invoice Items */}
              <tr>
                <td className="py-2 px-4">Consultation</td>
                <td className="py-2 px-4">1</td>
                <td className="py-2 px-4">$150.00</td>
                <td className="py-2 px-4">$150.00</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Medication</td>
                <td className="py-2 px-4">1</td>
                <td className="py-2 px-4">$100.00</td>
                <td className="py-2 px-4">$100.00</td>
              </tr>
              {/* Add more invoice items as needed */}
            </tbody>
          </table>
        </div>
      </div>

      {/* Total Amount */}
      <div className="mt-4">
        <p className="text-xl font-semibold">Total Amount Due: $250.00</p>
      </div>
    </div>
  );
}
 
export default PaymentReceipt;