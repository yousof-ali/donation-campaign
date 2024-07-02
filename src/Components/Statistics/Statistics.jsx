import { useLoaderData } from "react-router-dom";
import { getDonateId } from "../Utility/utility";
import { PieChart, Pie,  Tooltip, Legend, Cell } from 'recharts';



const Statistics = () => {
    const allData = useLoaderData();
    const donateData = getDonateId()
    const result1 = ((donateData.length / allData.length) * 100).toFixed(2);
    const result2 = (100 - result1).toFixed(2);

    const data = [
        { name: 'Your Donation', value: parseFloat(result1) },
        { name: 'Total Donation', value: parseFloat(result2) },

    ];
    const COLORS = ['green', 'red']
    return (
        <div className="w-full flex justify-center mx-auto max-w-xl">
            <PieChart width={300} height={400}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={true}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {
                        data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))
                    }
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>

        </div>
    );
};

export default Statistics;