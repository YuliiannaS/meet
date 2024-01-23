import { useState, useEffect } from 'react';
import {
    PieChart,
    Pie,
    ResponsiveContainer,
    Cell
} from 'recharts';

const EventGenresChart = ({ events }) => {
    const [data, setData] = useState([]);

    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];

    useEffect(() => {
        setData(getData());
    }, [events]);

    const getData = () => {
        const totalEvents = events.length;
        const data = genres.map((genre, index) => {
            const filteredEvents = events.filter(event => event.summary.includes(genre));
            return {
                name: genre,
                value: filteredEvents.length,
                percentage: (filteredEvents.length / totalEvents) * 100
            };
        });
        return data;
    };

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

    return (
        <ResponsiveContainer width="49%" height={400}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="value"
                    fill="#8884d8"
                    labelLine={false}
                    label={(entry) => entry.name}
                    outerRadius={130}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}

export default EventGenresChart;