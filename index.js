const express = require('express');
const app = express();
const port = 9999;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

let employee = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    DOB: "01/01/1990",
    address: "1 Infinite Loop, Cupertino, CA 95014",
    employeeImage: "https://randomuser.me/api/portraits/men/1.jpg",
};

app.get('/employee/:id', (req, res) => {
    if (req.params.id == employee.id) {
        res.send(employee);
    } else {
        res.status(404).send("Employee not found");
    }
});

app.post('/employee/:id', (req, res) => {
    if (req.params.id == employee.id) {
        employee.employeeImage = "data:image/jpg;base64," + req.body.employeeImage;
        res.send("Employee image updated successfully");
    } else {
        res.status(404).send("Employee not found");
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
