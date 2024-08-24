document.addEventListener('DOMContentLoaded', function () {
    // Retrieve order details from localStorage
    const orderDetails = JSON.parse(localStorage.getItem('orderDetails'));

    if (orderDetails) {
        document.getElementById('puff-name').textContent = orderDetails.name;
        document.getElementById('puff-quantity').textContent = orderDetails.quantity;
        document.getElementById('total-price').textContent = orderDetails.price * orderDetails.quantity;
    } else {
        document.querySelector('main').innerHTML = '<p>No order details found.</p>';
    }
});
