import React, { Component } from 'react';

export class Home extends Component {
    static displayName = "Sample Auction Site";

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            user: "John Smith - (jsmith123)",
            data: [{ id: 1, title: "Laptop", description: "In good condition", endDate: "December 12, 2021 9:30 AM", price: 355, bidPrice: 0, userId: "JohnSmith" },
                { id: 2, title: "Guitar", description: "Mint", endDate: "December 14, 2021 2:00 PM", price: 239, bidPrice: 0, userId: "JohnSmith" },
                { id: 3, title: "Mobile Phone - iPhone 12", description: "Carrier locked", endDate: "December 20, 2021 4:00 AM", price: 564, bidPrice: 0, userId: "JohnSmith" },
                { id: 4, title: "Samsung", description: "55 Inch Display OLED", endDate: "December 22, 2021 6:00 AM", price: 1500, bidPrice: 0, userId: "JohnSmith" },

            ]
        };
        this.bid = this.bid.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount() {

    }

    bid = async (e) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.data)
        };

        let response = await fetch('auction', requestOptions);
        const result = await response.json();
        this.setState({ data: result});
    }

    handleInput = (e, id) => {
        const { value } = e.target;

        let forUpdate = this.state.data;
        for (var index = 0; index < forUpdate.length; index++) {
            if (id == forUpdate[index].id) {
                forUpdate[index].bidPrice = parseInt(value);
            }
        }
        this.setState({ data: forUpdate });

    }

    render() {

        return (
            <div>
                <p>Welcome back {this.state.user}!</p>
                <table className='table table-striped' aria-labelledby="tabelLabel">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Item</th>
                            <th>Description</th>
                            <th>End Date</th>
                            <th>Current Price</th>
                            <th>Bid</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(d =>
                            <tr key={d.id}>
                                <td>{d.id}</td>
                                <td>{d.title}</td>
                                <td>{d.description}</td>
                                <td>{d.endDate}</td>
                                <td>{d.price}</td>
                                <td><input type="text" name="amount" onChange={(e) => this.handleInput(e, d.id)} /></td>
                                <td><button className="btn btn-primary" onClick={this.bid}>Bid!</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>
        );
    }

}
