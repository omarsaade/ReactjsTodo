import React from 'react';
import Chart from '../Chart/Chart';


const ExpensesChart = (props) => {

    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },//value:1294
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },//value:450
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ];


    //hay la ta3dil el charDataPoints array 3an tari2 el array filtered li nba3atet men barra
    for (const expense of props.expenses) {

        const expenseMonth = expense.date.getMonth();
        // console.log(expenseMonth);//2(2) , 5
        chartDataPoints[expenseMonth].value += expense.amount;//1294
        // console.log(chartDataPoints);
    }




    return (
        <Chart dataPoints={chartDataPoints} />
    );
}

export default ExpensesChart;