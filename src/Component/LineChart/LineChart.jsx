import PropTypes from 'prop-types';
import { LineChart as LCChart, Line , XAxis, YAxis } from 'recharts';
const LineChart = () => {
    const studentsData = [
        { id: 'S001', name: 'Alice', mathMarks: 55, physicsMarks: 78, chemistryMarks: 90 },
        { id: 'S002', name: 'Bob', mathMarks: 78, physicsMarks: 85, chemistryMarks: 75 },
        { id: 'S003', name: 'Charlie', mathMarks: 92, physicsMarks: 90, chemistryMarks: 88 },
        { id: 'S004', name: 'David', mathMarks: 70, physicsMarks: 32, chemistryMarks: 68 },
        { id: 'S005', name: 'Eve', mathMarks: 18, physicsMarks: 85, chemistryMarks: 90 },
        { id: 'S006', name: 'Frank', mathMarks: 75, physicsMarks: 68, chemistryMarks: 72 },
        { id: 'S007', name: 'Grace', mathMarks: 60, physicsMarks: 75, chemistryMarks: 10 },
        { id: 'S008', name: 'Helen', mathMarks: 68, physicsMarks: 70, chemistryMarks: 65 },
        { id: 'S009', name: 'Ivy', mathMarks: 60, physicsMarks: 88, chemistryMarks: 92 },
        { id: 'S010', name: 'Jack', mathMarks: 83, physicsMarks: 22, chemistryMarks: 85 }
      ];
      
    return (
        <div>
             <LCChart width={1000} height={600} data={studentsData}>
                    <XAxis dataKey={"name"} ></XAxis>
                    <YAxis></YAxis>
                <Line dataKey="mathMarks" stroke='green'></Line>
                <Line dataKey={"physicsMarks"} stroke='blue'></Line>
                <Line dataKey={"chemistryMarks"} stroke='red'></Line>
             </LCChart>
        </div>
    );
};

LineChart.propTypes = {
    
};

export default LineChart;