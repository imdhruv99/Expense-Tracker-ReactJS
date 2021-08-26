import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import React, { useState } from 'react';

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);

    return (

        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
            </div>
            <div className="expense-item__price">
                {props.amount} INR
            </div>
        </Card>

    );
}

export default ExpenseItem;