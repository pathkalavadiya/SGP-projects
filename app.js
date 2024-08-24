document.addEventListener('DOMContentLoaded', function () {
    const orderButtons = document.querySelectorAll('.order-btn');

    orderButtons.forEach(button => {
        button.addEventListener('click', function () {
            const puffBox = this.parentElement;
            const puffName = puffBox.dataset.name;
            const puffPrice = puffBox.dataset.price;
            const puffQuantity = puffBox.querySelector('.quantity').value;

            // Store order details in localStorage
            const orderDetails = {
                name: puffName,
                price: puffPrice,
                quantity: puffQuantity
            };
            localStorage.setItem('orderDetails', JSON.stringify(orderDetails));

            // Redirect to the order details page
            window.location.href = 'order-details.html';
        });
    });

    // Review submission logic
    const submitReviewButton = document.getElementById('submit-review');
    submitReviewButton.addEventListener('click', function () {
        const reviewText = document.getElementById('review').value;
        if (reviewText) {
            alert('Thank you for your review!');
            document.getElementById('review').value = '';
        } else {
            alert('Please write a review before submitting.');
        }
    });
});
/*document.addEventListener('DOMContentLoaded', function () {
    const orderButtons = document.querySelectorAll('.order-btn');

    orderButtons.forEach(button => {
        button.addEventListener('click', function () {
            const puffBox = this.parentElement;
            const puffName = puffBox.getAttribute('data-name');
            const puffPrice = parseFloat(puffBox.getAttribute('data-price'));
            const quantityInput = puffBox.querySelector('.quantity');
            const quantity = parseInt(quantityInput.value);

            const orderDetails = {
                name: puffName,
                price: puffPrice,
                quantity: quantity,
                totalPrice: puffPrice * quantity
            };

            // Store the order details in localStorage
            localStorage.setItem('orderDetails', JSON.stringify(orderDetails));

            // Navigate to the order details page
            window.location.href = 'order-details.html';
        });
    });
});*/

