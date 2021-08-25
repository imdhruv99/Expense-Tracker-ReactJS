import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>
                June 28th 1999
            </div>
            <div className="expense-item__description">
                <h2>Lunch</h2>
            </div>
            <div className="expense-item__price">
                50 INR
            </div>
        </div>
    )
}

export default ExpenseItem;