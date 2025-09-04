
const purchaseHistory = [
    {
        id: 1,
        productName: "iPhone 12 Pro Max",
        variation: "256GB, Pacific Blue",
        quantity: 1,
        unit: "piece",
        price: 1200,
        orderDate: "2025-01-10",
        deliveryDate: "2025-01-15",
        payment: "Success"
    },
    {
        id: 2,
        productName: "AirPods Pro (2nd Gen)",
        variation: "White",
        quantity: 2,
        unit: "piece",
        price: 500,
        orderDate: "2025-02-01",
        deliveryDate: "2025-02-05",
        payment: "Pending"
    },
    {
        id: 3,
        productName: "Organic Mango",
        variation: "Himsagar",
        quantity: 5,
        unit: "kg",
        price: 25,
        orderDate: "2025-05-20",
        deliveryDate: "2025-05-22",
        payment: "Success"
    },
    {
        id: 4,
        productName: "Men's Running Shoes",
        variation: "Size 42, Black/Red",
        quantity: 1,
        unit: "pair",
        price: 90,
        orderDate: "2025-06-02",
        deliveryDate: "2025-06-06",
        payment: "Pending"
    },
    {
        id: 5,
        productName: "Laptop Stand",
        variation: "Adjustable, Silver",
        quantity: 1,
        unit: "piece",
        price: 40,
        orderDate: "2025-07-10",
        deliveryDate: "2025-07-12",
        payment: "Success"
    },
    {
        id: 6,
        productName: "Laptop Stand",
        variation: "Adjustable, Silver",
        quantity: 1,
        unit: "piece",
        price: 40,
        orderDate: "2025-07-10",
        deliveryDate: "2025-07-12",
        payment: "Pending"
    },
    {
        id: 7,
        productName: "Laptop Stand",
        variation: "Adjustable, Silver",
        quantity: 1,
        unit: "piece",
        price: 40,
        orderDate: "2025-07-10",
        deliveryDate: "2025-07-12",
        payment: "Success"
    },
    {
        id: 8,
        productName: "Laptop Stand",
        variation: "Adjustable, Silver",
        quantity: 1,
        unit: "piece",
        price: 40,
        orderDate: "2025-07-10",
        deliveryDate: "2025-07-12",
        payment: "Success"
    },
    {
        id: 9,
        productName: "Laptop Stand",
        variation: "Adjustable, Silver",
        quantity: 1,
        unit: "piece",
        price: 40,
        orderDate: "2025-07-10",
        deliveryDate: "2025-07-12",
        payment: "Pending"
    },
    {
        id: 10,
        productName: "Laptop Stand",
        variation: "Adjustable, Silver",
        quantity: 1,
        unit: "piece",
        price: 40,
        orderDate: "2025-07-10",
        deliveryDate: "2025-07-12",
        payment: "Success"
    },

];



const OrderHistory = () => {

    return (
        <div className="max-w-full">
            <div className="overflow-x-auto max-h-96 overflow-y-auto">
                <table className="min-w-full">
                    <thead className="bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
                        <tr>
                            <th className="py-4 px-6 text-left text-gray-700 font-bold text-sm tracking-wider">
                                Product
                            </th>
                            <th className="py-4 px-6 text-left text-gray-700 font-bold text-sm tracking-wider">
                                Variation
                            </th>
                            <th className="py-4 px-6 text-center text-gray-700 font-bold text-sm tracking-wider">
                                Quantity
                            </th>
                            <th className="py-4 px-6 text-center text-gray-700 font-bold text-sm tracking-wider">
                                Unit
                            </th>
                            <th className="py-4 px-6 text-right text-gray-700 font-bold text-sm tracking-wider">
                                Price
                            </th>
                            <th className="py-4 px-6 text-center text-gray-700 font-bold text-sm tracking-wider">
                                Order Date
                            </th>
                            <th className="py-4 px-6 text-center text-gray-700 font-bold text-sm tracking-wider">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {purchaseHistory.map((item, idx) => (
                            <tr
                                key={item.id}
                                className={`hover:bg-gray-100 transition-colors duration-200 text-[16px] ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                                    }`}
                            >
                                <td className="py-4 px-6 text-gray-600">{item.productName}</td>
                                <td className="py-4 px-6 text-gray-600">{item.variation}</td>
                                <td className="py-4 px-6 text-center text-gray-600">{item.quantity}</td>
                                <td className="py-4 px-6 text-center text-gray-600">{item.unit}</td>
                                <td className="py-4 px-6 text-right text-gray-600">
                                    {item.price} <span className="text-xl">&#x09F3;</span>
                                </td>
                                <td className="py-4 px-6 text-center text-gray-600">{item.orderDate}</td>
                                <td className="py-4 px-6 text-center text-gray-600">
                                    <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${item.payment === "Success"
                                        ? "bg-green-50 text-green-700 border border-green-200"
                                        : "bg-yellow-50 text-yellow-700 border border-yellow-200"
                                        }`}>
                                        <span className={`w-2 h-2 rounded-full ${item.payment === "Success" ? "bg-green-500" : "bg-yellow-500"
                                            }`}></span>
                                        {item.payment}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderHistory;
